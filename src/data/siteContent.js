import bathroomImage from '../../images/Bathroom.jpg';
import bedroomImage from '../../images/bedroom.jpg';
import commercial1Image from '../../images/commercial1.jpg';
import commercial2Image from '../../images/commercial2.jpg';
import commercial3Image from '../../images/commercial3.jpg';
import commercial4Image from '../../images/commercial4.jpg';
import commercial5Image from '../../images/commercial5.jpg';
import commercial6Image from '../../images/commercial6.jpg';
import drawingRoomImage from '../../images/drawing_room.jpg';
import kitchenImage from '../../images/Kitchen.jpg';
import renovate1Image from '../../images/renovate1.jpg';
import renovate2Image from '../../images/renovate2.jpg';
import renovate3Image from '../../images/renovate3.jpg';
import renovate4Image from '../../images/renovate4.jpg';
import showcaseImage from '../../images/showcase.jpg';
import styling1Image from '../../images/styling1.jpg';
import styling2Image from '../../images/styling2.jpg';
import styling3Image from '../../images/styling3.jpg';
import styling4Image from '../../images/styling4.jpg';
import styling5Image from '../../images/styling5.jpg';
import styling6Image from '../../images/styling6.jpg';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Inquiry', href: '#inquiry' },
];

export const heroTrustItems = [
  { value: '42', label: 'completed homes and boutique spaces' },
  { value: '11', label: 'cities across India' },
  { value: '48 hrs', label: 'typical first response' },
];

export const aboutHighlights = [
  'Material-led palettes rooted in stone, timber, linen, and bronze.',
  'Layouts refined for movement, quiet, and natural light.',
  'Final styling that feels collected, not staged.',
];

export const services = [
  {
    title: 'Residential Design',
    copy:
      'Full-home concepts shaped around how you live, layering architecture, finishes, and furnishings into a quiet, enduring narrative.',
    deliverables: 'Space planning, finishes, furnishings, styling',
    galleryLabel: 'Residential Gallery',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
    alt: 'Warm residential living room with layered textures',
    gallery: [
      { src: bedroomImage, alt: 'Residential bedroom with soft light' },
      { src: drawingRoomImage, alt: 'Residential drawing room with layered seating' },
      { src: kitchenImage, alt: 'Residential kitchen with clean lines' },
      { src: bathroomImage, alt: 'Residential bathroom with calm textures' },
      { src: showcaseImage, alt: 'Residential showcase shelving with decor' },
    ],
  },
  {
    title: 'Commercial Design',
    copy:
      'Boutique hospitality, retail, and workplace environments that carry brand identity while keeping the experience effortless.',
    deliverables: 'Brand translation, guest flow, fit-out detailing',
    galleryLabel: 'Commercial Gallery',
    image: commercial1Image,
    alt: 'Contemporary commercial interior with refined finishes',
    gallery: [
      { src: commercial1Image, alt: 'Commercial interior 01' },
      { src: commercial2Image, alt: 'Commercial interior 02' },
      { src: commercial3Image, alt: 'Commercial interior 03' },
      { src: commercial4Image, alt: 'Commercial interior 04' },
      { src: commercial5Image, alt: 'Commercial interior 05' },
      { src: commercial6Image, alt: 'Commercial interior 06' },
    ],
  },
  {
    title: 'Styling and Art Curation',
    copy:
      'The final layer: art, objects, and textiles edited into a cohesive story that makes a space feel finished and personal.',
    deliverables: 'Art curation, accessorizing, installation styling',
    galleryLabel: 'Styling Gallery',
    image: styling1Image,
    alt: 'Curated interior vignette with art and decor',
    gallery: [
      { src: styling1Image, alt: 'Styling vignette 01' },
      { src: styling2Image, alt: 'Styling vignette 02' },
      { src: styling3Image, alt: 'Styling vignette 03' },
      { src: styling4Image, alt: 'Styling vignette 04' },
      { src: styling5Image, alt: 'Styling vignette 05' },
      { src: styling6Image, alt: 'Styling vignette 06' },
    ],
  },
  {
    title: 'Renovation',
    copy:
      'End-to-end guidance through structural upgrades, site coordination, and detailed finishes for a calm, seamless build.',
    deliverables: 'Site coordination, upgrade planning, finish direction',
    galleryLabel: 'Renovation Gallery',
    image: renovate4Image,
    alt: 'Bright renovated interior with updated finishes',
    gallery: [
      { src: renovate1Image, alt: 'Renovated interior 01' },
      { src: renovate2Image, alt: 'Renovated interior 02' },
      { src: renovate3Image, alt: 'Renovated interior 03' },
      { src: renovate4Image, alt: 'Renovated interior 04' },
    ],
  },
];

