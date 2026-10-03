import Residential from '../../../views/Residential';
import { SITE_URL } from '../../../lib/seo';

// This route renders the same <Residential /> view as /products/home/ and exists
// only so older links keep working. Its canonical points at /products/home/ so the
// two URLs are consolidated into one indexed page instead of competing as duplicates.
const CANONICAL = `${SITE_URL}/products/home/`;

export const metadata = {
  title: 'Residential Elevators in Kerala',
  description:
    'Luxury home elevators for Kerala villas and apartments — compact shafts, premium cabin finishes and safety systems built for Indian homes.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'Capricorn Elevators',
    locale: 'en_IN',
    url: CANONICAL,
    title: 'Residential Elevators in Kerala',
    description:
      'Luxury home elevators for Kerala villas and apartments — compact shafts, premium cabin finishes and safety systems built for Indian homes.',
  },
};

export default function ResidentialPage() {
  return <Residential />;
}
