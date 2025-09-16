import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Revolut Pre-IPO Investment Opportunity | Invest in the Future of Fintech via Notice',
  description:
    "Explore an exclusive opportunity to invest in Revolut's pre-IPO shares via Notice secondary market platform. Learn about Revolut's market leadership, explosive growth, and IPO filing. Join leading institutional investors in this transformative fintech investment.",
  keywords: [
    'Revolut',
    'pre-IPO',
    'investment',
    'fintech',
    'digital banking',
    'Notice platform',
    'Revolut stock',
    'invest in Revolut',
    'fintech investment',
    'technology stocks',
    'secondary market',
    'institutional investment',
    'digital payments',
    'cryptocurrency',
    'wealth management',
    'mobile banking',
    'financial technology',
    'NASDAQ REVU',
    'IPO filed',
    'Notice.co',
    'accredited investors',
    'SPV investment',
    'Series E funding',
    'unicorn company',
    'IPO 2025',
    'Tiger Global',
    'Index Ventures',
  ],
  authors: [{ name: 'Notice Investment Team' }],
  creator: 'Notice Investment Team',
  publisher: 'Notice, Inc.',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://revolut-investment.com',
    title:
      'Revolut Pre-IPO Investment Opportunity | Invest in the Future of Fintech via Notice',
    description:
      "Explore an exclusive opportunity to invest in Revolut's pre-IPO shares via Notice secondary market platform. Join leading institutional investors in this transformative fintech investment.",
    siteName: 'Revolut Investment Opportunity',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Revolut Pre-IPO Investment Opportunity via Notice Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Revolut Pre-IPO Investment Opportunity | Invest in the Future of Fintech via Notice',
    description:
      "Explore an exclusive opportunity to invest in Revolut's pre-IPO shares via Notice secondary market platform. Join leading institutional investors in this transformative fintech investment.",
    images: ['/og-image.png'],
    creator: '@revolut',
  },
  alternates: {
    canonical: 'https://revolut-investment.com',
  },
  category: 'Investment',
  classification: 'Investment Opportunity',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://revolut-investment.com'),
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'revolut-investment-verification',
    yandex: 'revolut-investment-yandex-verification',
    yahoo: 'revolut-investment-yahoo-verification',
    other: {
      'msvalidate.01': 'revolut-investment-bing-verification',
      'p:domain_verify': 'revolut-investment-pinterest-verification',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Favicon Links */}
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Android Chrome Icons */}
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/android-chrome-512x512.png'
        />

        {/* Theme Color */}
        <meta name='theme-color' content='#ffffff' />
        <meta name='msapplication-TileColor' content='#ffffff' />

        {/* Additional SEO */}
        <meta name='application-name' content='Revolut Investment' />
        <meta name='apple-mobile-web-app-title' content='Revolut Investment' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='mobile-web-app-capable' content='yes' />

        {/* Google Fonts optimization is handled automatically by next/font */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
