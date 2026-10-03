// JSON-LD builders. Every function returns a plain object that is rendered into a
// <script type="application/ld+json"> tag. Keep values factual — Google penalises
// schema that does not match the visible page.

import { ORG, SITE_URL } from './seo';

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: ORG.address.street,
  addressLocality: ORG.address.locality,
  addressRegion: ORG.address.region,
  postalCode: ORG.address.postalCode,
  addressCountry: ORG.address.country,
};

/** Organization + LocalBusiness for the site as a whole. Rendered once, in the root layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: ORG.name,
        legalName: ORG.legalName,
        url: `${SITE_URL}/`,
        logo: { '@type': 'ImageObject', url: ORG.logo },
        email: ORG.email,
        telephone: ORG.telephone,
        address: postalAddress,
        sameAs: ORG.sameAs,
      },
      {
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
        '@id': `${SITE_URL}/#localbusiness`,
        name: ORG.name,
        description: ORG.description,
        url: `${SITE_URL}/`,
        image: ORG.image,
        logo: ORG.logo,
        email: ORG.email,
        telephone: ORG.telephone,
        address: postalAddress,
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        areaServed: ORG.areaServed.map((name) => ({ '@type': 'Place', name })),
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: ORG.telephone,
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['en', 'ml'],
          },
          {
            '@type': 'ContactPoint',
            telephone: ORG.uaeTelephone,
            contactType: 'sales',
            areaServed: 'AE',
            availableLanguage: ['en'],
          },
        ],
        sameAs: ORG.sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: ORG.name,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
      },
    ],
  };
}

/**
 * BreadcrumbList. `trail` is an ordered array of { name, path } starting after Home.
 * Pass [] on the homepage (no breadcrumb is emitted).
 */
export function breadcrumbSchema(trail) {
  if (!trail?.length) return null;

  const items = [{ name: 'Home', path: '/' }, ...trail];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Service schema for the services and maintenance pages. */
export function serviceSchema({ name, description, path, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { '@id': `${SITE_URL}/#localbusiness` },
    areaServed: ORG.areaServed.map((area) => ({ '@type': 'Place', name: area })),
  };
}

/**
 * Product schema for an elevator range.
 * Deliberately omits `offers` and `aggregateRating`: no prices or reviews are
 * published on the site yet, and inventing them would be structured-data spam.
 */
export function productSchema({ name, description, path, image, category }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    category,
    url: `${SITE_URL}${path}`,
    image: image ?? ORG.image,
    brand: { '@type': 'Brand', name: ORG.name },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
  };
}

/** ContactPage schema. */
export function contactPageSchema(path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_URL}${path}`,
    mainEntity: { '@id': `${SITE_URL}/#localbusiness` },
  };
}

/** CollectionPage for the gallery. */
export function collectionPageSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
}

/** FAQPage. Only emit when the questions and answers are genuinely on the page. */
export function faqSchema(faqs) {
  if (!faqs?.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/**
 * LocalBusiness scoped to a city we serve. `areaServed` is the honest construction
 * here: Capricorn operates from the Ernakulam office, so a city page must not
 * assert a branch address it does not have.
 */
export function cityServiceSchema({ city, path, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Elevator installation, modernization and AMC in ${city}`,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: 'Elevator installation and maintenance',
    provider: { '@id': `${SITE_URL}/#localbusiness` },
    areaServed: { '@type': 'City', name: city },
  };
}
