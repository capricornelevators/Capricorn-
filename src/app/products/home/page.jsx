import Residential from '../../../views/Residential';
import JsonLd from '../../../components/JsonLd';
import { pageMetadata } from '../../../lib/seo';
import { breadcrumbSchema, productSchema } from '../../../lib/schema';

export const metadata = pageMetadata({
  title: 'Home Lifts & Elevators in Kerala',
  description:
    'Home elevators for Kerala villas and apartments. Compact shafts, premium cabin finishes and safety systems built for Indian homes.',
  path: '/products/home/',
});

export default function HomeLiftsPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Capricorn Home Elevators',
          description:
            'Residential home lifts engineered for Kerala homes, with compact shaft requirements, premium cabin finishes and power-failure rescue.',
          path: '/products/home/',
          category: 'Home elevator',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Products', path: '/products/home/' },
          { name: 'Home Elevators', path: '/products/home/' },
        ])}
      />
      <Residential />
    </>
  );
}
