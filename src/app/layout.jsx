import '../index.css';
import '../App.css';
import 'aos/dist/aos.css';

export const metadata = {
  metadataBase: new URL('https://www.capricornelevators.com'),
  title: 'Capricorn Elevators | Luxury Home & Commercial Elevators',
  description: 'Capricorn Elevators offers premium residential and commercial elevator solutions, engineered with advanced safety, efficiency, and timeless design.',
  alternates: {
    canonical: 'https://www.capricornelevators.com/',
  },
  icons: {
    icon: '/assets/logo2.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.capricornelevators.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Cormorant:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="App">
          {children}
        </div>
      </body>
    </html>
  );
}
