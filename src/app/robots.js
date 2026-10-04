import { SITE_URL } from '../lib/seo';

// Required by Next 16 when output: 'export'. Emit this route at build time.
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
