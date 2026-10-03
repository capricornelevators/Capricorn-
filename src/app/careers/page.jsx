import Careers from '../../views/Careers';
import JsonLd from '../../components/JsonLd';
import { pageMetadata } from '../../lib/seo';
import { breadcrumbSchema } from '../../lib/schema';

export const metadata = pageMetadata({
  title: 'Careers — Jobs in Kochi, Kerala',
  description:
    'Join Capricorn Elevators. Openings in elevator installation, service engineering and sales across our Kerala operations.',
  path: '/careers/',
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Careers', path: '/careers/' }])} />
      <Careers />
    </>
  );
}
