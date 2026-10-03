import { SITE_URL } from '../lib/seo';

// Required by Next 16 when output: 'export' — emit this route at build time.
export const dynamic = 'force-static';

// Generated at build time into out/sitemap.xml.
// /products/residential/ is intentionally excluded: it canonicalises to
// /products/home/, so listing it would advertise a duplicate.
const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/products/home/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/products/commercial/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/gallery/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about/', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/contact/', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/careers/', priority: 0.4, changeFrequency: 'monthly' },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
