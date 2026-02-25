import { Heebo } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/globals.css';
import SkipLink from './components/SkipLink';
import Footer from './components/Footer';
import { SITE_URL, PHONE_INTL, EMAIL } from './lib/constants';

const heebo = Heebo({
  subsets: ['latin', 'hebrew'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-heebo',
});

export const viewport = {
  themeColor: '#2A6B6B',
};

export const metadata = {
  title: 'אנאלה — שותף לניהול ספא',
  description: 'אנאלה מתכננת, מקימה ומנהלת עבורך את מתחם הספא - מהחדר הריק ועד צוות מקצועי מוסמך ותפריטי טיפולים.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%232A6B6B'/%3E%3Ctext x='16' y='23' text-anchor='middle' font-size='20' font-weight='bold' fill='white' font-family='sans-serif'%3EA%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    siteName: 'אנאלה',
    title: 'אנאלה — שותף לניהול ספא',
    description: 'אנאלה מתכננת, מקימה ומנהלת עבורך את מתחם הספא - מהחדר הריק ועד צוות מקצועי מוסמך ותפריטי טיפולים.',
    images: [
      {
        url: '/images/spa-treatment.webp',
        width: 456,
        height: 376,
        alt: 'טיפול ספא מקצועי',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אנאלה — שותף לניהול ספא',
    description: 'אנאלה מתכננת, מקימה ומנהלת עבורך את מתחם הספא - מהחדר הריק ועד צוות מקצועי מוסמך ותפריטי טיפולים.',
    images: ['/images/spa-treatment.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'אנאלה — שותף לניהול ספא',
  description: 'אנאלה מתכננת, מקימה ומנהלת עבורך את מתחם הספא - מהחדר הריק ועד צוות מקצועי מוסמך ותפריטי טיפולים.',
  url: SITE_URL,
  telephone: PHONE_INTL,
  email: EMAIL,
  image: `${SITE_URL}/images/spa-treatment.webp`,
  logo: `${SITE_URL}/images/spa-treatment.webp`,
  areaServed: { '@type': 'Country', name: 'Israel' },
  serviceType: ['ניהול ספא', 'הקמת ספא', 'גיוס והכשרת צוותי ספא'],
  inLanguage: 'he',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`scroll-smooth ${heebo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-text-main font-sans antialiased">
        <SkipLink />
        <main id="main">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
