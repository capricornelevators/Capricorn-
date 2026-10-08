import { notFound } from 'next/navigation';
import LanderLayout from '../../components/LanderLayout';
import JsonLd from '../../components/JsonLd';
import VideoTestimonial from '../../components/VideoTestimonial';
import { LANDERS, getLander } from '../../data/landers';
import { CITIES, getCity } from '../../data/cities';
import { MODELS, HOME_MODELS, COMMERCIAL_MODELS } from '../../data/models';
import { REASONS, PROCESS, COST_NOTE, GLOSSARY } from '../../data/company';
import { pageMetadata, ORG } from '../../lib/seo';
import {
  breadcrumbSchema,
  cityServiceSchema,
  faqSchema,
  serviceSchema,
  videoSchema,
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

  // Show the range that matches the page. A home lift page should not open with
  // commercial models, and vice versa.
  const models =
    l.models === 'home'
      ? HOME_MODELS
      : l.models === 'commercial'
        ? COMMERCIAL_MODELS
        : l.models === 'all'
          ? MODELS
          : [];

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
        reasonsTitle="Why customers choose Capricorn"
        reasons={REASONS}
        modelsTitle={models.length ? 'Our range' : undefined}
        models={models}
        processTitle={l.showProcess ? 'From enquiry to handover' : undefined}
        process={l.showProcess ? PROCESS : []}
        costTitle={l.showCost ? 'What it costs' : undefined}
        costBody={l.showCost ? COST_NOTE : undefined}
        faqs={l.faqs}
        glossary={l.showGlossary ? GLOSSARY : []}
        aside={aside}
        related={related}
        serviceAreas={{
          title: 'Where we work',
          body: `We supply, install and maintain lifts across ${CITIES.map((c) => c.name).join(', ')} and the rest of Kerala, from our office in Vyttila, Ernakulam.`,
        }}
      />
    </>
  );
}

/* ----------------------------------------------------------------- cities */

function CityView({ city: c, slug }) {
  const path = `/${slug}/`;
  const faqs = c.faqs;

  const aside = (
    <>
      <div className="lander-card">
        <h3>What we supply in {c.name}</h3>
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
      <JsonLd data={videoSchema(c.video, { page: path })} />
      <JsonLd data={breadcrumbSchema([{ name: `Elevators in ${c.name}`, path }])} />
      <LanderLayout
        h1={`Elevator Company in ${c.name}`}
        lede={c.lede}
        intro={c.intro}
        reasonsTitle={`Why customers in ${c.name} choose Capricorn`}
        reasons={REASONS}
        modelsTitle={`Our elevator range in ${c.name}`}
        models={MODELS}
        processTitle={`How we install a lift in ${c.name}`}
        process={PROCESS}
        costTitle={`What does an elevator cost in ${c.name}?`}
        costBody={COST_NOTE}
        sections={c.sections ?? []}
        faqs={faqs}
        faqsTitle={`Elevators in ${c.name}: common questions`}
        beforeFaqs={
          c.video ? (
            <VideoTestimonial
              video={c.video}
              heading={`A Capricorn customer in ${c.name}`}
            />
          ) : null
        }
        serviceAreas={{
          title: `Areas we serve around ${c.name}`,
          body: `${c.areas.join(', ')} and the rest of ${c.district}.`,
        }}
        aside={aside}
        related={related}
        relatedTitle="Elevators elsewhere in Kerala"
        ctaTitle={`Book a site visit in ${c.name}`}
        ctaBody="Tell us the building and the number of floors. We measure the shaft, pit and headroom on site and quote against a drawing you approve."
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
