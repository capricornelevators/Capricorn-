import Gallery from '../../views/Gallery';

export const metadata = {
  title: 'Gallery | Capricorn Elevators',
  description: 'Explore our portfolio of premium elevator installations across residential, commercial, and specialized projects.',
  alternates: {
    canonical: 'https://www.capricornelevators.com/gallery',
  },
};

export default function GalleryPage() {
  return <Gallery />;
}
