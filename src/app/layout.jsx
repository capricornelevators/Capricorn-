import '../index.css';
import '../App.css';
import 'aos/dist/aos.css';
import JsonLd from '../components/JsonLd';
import { organizationSchema } from '../lib/schema';
import { ORG, SITE_URL } from '../lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Capricorn Elevators | Luxury Home & Commercial Elevators',
    template: '%s | Capricorn Elevators',
  },
  description: ORG.description,
  applicationName: ORG.name,
  // No `alternates.canonical` here: a canonical set on the root layout is
  // inherited by every child route, which pointed all pages at the homepage.
  // Each page declares its own self-referencing canonical instead.
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/assets/logo2.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Cormorant:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Montserrat:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <JsonLd data={organizationSchema()} />
        <div className="App">
          {children}
        </div>
      </body>
    </html>
  );
}
