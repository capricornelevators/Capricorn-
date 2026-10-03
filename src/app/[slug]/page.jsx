import { notFound } from 'next/navigation';
import LanderLayout from '../../components/LanderLayout';
import JsonLd from '../../components/JsonLd';
import { LANDERS, getLander } from '../../data/landers';
import { CITIES, getCity, HQ } from '../../data/cities';
import { pageMetadata, ORG } from '../../lib/seo';
import {
  breadcrumbSchema,
  cityServiceSchema,
  faqSchema,
  serviceSchema,
} from '../../lib/schema';

/**
 * One root-level dynamic segment serves both landing page families.
 *
 * City pages live at /elevator-company-in-{city}/ because that mirrors how the
 * query is actually typed ("elevator company in kochi"). Next only treats a
 * folder as dynamic when the whole name is bracketed, so the prefix is carried
 * in the slug here rather than in a folder called elevator-company-in-[city].
 */
const CITY_PREFIX = 'elevator-company-in-';

export function generateStaticParams() {
  return [
    ...LANDERS.map((l) => ({ slug: l.slug })),
    ...CITIES.map((c) => ({ slug: `${CITY_PREFIX}${c.slug}` })),
  ];
}

function resolve(slug) {
  if (slug.startsWith(CITY_PREFIX)) {
    const city = getCity(slug.slice(CITY_PREFIX.length));
    return city ? { kind: 'city', city } : null;
  }
  const lander = getLander(slug);
  return lander ? { kind: 'lander', lander } : null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) return {};

  const meta =
    r.kind === 'city'
      ? { title: r.city.metaTitle, description: r.city.metaDescription }
      : { title: r.lander.metaTitle, description: r.lander.metaDescription };

  return pageMetadata({ ...meta, path: `/${slug}/` });
}

function ContactCard() {
  return (
    <div className="lander-card">
      <h3>Talk to us</h3>
      <p>
        {ORG.address.street}, {ORG.address.locality}, {ORG.address.region}{' '}
        {ORG.address.postalCode}
        <br />
        <a href="tel:+917593000222">+91 75930 00222</a>
        <br />
        <a href={`mailto:${ORG.salesEmail}`}>{ORG.salesEmail}</a>
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- landers */

function LanderView({ lander: l, slug }) {
  const path = `/${slug}/`;

  const aside = (
    <>
      <div className="lander-card">
        <h3>Serving across Kerala</h3>
        <ul>
          {CITIES.map((c) => (
            <li key={c.slug}>
              <a href={`/${CITY_PREFIX}${c.slug}/`}>{c.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {l.priceNote && (
        <div className="lander-card">
          <h3>On pricing</h3>
          <p>{l.priceNote}</p>
        </div>
      )}
      <ContactCard />
    </>
  );

  const related = (l.related ?? [])
    .map(getLander)
    .filter(Boolean)
    .map((r) => ({ href: `/${r.slug}/`, label: r.title }));

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: l.title,
          description: l.metaDescription,
          path,
          serviceType: l.intent,
        })}
      />
      <JsonLd data={faqSchema(l.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: l.metaTitle, path }])} />
      <LanderLayout
        h1={l.h1}
        lede={l.lede}
        sections={l.sections}
        specs={l.specs}
        faqs={l.faqs}
        aside={aside}
        related={related}
      />
    </>
  );
}

/* ----------------------------------------------------------------- cities */

function CityView({ city: c, slug }) {
  const path = `/${slug}/`;
  const faqs = c.faqs;

  const sections = [
    { heading: `Elevators in ${c.name}`, body: c.localContext },
    ...c.engineering,
    {
      heading: `Areas we cover around ${c.name}`,
      body: `${c.areas.join(', ')} and the wider ${c.district} district. ${
        c.isHQ
          ? `Our office is at ${HQ}, so ${c.name} sites are the quickest for us to reach for surveys and service calls.`
          : `Surveys, installation and maintenance visits to ${c.name} are scheduled from our Ernakulam office. Tell us your timescale when you enquire and we will confirm what we can commit to.`
      }`,
    },
  ];

  const aside = (
    <>
      <div className="lander-card">
        <h3>Demand in {c.name}</h3>
        <ul>
          {c.demand.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      <ContactCard />
    </>
  );

  const related = CITIES.filter((o) => o.slug !== c.slug)
    .slice(0, 6)
    .map((o) => ({
      href: `/${CITY_PREFIX}${o.slug}/`,
      label: `Elevators in ${o.name}`,
    }));

  return (
    <>
      <JsonLd
        data={cityServiceSchema({ city: c.name, path, description: c.metaDescription })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: `Elevators in ${c.name}`, path }])} />
      <LanderLayout
        h1={`Elevator Company in ${c.name}`}
        lede={c.lede}
        sections={sections}
        faqs={faqs}
        aside={aside}
        related={related}
        ctaTitle={`Request a site visit in ${c.name}`}
        ctaBody="Tell us the building, the floors and what the lift is for. We survey the site, measure the shaft, pit and headroom, and quote from real dimensions."
      />
    </>
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) notFound();

  return r.kind === 'city' ? (
    <CityView city={r.city} slug={slug} />
  ) : (
    <LanderView lander={r.lander} slug={slug} />
  );
}
