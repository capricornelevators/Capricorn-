import About from '../../views/About';
import JsonLd from '../../components/JsonLd';
import { pageMetadata } from '../../lib/seo';
import { breadcrumbSchema } from '../../lib/schema';

export const metadata = pageMetadata({
  title: 'About Us — Elevator Company in Kochi',
  description:
    'Learn about Capricorn Elevators — our engineering standards, certifications and the team behind elevator installations across Kerala.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'About', path: '/about/' }])} />
      <About />
    </>
  );
}
