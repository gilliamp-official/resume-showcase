import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootLayout from '@/components/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paul Gilliam - Analytics & Solutions Leader | Transportation & B2B SaaS',
  description: 'Analytics and solutions leader with 8+ years building data platforms, presenting technical solutions to customers, and validating business value through analytics. I have a wide variety of experiences in using different data tools to tell the right story at the right time.',
  keywords: [
    'Analytics Leader',
    'Solutions Engineer',
    'Data Platform',
    'Snowflake',
    'Azure ML/AI',
    'Power BI',
    'Python',
    'Machine Learning',
    'Business Analytics',
    'Customer Analytics',
    'Transportation Software',
    'B2B SaaS',
    'Data Validation',
    'Technical Presentations'
  ].join(', '),
  openGraph: {
    title: 'Paul Gilliam - Analytics & Solutions Leader',
    description: 'Building data platforms and validating business value through analytics. Snowflake, Azure ML/AI, Power BI expertise. National innovation award winner.',
    url: 'https://paul.gilliamclan.com',
    siteName: 'Paul Gilliam - Analytics & Solutions Leadership',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Paul Gilliam - Analytics & Solutions Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Gilliam - Analytics & Solutions Leader',
    description: 'Building data platforms and validating business value through analytics.',
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
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Paul Gilliam",
              "jobTitle": "Analytics & Solutions Leader",
              "description": "Analytics and solutions leader specializing in data platforms, machine learning, and business validation through analytics",
              "url": "https://paul.gilliamclan.com",
              "sameAs": [
                "https://linkedin.com/in/pgilliam2",
                "https://github.com/gilliamp-official"
              ],
              "knowsAbout": [
                "Data Analytics",
                "Solutions Engineering",
                "Snowflake",
                "Azure Machine Learning",
                "Power BI",
                "Python",
                "Business Intelligence",
                "Customer Analytics",
                "Transportation Software",
                "B2B SaaS"
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Quantic School of Business and Technology",
                  "description": "MBA in Business Management"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "University of Colorado, Colorado Springs",
                  "description": "B.S. Information Systems, Summa Cum Laude, 4.0 GPA"
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
