import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Keep the CSS for the color scheme
import RootLayout from '@/components/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paul Gilliam - Senior Product Manager',
  description: 'Senior Product Manager specializing in AI-powered B2B SaaS solutions and revenue growth.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
