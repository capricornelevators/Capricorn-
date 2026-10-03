import Gallery from '../../views/Gallery';
import JsonLd from '../../components/JsonLd';
import { pageMetadata } from '../../lib/seo';
import { breadcrumbSchema, collectionPageSchema } from '../../lib/schema';

export const metadata = pageMetadata({
  title: 'Elevator Projects in Kerala',
  description:
    'Browse completed Capricorn Elevators projects — residential home lifts, commercial elevators and specialised installations across Kerala.',
  path: '/gallery/',
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: 'Elevator Installation Gallery',
          description:
            'Completed residential, commercial and specialised elevator installations by Capricorn Elevators.',
          path: '/gallery/',
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Gallery', path: '/gallery/' }])} />
      <Gallery />
    </>
  );
}
