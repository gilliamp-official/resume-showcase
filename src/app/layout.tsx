import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootLayout from '@/components/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paul Gilliam - Senior Product Leader | B2B SaaS | Customer Discovery | Teams That Ship',
  description: 'Senior product leader with 8+ years building B2B SaaS products the way founders do: close to the customer, cross-functional by default, and focused on outcomes worth paying for. Inc. Magazine Innovation Award winner. $6M+ ARR growth contributed.',
  keywords: [
    'Product Manager',
    'Senior Product Manager',
    'Director of Product Management',
    'Principal Product Manager',
    'B2B SaaS Product Leader',
    'Customer Discovery',
    'Product Strategy',
    'Go-to-Market Strategy',
    'Cross-Functional Leadership',
    'Platform Strategy',
    'Enterprise Software',
    'AI Product Strategy',
    'Data Storytelling',
    'Embedded Analytics',
    'Product Led Growth',
    'Roadmap Prioritization',
    'Stakeholder Management',
    'People Management',
    'Vertical SaaS',
    'Revenue Growth',
    'Inc. Magazine Innovation Award',
    'SmartMoving',
    'Capital One Software',
    'McKinney Texas',
    'Dallas Product Manager',
  ].join(', '),
  openGraph: {
    title: 'Paul Gilliam - Senior Product Leader | B2B SaaS',
    description: 'I rally teams around problems worth solving. 8+ years building B2B SaaS products through customer discovery, cross-functional execution, and a relentless focus on outcomes that matter.',
    url: 'https://paul.gilliamclan.com',
    siteName: 'Paul Gilliam - Product Leader',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Paul Gilliam - Senior Product Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Gilliam - Senior Product Leader | B2B SaaS',
    description: 'I rally teams around problems worth solving. Inc. Magazine Innovation Award winner. $6M+ ARR growth contributed.',
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
        <meta name="theme-color" content="#1a2b4a" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Paul Gilliam",
              "jobTitle": "Senior Product Leader",
              "description": "Senior product leader with 8+ years building B2B SaaS products through customer discovery, cross-functional execution, and outcomes that drive revenue growth.",
              "url": "https://paul.gilliamclan.com",
              "sameAs": [
                "https://linkedin.com/in/pgilliam2",
                "https://github.com/gilliamp-official",
                "https://theproductpipeline.substack.com"
              ],
              "knowsAbout": [
                "Product Management",
                "Product Strategy",
                "Customer Discovery",
                "B2B SaaS",
                "Go-to-Market Strategy",
                "Platform Strategy",
                "Cross-Functional Leadership",
                "AI Prototyping",
                "Data Storytelling",
                "Embedded Analytics",
                "People Management",
                "Roadmap Prioritization",
                "Enterprise Software",
                "Vertical SaaS"
              ],
              "award": "Inc. Magazine National Innovation Award - Smart Insights Analytics Platform",
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Quantic School of Business and Technology",
                  "description": "MBA in Business Management"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Colorado Colorado Springs",
                  "description": "B.S. Information Systems, Summa Cum Laude, 4.0 GPA"
                }
              ],
              "workLocation": {
                "@type": "Place",
                "name": "McKinney, Texas, United States"
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