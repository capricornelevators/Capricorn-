import Contact from '../../views/Contact';
import JsonLd from '../../components/JsonLd';
import { pageMetadata } from '../../lib/seo';
import { breadcrumbSchema, contactPageSchema } from '../../lib/schema';

export const metadata = pageMetadata({
  title: 'Contact Us — Kochi, Kerala',
  description:
    'Talk to our elevator experts in Kochi. Request a quote for a home lift, commercial elevator or an annual maintenance contract.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema('/contact/')} />
      <JsonLd data={breadcrumbSchema([{ name: 'Contact', path: '/contact/' }])} />
      <Contact />
    </>
  );
}
