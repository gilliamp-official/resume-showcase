import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Keep the CSS for the color scheme
import RootLayout from '@/components/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paul Gilliam - Strategic Product Leader | Platform Innovation & Market Category Creation',
  description: 'Strategic Product Leader specializing in market opportunity identification, platform economics, and competitive advantage creation. $5M+ platform transformation and $100M+ market opportunities identified through systematic strategic analysis.',
  keywords: [
    'Strategic Product Leader',
    'VP Product',
    'Market Category Creation',
    'Platform Economics',
    'Competitive Intelligence',
    'Strategic Customer Discovery',
    'Platform Strategy',
    'Market Opportunity Identification',
    'Strategic Analysis',
    'Business Strategy',
    'Revenue Growth',
    'Strategic Partnerships'
  ].join(', '),
  openGraph: {
    title: 'Paul Gilliam - Strategic Product Leader',
    description: 'Market opportunity identification and platform transformation specialist. $5M+ strategic impact and $100M+ opportunities identified.',
    url: 'https://paul.gilliamclan.com',
    siteName: 'Paul Gilliam - Strategic Product Leadership',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // You'll want to add this
        width: 1200,
        height: 630,
        alt: 'Paul Gilliam - Strategic Product Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Gilliam - Strategic Product Leader',
    description: 'Market opportunity identification and platform transformation specialist.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://paul.gilliamclan.com',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Schema.org structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Paul Gilliam",
              "jobTitle": "Strategic Product Leader",
              "description": "Strategic Product Leader specializing in market opportunity identification, platform economics, and competitive advantage creation",
              "url": "https://paul.gilliamclan.com",
              "sameAs": [
                "https://linkedin.com/in/pgilliam2",
                "https://github.com/gilliamp-official"
              ],
              "knowsAbout": [
                "Strategic Product Leadership",
                "Market Category Creation",
                "Platform Economics",
                "Competitive Intelligence",
                "Strategic Customer Discovery",
                "Platform Strategy",
                "Market Opportunity Identification"
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Quantic School of Business and Technology",
                  "description": "MBA in Strategic Business Management"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "University of Colorado, Colorado Springs",
                  "description": "B.S. Information Systems & Business Administration, Summa Cum Laude"
                }
              ],
              "workLocation": {
                "@type": "Place",
                "name": "Dallas, Texas, United States"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}