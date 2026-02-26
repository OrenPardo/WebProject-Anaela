import { Heebo } from 'next/font/google';
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
  keywords: ['ניהול ספא', 'הקמת ספא', 'ספא במלון', 'גיוס צוות ספא', 'אנאלה', 'ניהול ספא במלון', 'ספא מקצועי', 'spa management', 'hotel spa'],
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: '/apple-touch-icon.svg',
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
  '@id': SITE_URL,
  name: 'אנאלה — שותף לניהול ספא',
  description: 'אנאלה מתכננת, מקימה ומנהלת עבורך את מתחם הספא - מהחדר הריק ועד צוות מקצועי מוסמך ותפריטי טיפולים.',
  url: SITE_URL,
  telephone: PHONE_INTL,
  email: EMAIL,
  image: `${SITE_URL}/images/spa-treatment.webp`,
  logo: `${SITE_URL}/images/spa-treatment.webp`,
  address: { '@type': 'PostalAddress', addressCountry: 'IL' },
  areaServed: { '@type': 'Country', name: 'Israel' },
  serviceType: ['ניהול ספא', 'הקמת ספא', 'גיוס והכשרת צוותי ספא'],
  knowsAbout: ['ניהול ספא במלונות', 'הקמת מתחמי ספא', 'גיוס והכשרת צוותים מקצועיים', 'תפריטי טיפולים'],
  priceRange: '₪₪',
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
      </body>
    </html>
  );
}
