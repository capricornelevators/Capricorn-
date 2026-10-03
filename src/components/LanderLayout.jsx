import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import './LanderLayout.css';

/**
 * Landing page layout.
 *
 * The section order mirrors the pages that actually hold page one for these
 * queries in Kerala: short intro, a reasons grid, the model range, how
 * installation works, cost, FAQ, then a service area block for internal
 * linking. The model range is the centre of those pages, so it is here too.
 */
export default function LanderLayout({
  h1,
  lede,
  intro,
  reasons = [],
  reasonsTitle,
  models = [],
  modelsTitle,
  process = [],
  processTitle,
  costTitle,
  costBody,
  sections = [],
  specs,
  faqs = [],
  faqsTitle = 'Frequently asked questions',
  aside,
  serviceAreas,
  related = [],
  relatedTitle = 'Related',
  ctaTitle = 'Request a quotation',
  ctaBody = 'Tell us the building, how many floors, and what the lift is for. We visit the site, measure the shaft, pit and headroom, and quote from those measurements.',
}) {
  return (
    <div className="lander-page">
      <Header />

      <main>
        <section className="lander-hero">
          <div className="lander-container">
            <h1 className="lander-h1">{h1}</h1>
            <p className="lander-lede">{lede}</p>
            <div className="lander-hero-actions">
              <a href="tel:+917593000222" className="lander-btn lander-btn-primary">
                Call +91 75930 00222
              </a>
              <Link href="/contact/" className="lander-btn lander-btn-secondary">
                Get a quote
              </Link>
              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="lander-btn lander-btn-secondary"
              >
                Download catalogue
              </a>
            </div>
          </div>
        </section>

        <div className="lander-container lander-body">
          <article className="lander-main">
            {intro && <p className="lander-intro">{intro}</p>}

            {reasons.length > 0 && (
              <section className="lander-section">
                <h2>{reasonsTitle}</h2>
                <div className="lander-grid">
                  {reasons.map((r) => (
                    <div key={r.title} className="lander-tile">
                      <h3>{r.title}</h3>
                      <p>{r.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {models.length > 0 && (
              <section className="lander-section">
                <h2>{modelsTitle}</h2>
                <div className="lander-models">
                  {models.map((m) => (
                    <div key={m.slug} className="lander-model">
                      <h3>{m.name}</h3>
                      <p className="lander-model-sub">{m.subtitle}</p>
                      <p>{m.description}</p>
                      <div className="lander-table-wrap">
                        <table className="lander-table">
                          <tbody>
                            {m.spec.map(([k, v]) => (
                              <tr key={k}>
                                <th scope="row">{k}</th>
                                <td>{v}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {process.length > 0 && (
              <section className="lander-section">
                <h2>{processTitle}</h2>
                <ol className="lander-steps">
                  {process.map((p) => (
                    <li key={p.title}>
                      <strong>{p.title}.</strong> {p.body}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {costBody && (
              <section className="lander-section">
                <h2>{costTitle}</h2>
                <p>{costBody}</p>
              </section>
            )}

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
                <h2>{faqsTitle}</h2>
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

            {serviceAreas && (
              <section className="lander-section">
                <h2>{serviceAreas.title}</h2>
                <p>{serviceAreas.body}</p>
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
            <h2>{relatedTitle}</h2>
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
