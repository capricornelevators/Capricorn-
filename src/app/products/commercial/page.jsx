import Commercial from '../../../views/Commercial';
import JsonLd from '../../../components/JsonLd';
import { pageMetadata } from '../../../lib/seo';
import { breadcrumbSchema, productSchema } from '../../../lib/schema';

export const metadata = pageMetadata({
  title: 'Commercial Elevators in Kerala',
  description:
    'Commercial passenger elevators for offices, hotels, hospitals and retail buildings in Kerala — high-traffic duty, energy efficient, fully serviced.',
  path: '/products/commercial/',
});

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Capricorn Commercial Elevators',
          description:
            'Passenger and service elevators for commercial buildings, engineered for high traffic, energy efficiency and reliability.',
          path: '/products/commercial/',
          category: 'Commercial elevator',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Products', path: '/products/commercial/' },
          { name: 'Commercial Elevators', path: '/products/commercial/' },
        ])}
      />
      <Commercial />
    </>
  );
}
