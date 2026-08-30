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
import sonepatxImage from '../../images/sonepatkothi.png';
import sonepat from '../../images/sonepat.png';
import sonepat1Image from '../../images/sonepat1.png';
import sonepat2Image from '../../images/sonepat2.png';
import sonepat3Image from '../../images/sonepat3.png';
import sonepat4Image from '../../images/sonepat4.png';
import sonepat5Image from '../../images/sonepat5.png';
import sonepat6Image from '../../images/sonepat6.png';
import Noida from '../../images/Noida1.jpeg';
import N2 from '../../images/N2.jpeg';
import N3 from '../../images/N3.jpeg';
import N4 from '../../images/N4.jpeg';
import N5 from '../../images/N5.jpeg';
import N6 from '../../images/N6.jpeg';
import R1 from '../../images/R1.jpeg';
import R2 from '../../images/R2.jpeg';
import R3 from '../../images/R3.jpeg';
import R4 from '../../images/R4.jpeg';
import R5 from '../../images/R5.jpeg';
import R6 from '../../images/R6.jpeg';
import R7 from '../../images/R7.jpeg';
import G1 from '../../images/G1.jpeg';
import G2 from '../../images/G2.jpeg';
import G4 from '../../images/G4.jpeg';
import G5 from '../../images/G5.jpeg';
import G6 from '../../images/G6.jpeg';
import G7 from '../../images/G7.jpeg';
import G8 from '../../images/G8.jpeg';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Inquiry', href: '#inquiry' },
];

// export const heroTrustItems = [
//   { value: '42', label: 'completed homes and boutique spaces' },
//   { value: '11', label: 'cities across India' },
//   { value: '48 hrs', label: 'typical first response' },
// ];

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
    title: 'Kapoors Residence',
    type: 'Villa Renovation',
    location: 'Sonepat, Haryana',
    summary:
      'A villa reshaped around long city views, soft stone finishes, and tailored joinery that keeps the rooms expansive but warm.',
    highlights: [
      'Reworked circulation to open the living and dining zones.',
      'Layered timber, limestone, and antique bronze accents.',
      'Custom lighting and styling designed for evening entertaining.',
    ],
    image: '../../images/sonepatkothi.png',
    gallery: [
      { src: sonepat, alt: 'Living area for The Kapoor Residence' },
      { src: sonepat1Image, alt: 'Drawing romm area for the Residence' },
      { src: sonepat3Image, alt: 'Kitchen detail for The Kapoor Residence' },
      { src: sonepat4Image, alt: 'Bedroom finish for The Kapoor Residence' },
      { src: sonepat5Image, alt: 'WashBasin finish for the bathroom' },
      { src: sonepat6Image, alt: 'Bathroom finish for The Kapoor Residence' },
    ],
    className: 'md:col-span-7 md:row-span-2',
    heightClass: 'min-h-[28rem] md:min-h-[39rem]',
  },
  {
    title: 'Modern Home',
    type: '3BHK Apartment',
    location: 'Rohini, Delhi',
    summary:
      'A modern apartment with a neutral palette, layered textures, and a focus on natural light and circulation.',
    highlights: [
      'A design that balances functionality with aesthetic appeal.',
      'Relaxed built-ins and linen-upholstered seating for guests.',
      'A palette tuned to daylight, blue tones, and low-maintenance living.',
    ],
    image: R2,
    gallery: [
      { src: R1, alt: 'Sample living room for Modern house' },
      { src: R2, alt: 'Sample living room for Modern house' },
      { src: R3, alt: 'Sample dining room and decor' },
      { src: R4, alt: 'Sample dining room and decor' },
      { src: R5, alt: 'Sample bedroom room for Modern house' },
      { src: R6, alt: 'Dressing Table Design' },
      { src: R7, alt: 'Living and Dining Area' },
    ],
    className: 'md:col-span-5',
    heightClass: 'min-h-[22rem]',
  },
  {
    title: 'Indian Traditional Home',
    type: '2BHK Apartment',
    location: 'Gurgaon, Haryana',
    summary:
      'A Indian traditional home with a focus on authentic craftsmanship and cultural elements.',
    highlights: [
      'On Arrival there will be a warm welcome with a traditional front door with elephant carvings',
      'Material language translated into guestrooms and shared spaces.',
      'Loose furniture and styling selected for durability and softness.',
    ],
    image:G1,
    gallery: [
      { src:  G2, alt: 'A Basic Interior View for Living Room' },
      { src: G4, alt: 'Kitchen Detail for Indian Traditional Home' },
      { src: G5, alt: 'Space Optimization with Natural Light and book shelves' },
      { src: G6, alt: 'Temple for the home' },
      { src: G7, alt: 'Bedroom finish that reflects the traditional aesthetic' },
      { src: G8, alt: 'Bathroom design for the home' },
    ],
    className: 'md:col-span-5',
    heightClass: 'min-h-[22rem]',
  },
  {
    title: 'The Quiet Appartment',
    type: 'A Luxury Appartment',
    location: 'Noida, Uttar Pradesh',
    summary:
      'A project that is close to our hearts, where we have created a space that is both luxurious and comfortable, with a focus on natural materials and a neutral palette.',
    highlights: [
      'Room-by-room styling plan aligned with the home’s architecture.',
      'Art, objects, and textiles sourced to soften large volumes.',
      'Final installation edited for ease, rhythm, and everyday use.',
    ],
    image:
      Noida,
    gallery: [
      { src: Noida, alt: 'Sample styled corner for The Quiet Villa' },
      { src: N2, alt: 'Bedroom Design for The Quiet Villa' },
      { src: N3, alt: 'Living Room Composition for the home' },
      { src: N4, alt: 'Kitchen Design that reflects the luxurious aesthetic' },
      { src: N5, alt: 'Living Area that feels inviting' },
      { src: N6, alt: 'Office space for The Quiet Villa' },
    ],
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
      'Orchid Design has design my home with a quiet, enduring aesthetic that feels personal and collected. The process was seamless, and the final result exceeded my expectations.',
    name: 'Ritika Mehta',
    role: 'Rohini, New Delhi',
  },
  {
    quote:
      'This is my first time experience with Interior Designer and I am very happy with the work done by Orchid Design. They have a great sense of design and they have transformed my home into a beautiful space.',
    name: 'Rohan Kapoor',
    role: 'Sonepat, Haryana',
  },
  {
    quote:
      'Sach me Maza aa gaya. Orchid Design had done a great job in designing my home. I am very happy with the service and highly recommend other people to hire Orchid Design for their interior design needs.',
    name: 'Leena Arora',
    role: 'Noida, Uttar Pradesh',
  },
];
