import { NextRequest, NextResponse } from 'next/server';

const ANALYTICS_PASSWORD = process.env.ANALYTICS_PASSWORD || 'analytics';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (password === ANALYTICS_PASSWORD) {
      const response = NextResponse.json({ success: true });
      response.cookies.set('analytics_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const authCookie = request.cookies.get('analytics_auth');
  if (authCookie && authCookie.value === 'authenticated') {
    return NextResponse.json({ authenticated: true });
  }
  return NextResponse.json({ authenticated: false }, { status: 401 });
}
