/**
 * Shared selling points and the order-to-handover process.
 *
 * Every claim here comes from what the site already states, mainly the process
 * steps and AMC packages in src/views/Services.jsx and the model specs in
 * src/data/models.js. Nothing is invented. If a claim cannot be traced to
 * something Capricorn already publishes, it does not belong here.
 */

export const REASONS = [
  {
    title: 'Gearless drives on every model',
    body: 'The whole range runs gearless, rope or belt driven, so the ride is quieter and uses less power than older geared equipment.',
  },
  {
    title: 'ARD with UPS as standard',
    body: 'Every model includes an automatic rescue device with UPS. In a power cut the car goes to the nearest landing and the doors open.',
  },
  {
    title: 'Masonry or glass shaft',
    body: 'Models suit a masonry shaft, a metallic shaft or a self supporting glass shaft, so a lift can go into a finished house as well as a new one.',
  },
  {
    title: 'AMC for every brand',
    body: 'We maintain lifts we did not install. If your current supplier has gone quiet, you do not have to replace the lift to get it serviced.',
  },
  {
    title: 'Delivery in three months',
    body: 'Manufacturing starts once you approve the drawing. Delivery is within three months of the order and installation takes 10 to 20 days.',
  },
  {
    title: 'Service visits every two months',
    body: 'After handover our team visits every two months to keep the lift running, on top of the breakdown cover in your contract.',
  },
];

/** From the nine step process shown on the services page. */
export const PROCESS = [
  { title: 'Enquiry', body: 'You tell us the building, the floors and what the lift is for.' },
  { title: 'Site visit', body: 'Our engineers measure the shaft, pit and headroom and check what is possible.' },
  { title: 'Drawing and approval', body: 'You get a detailed drawing of the site and the lift to approve before anything is made.' },
  { title: 'Manufacturing', body: 'The lift is built to the approved drawing.' },
  { title: 'Pre-installation visit', body: 'A second site visit confirms the shaft is ready before delivery.' },
  { title: 'Delivery and installation', body: 'Delivery within three months of the order, installation in 10 to 20 days.' },
  { title: 'Testing and handover', body: 'Full quality and safety check, then handover.' },
  { title: 'Ongoing support', body: 'Technical visits every two months, with AMC options for the longer term.' },
];

export const COST_NOTE =
  'We do not publish a fixed price, because the shaft, the drive and the finish change it too much for a phone estimate to mean anything. What we do is visit, measure the shaft, pit and headroom, and give you a written quotation against a drawing you have approved. If you are comparing us with someone else, check whether their figure includes the shaft work, the electrical supply to the controller, the rescue device and GST, because that is usually where two very different numbers come from.';

/**
 * Instagram posts shown in the grid on the Instagram section.
 *
 * Empty until real images are exported into public/instagram/. See the README
 * in that folder. Instagram CDN URLs are signed and expire, so the images have
 * to be local files rather than hotlinks.
 *
 * Each entry: { src: '/instagram/01.jpg', alt: 'what is actually in the photo' }
 */
export const INSTAGRAM_POSTS = [];