export const works = [
  {
    title: 'The Observatory Residence',
    type: 'Penthouse Renovation',
    location: 'New Delhi',
    summary:
      'A penthouse reshaped around long city views, soft stone finishes, and tailored joinery that keeps the rooms expansive but warm.',
    highlights: [
      'Reworked circulation to open the living and dining zones.',
      'Layered timber, limestone, and antique bronze accents.',
      'Custom lighting and styling designed for evening entertaining.',
    ],
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    className: 'md:col-span-7 md:row-span-2',
    heightClass: 'min-h-[28rem] md:min-h-[39rem]',
  },
  {
    title: 'Marina Light House',
    type: 'Coastal Apartment',
    location: 'Goa',
    summary:
      'A breezy coastal apartment with brighter circulation, restrained textures, and layered furnishings that feel light through the year.',
    highlights: [
      'Salt-safe finishes chosen for longevity near the shoreline.',
      'Relaxed built-ins and linen-upholstered seating for guests.',
      'A palette tuned to daylight, sea air, and low-maintenance living.',
    ],
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    className: 'md:col-span-5',
    heightClass: 'min-h-[22rem]',
  },
  {
    title: 'Atelier Courtyard',
    type: 'Boutique Hospitality',
    location: 'Jaipur',
    summary:
      'A hospitality concept balancing handcrafted detail with quiet circulation so guests notice the atmosphere before the ornament.',
    highlights: [
      'Arrival sequence designed around texture, scent, and shadow.',
      'Material language translated into guestrooms and shared spaces.',
      'Loose furniture and styling selected for durability and softness.',
    ],
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    className: 'md:col-span-5',
    heightClass: 'min-h-[22rem]',
  },
  {
    title: 'The Quiet Villa',
    type: 'Ground-Up Styling',
    location: 'Bengaluru',
    summary:
      'A layered styling project for a newly completed villa, bringing warmth, proportion, and a more lived-in sense of character to the architecture.',
    highlights: [
      'Room-by-room styling plan aligned with the home’s architecture.',
      'Art, objects, and textiles sourced to soften large volumes.',
      'Final installation edited for ease, rhythm, and everyday use.',
    ],
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80',
    className: 'md:col-span-7',
    heightClass: 'min-h-[24rem]',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    copy:
      'We begin with conversations around how you live, host, recharge, and collect. The brief becomes deeply personal before it becomes visual.',
  },
  {
    number: '02',
    title: 'Direction',
    copy:
      'We build a refined concept through plans, references, finishes, and furnishings so the design language is clear early and carried consistently.',
  },
  {
    number: '03',
    title: 'Execution',
    copy:
      'Drawings, custom pieces, procurement, and site coordination are managed with a calm, exacting eye on proportion and detail.',
  },
  {
    number: '04',
    title: 'Styling',
    copy:
      'The final layer is always intentional: objects, art, scent, textiles, and light adjusted until the rooms feel settled and alive.',
  },
];

export const testimonials = [
  {
    quote:
      'Mi Casa Decor transformed our apartment into something serene and unmistakably ours. Every room feels composed without ever feeling precious.',
    name: 'Ananya Mehra',
    role: 'Private Residence, Mumbai',
  },
  {
    quote:
      'Their process was elegant from start to finish. They held the vision through construction and the final styling made the space sing.',
    name: 'Rohan Kapoor',
    role: 'Weekend Home, Alibaug',
  },
  {
    quote:
      'What impressed us most was restraint. Nothing felt overdesigned, yet everything felt considered. Guests notice the mood before the details.',
    name: 'Leena Arora',
    role: 'Hospitality Founder, Jaipur',
  },
];
