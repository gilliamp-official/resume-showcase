import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR  = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'analytics-data.json');

interface AnalyticsEvent {
  page: string;
  userAgent: string;
  referrer: string;
  timestamp: number;
  sessionId: string;
  sessionDuration?: number;
  ip: string;
  device: string;
  browser: string;
  eventType?: 'page_view' | 'section_view';
  section?: string;
}

function parseDevice(ua: string): string {
  if (/mobile|android|iphone|ipad|ipod/i.test(ua)) {
    if (/ipad|tablet/i.test(ua)) return 'Tablet';
    return 'Mobile';
  }
  return 'Desktop';
}

function parseBrowser(ua: string): string {
  if (/edg\//i.test(ua)) return 'Edge';
  if (/chrome|crios/i.test(ua)) return 'Chrome';
  if (/firefox|fxios/i.test(ua)) return 'Firefox';
  if (/safari/i.test(ua)) return 'Safari';
  if (/opera|opr/i.test(ua)) return 'Opera';
  return 'Other';
}

async function ensureDataDir(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readEvents(): Promise<AnalyticsEvent[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeEvents(events: AnalyticsEvent[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(DATA_FILE, JSON.stringify(events, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { page, userAgent, referrer, timestamp, sessionId, sessionDuration, eventType, section } = body;

    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') ?? 'unknown';

    const event: AnalyticsEvent = {
      page:      page || '/',
      userAgent: userAgent || '',
      referrer:  referrer || '',
      timestamp: timestamp || Date.now(),
      sessionId: sessionId || 'unknown',
      sessionDuration,
      ip,
      device:    parseDevice(userAgent || ''),
      browser:   parseBrowser(userAgent || ''),
      eventType: eventType || 'page_view',
      section:   section || undefined,
    };

    const events = await readEvents();
    events.push(event);
    await writeEvents(events);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics POST error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const authCookie = request.cookies.get('analytics_auth');
  if (!authCookie || authCookie.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const events = await readEvents();
    return NextResponse.json({ events });
  } catch (error) {
    console.error('Analytics GET error:', error);
    return NextResponse.json({ events: [] });
  }
}