import { Instagram } from 'lucide-react';
import { ORG } from '../lib/seo';
import './InstagramSection.css';

/**
 * Instagram profile section.
 *
 * Two deliberate omissions:
 *
 * 1. No follower or post count. Those change, a static export cannot refresh
 *    them, and a stale "589 followers" on the site is worse than no number.
 * 2. No hotlinked Instagram CDN images. Those URLs are signed and expire, so
 *    the grid would silently break. To show real posts, export the images,
 *    drop them in public/instagram/ and pass them as `posts` below.
 */
export default function InstagramSection({
  handle = 'capricornelevators',
  posts = [],
  heading = 'See our installations on Instagram',
  body = 'We post finished installations, cabin finishes and work in progress from sites across Kerala. It is the quickest way to see what a Capricorn lift actually looks like in a real building.',
}) {
  const profile = `https://www.instagram.com/${handle}/`;

  return (
    <section className="ig">
      <div className="ig-inner">
        <div className="ig-head">
          <Instagram size={26} className="ig-icon" aria-hidden="true" />
          <div>
            <h2 className="ig-title">{heading}</h2>
            <a
              className="ig-handle"
              href={profile}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{handle}
            </a>
          </div>
        </div>

        <p className="ig-body">{body}</p>

        {posts.length > 0 && (
          <ul className="ig-grid">
            {posts.map((p) => (
              <li key={p.src}>
                <a href={p.href ?? profile} target="_blank" rel="noopener noreferrer">
                  <img src={p.src} alt={p.alt} width="400" height="400" loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
        )}

        <a
          className="ig-cta"
          href={profile}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Follow ${ORG.name} on Instagram`}
        </a>
      </div>
    </section>
  );
}
