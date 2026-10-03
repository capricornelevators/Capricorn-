import Services from '../../views/Services';
import JsonLd from '../../components/JsonLd';
import { pageMetadata } from '../../lib/seo';
import { breadcrumbSchema, serviceSchema } from '../../lib/schema';

export const metadata = pageMetadata({
  title: 'Elevator AMC & Modernization in Kerala',
  description:
    'Elevator maintenance, modernization, repair and installation across Kerala. Annual maintenance contracts available for all elevator brands.',
  path: '/services/',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Elevator Installation, Maintenance and Modernization',
          description:
            'Installation, annual maintenance contracts, modernization and 24/7 repair support for residential and commercial elevators across Kerala.',
          path: '/services/',
          serviceType: 'Elevator installation and maintenance',
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Services', path: '/services/' }])} />
      <Services />
    </>
  );
}
