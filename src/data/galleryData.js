import galleryProject1 from '../assets/1.jpeg';
import galleryProject2 from '../assets/2.jpeg';
import galleryProject3 from '../assets/3.jpeg';
import galleryProject4 from '../assets/4.jpeg';
import galleryProject5 from '../assets/5.jpeg';
import galleryProject6 from '../assets/6.jpeg';
import galleryProject7 from '../assets/7.jpeg';
import galleryProject8 from '../assets/8.jpeg';
import galleryProject9 from '../assets/9.jpeg';
import galleryProject10 from '../assets/10.jpeg';
import galleryProject12 from '../assets/12.jpeg';
import galleryProject15 from '../assets/15.jpeg';
import galleryProject16 from '../assets/16.jpeg';
import galleryProject17 from '../assets/17.jpeg';

import galleryImg1 from '../assets/images/gallery1-jpThnQYD.webp';
import galleryImg2 from '../assets/images/gallery2-CrrfnwKy.webp';
import galleryImg3 from '../assets/images/gallery3-CO56dp70.webp';
import galleryImg5 from '../assets/images/gallery5-jc5EOdhO.webp';
import galleryImg6 from '../assets/images/gallery6-Q-DVBgSV.webp';
import galleryImg7 from '../assets/images/gallery7-CNk2CwXP.webp';
import galleryImg8 from '../assets/images/gallery8-CvEJBRgr.webp';
import galleryImg9 from '../assets/images/gallery9-BC8NY627.webp';
import galleryImg10 from '../assets/images/gallery10-PBFrTpDN.webp';
import galleryImg12 from '../assets/images/gallery12-BLKSMulg.webp';
import galleryImg13 from '../assets/images/gallery13-DPfJPFpg.webp';
import galleryImg14 from '../assets/images/gallery14-BaUc08Cm.webp';
import galleryImg15 from '../assets/images/gallery15-BWbiC4f0.webp';
import galleryImg16 from '../assets/images/gallery16-DA6AsLNQ.webp';
import galleryImg17 from '../assets/images/gallery17-Cw0wBDxo.webp';
import galleryImg18 from '../assets/images/gallery18-DPQwZvJC.webp';

// Genuine video thumbnail frames extracted from the actual videos
import videoThumb1 from '../assets/images/test_thumb.jpg';
import videoThumb2 from '../assets/images/test1_thumb.jpg';
import videoThumb3 from '../assets/images/test2_thumb.jpg';
import videoThumb4 from '../assets/images/test3_thumb.jpg';
import videoThumb5 from '../assets/images/test4_thumb.jpg';

// Video files
import testVideo1 from '../assets/images/test.mp4';
import testVideo2 from '../assets/images/test1.mp4';
import testVideo3 from '../assets/images/test2.mp4';
import testVideo4 from '../assets/images/test3.mp4';
import testVideo5 from '../assets/images/test4.mp4';

export const galleryCategories = [
  { id: 'all', label: 'ALL' },
  { id: 'residential', label: 'RESIDENTIAL' },
  { id: 'commercial', label: 'COMMERCIAL' },
  { id: 'glass', label: 'PANORAMIC GLASS' },
  { id: 'cabins', label: 'LUXURY CABINS' },
  { id: 'testimonials', label: 'TESTIMONIALS' }
];

