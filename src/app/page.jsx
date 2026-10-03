import Home from '../views/Home';
import JsonLd from '../components/JsonLd';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Elevator Company in Kochi, Kerala | Home & Commercial Lifts',
  description:
    'Capricorn Elevators designs, installs and maintains luxury home lifts and commercial elevators across Kochi and Kerala. AMC for all elevator brands.',
  path: '/',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': 'https://www.capricornelevators.com/#webpage',
          url: 'https://www.capricornelevators.com/',
          name: 'Elevator Company in Kochi, Kerala | Capricorn Elevators',
          about: { '@id': 'https://www.capricornelevators.com/#localbusiness' },
          isPartOf: { '@id': 'https://www.capricornelevators.com/#website' },
        }}
      />
      <Home />
    </>
  );
}
