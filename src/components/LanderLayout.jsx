import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import './LanderLayout.css';

/**
 * Shared chrome for the keyword and city landing pages. The *content* is supplied
 * per page from src/data — this component only lays it out.
 */
export default function LanderLayout({
  h1,
  lede,
  badge,
  sections = [],
  specs,
  faqs = [],
  aside,
  related = [],
  ctaTitle = 'Request a quotation',
  ctaBody = 'Tell us the building, the floors and what the lift is for. We arrange a technical site visit and quote from measured dimensions, not estimates.',
}) {
  return (
    <div className="lander-page">
      <Header />

      <main>
        <section className="lander-hero">
          <div className="lander-container">
            {badge && <span className="lander-badge">{badge}</span>}
            <h1 className="lander-h1">{h1}</h1>
            <p className="lander-lede">{lede}</p>
            <div className="lander-hero-actions">
              <a href="tel:+917593000222" className="lander-btn lander-btn-primary">
                Call +91 75930 00222
              </a>
              <Link href="/contact/" className="lander-btn lander-btn-secondary">
                Request a site visit
              </Link>
            </div>
          </div>
        </section>

        <div className="lander-container lander-body">
          <article className="lander-main">
            {sections.map((s) => (
              <section key={s.heading} className="lander-section">
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}

            {specs && (
              <section className="lander-section">
                <h2>{specs.caption}</h2>
                <div className="lander-table-wrap">
                  <table className="lander-table">
                    <tbody>
                      {specs.rows.map(([k, v]) => (
                        <tr key={k}>
                          <th scope="row">{k}</th>
                          <td>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {faqs.length > 0 && (
              <section className="lander-section">
                <h2>Frequently asked questions</h2>
                <dl className="lander-faq">
                  {faqs.map((f) => (
                    <div key={f.q} className="lander-faq-item">
                      <dt>{f.q}</dt>
                      <dd>{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </article>

          {aside && <aside className="lander-aside">{aside}</aside>}
        </div>

        <section className="lander-cta">
          <div className="lander-container">
            <h2>{ctaTitle}</h2>
            <p>{ctaBody}</p>
            <div className="lander-hero-actions">
              <Link href="/contact/" className="lander-btn lander-btn-primary">
                Get a quotation
              </Link>
              <a href="tel:+917593000222" className="lander-btn lander-btn-secondary">
                +91 75930 00222
              </a>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="lander-container lander-related">
            <h2>Related</h2>
            <ul>
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
