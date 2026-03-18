'use client'
import React, { ReactNode, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import profileData from '@/data/profile.json';

interface RootLayoutProps {
  children: ReactNode;
}

function getSessionId(): string {
  let sid = sessionStorage.getItem('analytics_sid');
  if (!sid) {
    sid = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('analytics_sid', sid);
    sessionStorage.setItem('analytics_start', Date.now().toString());
  }
  return sid;
}

function getSessionDuration(): number {
  const start = sessionStorage.getItem('analytics_start');
  if (!start) return 0;
  return Math.round((Date.now() - parseInt(start, 10)) / 1000);
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  const sendEvent = useCallback((page: string, sessionDuration?: number) => {
    const payload = JSON.stringify({
      page,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: Date.now(),
      sessionId: getSessionId(),
      sessionDuration,
    });
    navigator.sendBeacon('/api/analytics', payload);
  }, []);

  useEffect(() => {
    if (pathname === '/analytics') return;
    sendEvent(pathname);
  }, [pathname, sendEvent]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && pathname !== '/analytics') {
        sendEvent(pathname, getSessionDuration());
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [pathname, sendEvent]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main>
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {profileData.basics.name}. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}