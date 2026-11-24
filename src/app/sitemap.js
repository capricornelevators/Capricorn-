import { SITE_URL } from '../lib/seo';
import { LANDER_SLUGS } from '../data/landers';
import { CITY_SLUGS } from '../data/cities';

// Emit this route at build time for the static export.
export const dynamic = 'force-static';

// /products/residential/ is excluded because it canonicalises to /products/home/.
const routes = [
  '/',
  '/products/home/',
  '/products/commercial/',
  '/services/',
  '/gallery/',
  '/about/',
  '/contact/',
  '/careers/',
];

export default function sitemap() {
  const all = [
    ...routes,
    ...LANDER_SLUGS.map((slug) => `/${slug}/`),
    ...CITY_SLUGS.map((slug) => `/elevator-company-in-${slug}/`),
  ];

  // Do not emit lastModified without a reliable per-page content date.
  return all.map((path) => ({ url: `${SITE_URL}${path}` }));
}
