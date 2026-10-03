// Central SEO configuration.
// Single source of truth for the canonical host, NAP and social profiles so that
// metadata, JSON-LD and the sitemap can never drift apart.

export const SITE_URL = 'https://www.capricornelevators.com';

export const ORG = {
  name: 'Capricorn Elevators',
  legalName: 'Capricorn Elevators Private Limited',
  description:
    'Capricorn Elevators designs, installs and maintains premium residential and commercial elevators across Kerala and the GCC.',
  logo: `${SITE_URL}/assets/logo1.png`,
  image: `${SITE_URL}/assets/1.jpeg`,
  email: 'info@capricornelevators.com',
  salesEmail: 'sales@capricornelevators.com',
  telephone: '+917593000222',
  altTelephone: '+918943777000',
  uaeTelephone: '+971509169002',
  address: {
    street: 'Unit 03, 11th Floor, Jomer Symphony, Ponnurunni East, Vyttila',
    locality: 'Ernakulam',
    region: 'Kerala',
    postalCode: '682028',
    country: 'IN',
  },
  // Verified from the live profiles linked in the site footer.
  sameAs: [
    'https://www.facebook.com/people/Capricorn-Elevators/61578797188516/',
    'https://www.instagram.com/capricornelevators/',
    'https://www.linkedin.com/company/capricornelevators',
    'https://www.youtube.com/@capricornelevators',
  ],
  areaServed: [
    'Kochi',
    'Ernakulam',
    'Thrissur',
    'Kozhikode',
    'Thiruvananthapuram',
    'Kerala',
  ],
};

/**
 * Build a page's metadata with a correct self-referencing canonical.
 *
 * `path` must be the route's own path with a trailing slash to match
 * next.config.mjs `trailingSlash: true` ('/' for the homepage).
 */
export function pageMetadata({ title, description, path, images }) {
  const url = `${SITE_URL}${path}`;
  const ogImage = images ?? `${SITE_URL}/assets/1.jpeg`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: ORG.name,
      locale: 'en_IN',
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