export const galleryItems = [
  {
    id: 1,
    image: galleryProject1,
    title: 'Luxury Villa Home Lift',
    description: 'A machine-room-less home lift serving a multi-floor villa. Gearless drives of this size fit inside the shaft, which is what lets a lift go into a house without surrendering a room to machinery.',
    category: 'residential',
    height: 'tall'
  },
  {
    id: 2,
    image: galleryImg1,
    title: 'Gold Laser Etched Cabin Interior',
    description: 'Laser-etched panels in a gold finish. The pattern is cut into the stainless rather than printed on it, so it does not wear off the areas people touch most.',
    category: 'cabins',
    height: 'short'
  },
  {
    id: 3,
    image: galleryProject2,
    title: 'Corporate Passenger Elevator',
    description: 'A passenger elevator specified for office traffic. Commercial cars are sized on how many people must move in the busiest five minutes, not on the number of floors.',
    category: 'commercial',
    height: 'tall'
  },
  {
    id: 4,
    image: galleryImg2,
    title: '360° Scenic View Panoramic Shaft',
    description: 'A panoramic shaft glazed on three sides. Laminated safety glass is used throughout, and on an exposed elevation it should be solar-control grade so the car does not heat up through the afternoon.',
    category: 'glass',
    height: 'short'
  },
  {
    id: 5,
    type: 'video',
    videoUrl: testVideo1,
    image: videoThumb1,
    title: 'Customer Experience & Handover',
    category: 'testimonials',
    height: 'tall'
  },
  {
    id: 6,
    image: galleryProject4,
    title: 'Pitless Hydraulic Duplex Lift',
    description: 'A pitless hydraulic installation. Where a deep pit cannot be dug or kept dry, a reduced-pit arrangement avoids the problem instead of fighting the groundwater, which matters on low-lying Kerala sites.',
    category: 'residential',
    height: 'short'
  },
  {
    id: 7,
    image: galleryImg3,
    title: 'Royal Gold Mirror Stainless Steel',
    description: 'Mirror-polished stainless in a gold tone. A mirror finish makes a small car feel larger, and shows fingerprints, so it suits display and lobby use more than a service lift.',
    category: 'cabins',
    height: 'tall'
  },
  {
    id: 8,
    type: 'video',
    videoUrl: testVideo2,
    image: videoThumb2,
    title: 'Client Testimonial & Review',
    category: 'testimonials',
    height: 'short'
  },
  {
    id: 9,
    image: galleryProject5,
    title: 'Commercial High-Speed Lift',
    description: 'A high-speed commercial car. Above roughly six floors the travel speed has to rise with the building, or journey times become the thing people complain about.',
    category: 'commercial',
    height: 'tall'
  },
  {
    id: 10,
    image: galleryImg5,
    title: 'Penthouse Curved Glass Lift',
    description: 'A curved glass car serving a penthouse level. Curved glazing is fabricated to the shaft radius, so the shaft geometry has to be fixed before the glass is ordered.',
    category: 'glass',
    height: 'short'
  },
  {
    id: 11,
    image: galleryImg8,
    title: 'Touch Operating COP Panel',
    description: 'A touch-operated car operating panel. Touch and hybrid panels replace mechanical buttons, and the layout should stay reachable from seated height if elderly or wheelchair users will travel alone.',
    category: 'cabins',
    height: 'tall'
  },
  {
    id: 12,
    image: galleryProject8,
    title: 'Contemporary Luxury Residence Lift',
    description: 'A contemporary residential installation. Cabin finish, door type and lighting are the three choices that change how a home lift looks, and all three are specified before manufacturing starts.',
    category: 'residential',
    height: 'short'
  },
  {
    id: 13,
    image: galleryImg9,
    title: 'Outdoor Weatherproof Glass Lift',
    description: 'An outdoor-rated glass lift. An external installation needs weather sealing, corrosion-resistant fixings and, within a few kilometres of the Kerala coast, stainless on everything exposed to salt air.',
    category: 'glass',
    height: 'tall'
  },
  {
    id: 14,
    image: galleryProject10,
    title: 'Hospital Emergency Elevator',
    description: 'A hospital elevator sized for emergency use. The car depth is set by the longest loaded bed plus an attendant, and the clear door opening has to pass that bed while it is being steered.',
    category: 'commercial',
    height: 'short'
  },
  {
    id: 15,
    image: galleryImg12,
    title: 'Italian Travertine Marble Cabin',
    description: 'An Italian travertine cabin. Stone adds weight to the car, so it is accounted for in the capacity calculation rather than added as a finish decision afterwards.',
    category: 'cabins',
    height: 'tall'
  },
  {
    id: 16,
    image: galleryProject12,
    title: 'Heritage Villa Retrofit Elevator',
    description: 'A lift retrofitted into a heritage villa. Where cutting through the structure is not acceptable, a self-supporting shaft in the stair void or against an outside wall carries its own loads.',
    category: 'residential',
    height: 'short'
  },
  {
    id: 17,
    image: galleryImg15,
    title: 'Textured Rose Gold Metallic Panel',
    description: 'A textured rose gold metallic panel. Texture hides fingerprints and light scuffing far better than a mirror finish, which is why it suits a lift in daily family use.',
    category: 'cabins',
    height: 'tall'
  },
  {
    id: 18,
    image: galleryImg17,
    title: 'Frameless Structural Glass Lift',
    description: 'A frameless structural glass lift. The glass and its framing form part of the supporting structure, which gives the cleanest look and the least visible steel.',
    category: 'glass',
    height: 'short'
  },
  {
    id: 19,
    type: 'video',
    videoUrl: testVideo3,
    image: videoThumb3,
    title: 'Customer Experience & Reliability',
    category: 'testimonials',
    height: 'tall'
  },
  {
    id: 20,
    type: 'video',
    videoUrl: testVideo4,
    image: videoThumb4,
    title: 'Client Review: Tinu & Santra Residence',
    category: 'testimonials',
    height: 'short'
  },
  {
    id: 21,
    type: 'video',
    videoUrl: testVideo5,
    image: videoThumb5,
    title: 'Homeowner Testimonial & Handover',
    category: 'testimonials',
    height: 'tall'
  }
];
