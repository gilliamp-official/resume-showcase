'use client'
import React, { ReactNode } from 'react';
import profileData from '@/data/profile.json';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

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