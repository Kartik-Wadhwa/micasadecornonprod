import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import bathroomImage from '../images/Bathroom.jpg';
import bedroomImage from '../images/bedroom.jpg';
import commercial1Image from '../images/commercial1.jpg';
import commercial2Image from '../images/commercial2.jpg';
import commercial3Image from '../images/commercial3.jpg';
import commercial4Image from '../images/commercial4.jpg';
import commercial5Image from '../images/commercial5.jpg';
import commercial6Image from '../images/commercial6.jpg';
import drawingRoomImage from '../images/drawing_room.jpg';
import homeHero from '../images/Home.jpg';
import kitchenImage from '../images/Kitchen.jpg';
import renovate1Image from '../images/renovate1.jpg';
import renovate2Image from '../images/renovate2.jpg';
import renovate3Image from '../images/renovate3.jpg';
import renovate4Image from '../images/renovate4.jpg';
import showcaseImage from '../images/showcase.jpg';
import styling1Image from '../images/styling1.jpg';
import styling2Image from '../images/styling2.jpg';
import styling3Image from '../images/styling3.jpg';
import styling4Image from '../images/styling4.jpg';
import styling5Image from '../images/styling5.jpg';
import styling6Image from '../images/styling6.jpg';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Inquiry', href: '#inquiry' },
];

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const services = [
  {
    title: 'Residential Design',
    copy:
      'Full-home concepts shaped around how you live, layering architecture, finishes, and furnishings into a quiet, enduring narrative.',
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

const works = [
  {
    title: 'The Observatory Residence',
    type: 'Penthouse Renovation',
    location: 'New Delhi',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    className: 'md:col-span-7 md:row-span-2',
    heightClass: 'min-h-[28rem] md:min-h-[39rem]',
  },
  {
    title: 'Marina Light House',
    type: 'Coastal Apartment',
    location: 'Goa',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    className: 'md:col-span-5',
    heightClass: 'min-h-[22rem]',
  },
  {
    title: 'Atelier Courtyard',
    type: 'Boutique Hospitality',
    location: 'Jaipur',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    className: 'md:col-span-5',
    heightClass: 'min-h-[22rem]',
  },
  {
    title: 'The Quiet Villa',
    type: 'Ground-Up Styling',
    location: 'Bengaluru',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80',
    className: 'md:col-span-7',
    heightClass: 'min-h-[24rem]',
  },
];

const processSteps = [
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

const testimonials = [
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

const stats = [
  { value: '42', label: 'homes and boutique spaces completed' },
  { value: '11', label: 'cities shaped with our design direction' },
  { value: '96%', label: 'of clients returning for a second phase' },
];

function Reveal({ children, className = '', delay = 0, amount = 0.25 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  const alignClass =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-2xl text-left';

  return (
    <div className={alignClass}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl leading-none text-espresso sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-taupe sm:text-lg">{copy}</p>
    </div>
  );
}

function App() {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 800], [0, 160]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const heroOpacity = useTransform(scrollY, [0, 520], [1, 0.6]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 28);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      return undefined;
    }

    document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.18,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 42 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (submitStatus === 'loading') {
      return;
    }

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setSubmitStatus('error');
      setSubmitError('Email service is not configured yet.');
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      location: formData.get('location'),
      type: formData.get('type'),
      timeline: formData.get('timeline'),
      vision: formData.get('vision'),
    };

    setSubmitStatus('loading');
    setSubmitError('');

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey,
      );
      form.reset();
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  const openGallery = (service) => {
    if (!service.gallery) {
      return;
    }

    setActiveGallery({ title: service.title, images: service.gallery });
    setActiveGalleryIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };

  const showNextGalleryImage = () => {
    if (!activeGallery) {
      return;
    }

    setActiveGalleryIndex((index) => (index + 1) % activeGallery.images.length);
  };

  const showPreviousGalleryImage = () => {
    if (!activeGallery) {
      return;
    }

    setActiveGalleryIndex((index) =>
      (index - 1 + activeGallery.images.length) % activeGallery.images.length,
    );
  };

  return (
    <div className="relative overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <motion.nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-4 transition-all duration-500 sm:px-7 ${
            isScrolled
              ? 'border-white/35 bg-[rgba(250,246,241,0.72)] shadow-glass backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
          initial={false}
          animate={{ y: isScrolled ? 0 : 4 }}
        >
          <a
            href="#top"
            className="font-display text-2xl tracking-[0.12em] text-espresso sm:text-3xl"
          >
            Mi Casa Decor
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-luxe text-taupe transition hover:text-espresso"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#inquiry" className="button-primary">
              Book a Consultation
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/50 text-espresso backdrop-blur-md lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span
                className={`block h-px w-5 bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span className={`block h-px w-5 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`block h-px w-5 bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </div>
          </button>
        </motion.nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-[2rem] border border-white/35 bg-[rgba(247,242,236,0.88)] p-6 shadow-glass backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm uppercase tracking-luxe text-taupe transition hover:text-espresso"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#inquiry"
                  className="button-primary mt-2 justify-center text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a Consultation
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            className="absolute inset-0"
            style={
              shouldReduceMotion
                ? undefined
                : { y: heroY, scale: heroScale, opacity: heroOpacity }
            }
          >
            <img src={homeHero} alt="Bright, warm living room interior" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,250,245,0.65)_0%,rgba(255,250,245,0.35)_42%,rgba(255,250,245,0)_100%)]" />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(248,243,237,0.02))]" />

          <div className="relative mx-auto grid w-full max-w-8xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_22rem]">
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="show"
              className="max-w-4xl"
            >
              <motion.p
                variants={textItem}
                className="eyebrow border-espresso/30 text-espresso/80"
              >
                Luxury Interior Design Studio
              </motion.p>
              <motion.h1
                variants={textItem}
                className="mt-6 font-body text-[3.25rem] font-semibold leading-[1.02] tracking-[-0.02em] text-[#3c322b] sm:text-[4.25rem] lg:text-[5.5rem]"
              >
                Spaces that feel quietly unforgettable.
              </motion.h1>
              <motion.p
                variants={textItem}
                className="mt-5 max-w-2xl text-sm leading-7 text-taupe sm:text-base"
              >
                Calm residences and boutique environments shaped with restraint and warmth.
              </motion.p>
              <motion.div
                variants={textItem}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#portfolio"
                  className="button-primary px-4 py-2 text-xs tracking-[0.14em] sm:px-5 sm:py-2.5"
                >
                  Explore Our Works
                </a>
                <a
                  href="#inquiry"
                  className="button-secondary border-espresso/40 bg-white/70 px-4 py-2 text-xs tracking-[0.14em] text-espresso hover:bg-white/85 sm:px-5 sm:py-2.5"
                >
                  Start Your Project
                </a>
              </motion.div>
            </motion.div>

          </div>
        </section>

        <section id="about" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[0.95fr_minmax(0,1.05fr)] lg:items-center">
            <Reveal className="relative">
              <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-stone/30 blur-3xl lg:block" />
              <div className="overflow-hidden rounded-[2.2rem] border border-white/55 shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
                  alt="Curated dining interior with layered textures"
                  className="h-[26rem] w-full object-cover sm:h-[34rem]"
                />
              </div>
              <div className="glass-panel absolute bottom-6 left-6 max-w-xs p-5 text-sm leading-7 text-espresso">
                We design for people who appreciate nuance: spaces that are calm on first glance and endlessly rewarding up close.
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <SectionHeading
                eyebrow="About the Studio"
                title="Editorial interiors with a sense of permanence."
                copy="Mi Casa Decor is a luxury interior design studio focused on homes and hospitality spaces that feel composed, tactile, and deeply personal. Our work balances architectural discipline with softness, building rooms that support everyday life while carrying the poise of a beautifully edited publication."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  'Material-led palettes rooted in stone, timber, linen, and bronze.',
                  'Layouts refined for movement, quiet, and natural light.',
                  'Final styling that feels collected, not staged.',
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    className="glass-panel p-5 text-sm leading-7 text-taupe"
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {point}
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-8xl">
            <Reveal>
              <SectionHeading
                eyebrow="Services"
                title="Design that feels seamless because every layer has been considered."
                copy="Our scope is intentionally comprehensive. We work from concept through installation so the finished space never loses the clarity of the original idea."
                align="center"
              />
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {services.map((service, index) => {
                const isInteractive = Boolean(service.gallery);

                return (
                  <motion.article
                    key={service.title}
                    role={isInteractive ? 'button' : undefined}
                    tabIndex={isInteractive ? 0 : undefined}
                    onClick={isInteractive ? () => openGallery(service) : undefined}
                    onKeyDown={
                      isInteractive
                        ? (event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              openGallery(service);
                            }
                          }
                        : undefined
                    }
                    className={`glass-panel group flex h-full flex-col overflow-hidden ${
                      isInteractive ? 'cursor-pointer' : ''
                    }`}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  >
                    <div className="relative h-52 overflow-hidden sm:h-60">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,12,9,0.1),rgba(18,12,9,0.55))]" />
                      <div className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs uppercase tracking-luxe text-white/80 backdrop-blur">
                        0{index + 1}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-7">
                      <div>
                        <h3 className="font-display text-3xl leading-none text-espresso">
                          {service.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-taupe">{service.copy}</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-[#c5b7aa]/60 pt-4 text-xs uppercase tracking-[0.16em] text-accent">
                        <span>{isInteractive ? 'View gallery' : 'Tailored scope'}</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          ->
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-8xl">
            <Reveal>
              <SectionHeading
                eyebrow="Portfolio"
                title="Selected works shaped by proportion, texture, and mood."
                copy="Each project begins with architecture and ends with atmosphere. The result is polished, but never cold."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-12">
              {works.map((work, index) => (
                <motion.article
                  key={work.title}
                  className={`${work.className} ${work.heightClass} group relative overflow-hidden rounded-[2rem] border border-white/55 shadow-card`}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.85, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                >
                  <motion.img
                    src={work.image}
                    alt={`${work.title} interior project`}
                    className="absolute inset-0 h-full w-full object-cover"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,10,8,0.06),rgba(14,10,8,0.62))]" />
                  <div className="absolute inset-x-5 top-5 flex items-start justify-between">
                    <span className="glass-panel px-4 py-2 text-xs uppercase tracking-luxe text-white/80">
                      {work.type}
                    </span>
                    <span className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-lg text-white transition-transform duration-300 group-hover:-translate-y-1">
                      +
                    </span>
                  </div>
                  <div className="absolute inset-x-5 bottom-5">
                    <div className="glass-panel p-5 text-white">
                      <p className="text-xs uppercase tracking-luxe text-white/65">{work.location}</p>
                      <h3 className="mt-3 font-display text-3xl leading-none">{work.title}</h3>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-8xl rounded-[2.5rem] border border-white/55 bg-[rgba(255,250,245,0.56)] p-8 shadow-glass backdrop-blur-sm sm:p-10 lg:p-14">
            <Reveal>
              <SectionHeading
                eyebrow="How We Work"
                title="A calm process with exacting standards."
                copy="Luxury should feel effortless for the client. Behind the scenes, that comes from structure, communication, and a relentless eye for detail."
              />
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="border-t border-[#cdbfb3] pt-6"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start gap-5">
                    <span className="font-display text-5xl leading-none text-accent sm:text-6xl">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl leading-none text-espresso">{step.title}</h3>
                      <p className="mt-4 max-w-xl text-base leading-8 text-taupe">{step.copy}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-8xl">
            <Reveal>
              <SectionHeading
                eyebrow="Testimonials"
                title="Trusted by clients who care about how a home feels, not just how it photographs."
                copy="We design for longevity, intimacy, and ease. The response we hear most often is that the final space simply feels right."
                align="center"
              />
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.blockquote
                  key={testimonial.name}
                  className="glass-panel flex h-full flex-col justify-between p-8"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.78, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-display text-3xl leading-snug text-espresso">"{testimonial.quote}"</p>
                  <footer className="mt-8 border-t border-[#c5b7aa]/60 pt-5">
                    <p className="text-sm uppercase tracking-[0.14em] text-accent">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-taupe">{testimonial.role}</p>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="inquiry" className="px-4 py-24 sm:px-6 lg:px-8 lg:pb-32">
          <div className="mx-auto grid max-w-8xl gap-10 lg:grid-cols-[0.92fr_minmax(0,1.08fr)] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Inquiry"
                title="Tell us about the space you want to live in."
                copy="Share your location, timeline, and what the project needs to do for you. We will come back with next steps and a tailored consultation."
              />
              <div className="mt-10 overflow-hidden rounded-[2.2rem] border border-white/55 shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
                  alt="Elegant living room with sculptural furniture"
                  className="h-[24rem] w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal className="glass-panel p-7 sm:p-10" delay={0.12}>
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="field-shell">
                    <span className="field-label">Full Name</span>
                    <input type="text" name="name" placeholder="Your name" required className="field-input" />
                  </label>
                  <label className="field-shell">
                    <span className="field-label">Email Address</span>
                    <input type="email" name="email" placeholder="you@example.com" required className="field-input" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="field-shell">
                    <span className="field-label">Project Location</span>
                    <input type="text" name="location" placeholder="City / neighborhood" className="field-input" />
                  </label>
                  <label className="field-shell">
                    <span className="field-label">Project Type</span>
                    <select name="type" className="field-input" defaultValue="">
                      <option value="" disabled>
                        Select a project type
                      </option>
                      <option>Private Residence</option>
                      <option>Renovation</option>
                      <option>Styling Refresh</option>
                      <option>Commercial</option>
                    </select>
                  </label>
                </div>

                <label className="field-shell">
                  <span className="field-label">Desired Timeline</span>
                  <select name="timeline" className="field-input" defaultValue="">
                    <option value="" disabled>
                      Choose your timeline
                    </option>
                    <option>Within 3 months</option>
                    <option>3 to 6 months</option>
                    <option>6 to 12 months</option>
                    <option>Planning ahead</option>
                  </select>
                </label>

                <label className="field-shell">
                  <span className="field-label">Project Vision</span>
                  <textarea
                    name="vision"
                    rows="5"
                    placeholder="Tell us how you want the space to feel, how you live in it, and what you would like to transform."
                    className="field-input min-h-[9rem] resize-none"
                  />
                </label>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-7 text-taupe">
                    Typical response time: two business days.
                  </p>
                  <motion.button
                    type="submit"
                    className={`button-primary border-0 ${
                      submitStatus === 'loading' ? 'cursor-not-allowed opacity-70' : ''
                    }`}
                    disabled={submitStatus === 'loading'}
                    aria-busy={submitStatus === 'loading'}
                    whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    {submitStatus === 'loading' ? 'Sending...' : 'Send Inquiry'}
                  </motion.button>
                </div>

                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.p
                      key="success"
                      className="rounded-2xl border border-[#c7baa9] bg-white/45 px-4 py-3 text-sm text-espresso"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      Thank you. Your inquiry has been prepared and our studio will be in touch shortly.
                    </motion.p>
                  ) : null}
                  {submitStatus === 'error' ? (
                    <motion.p
                      key="error"
                      className="rounded-2xl border border-[#d4b3a8] bg-white/45 px-4 py-3 text-sm text-[#7d3d2f]"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      {submitError}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-8xl flex-col gap-6 rounded-[2rem] border border-white/55 bg-[rgba(255,249,244,0.58)] px-6 py-8 shadow-glass backdrop-blur-sm sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl text-espresso">Mi Casa Decor</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-taupe">
              Luxury interior design for residences and boutique spaces shaped with warmth,
              restraint, and timeless detail.
            </p>
          </div>
          <div className="text-sm leading-7 text-taupe sm:text-right">
            <p>www.micasadecor.com</p>
            <p>+91 8076556700</p>
            <p>New Delhi, India</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {activeGallery ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(15,11,9,0.55)] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <motion.div
              className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/50 bg-[rgba(255,250,245,0.96)] shadow-glass"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#d2c5b8] px-6 py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-accent">Residential Gallery</p>
                  <h3 className="mt-2 font-display text-3xl text-espresso">
                    {activeGallery.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeGallery}
                  className="rounded-full border border-espresso/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-espresso transition hover:bg-white"
                >
                  Close
                </button>
              </div>

              <div className="relative bg-[#e1dad2]">
                <img
                  src={activeGallery.images[activeGalleryIndex].src}
                  alt={activeGallery.images[activeGalleryIndex].alt}
                  className="h-[22rem] w-full object-contain sm:h-[28rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,7,0)_40%,rgba(10,8,7,0.15)_100%)]" />
                <div className="absolute bottom-4 right-4 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-espresso">
                  {activeGalleryIndex + 1} / {activeGallery.images.length}
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-5">
                <button
                  type="button"
                  onClick={showPreviousGalleryImage}
                  className="rounded-full border border-espresso/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-espresso transition hover:bg-white"
                >
                  Prev
                </button>
                <div className="text-xs uppercase tracking-[0.16em] text-taupe">
                  Swipe or click to browse
                </div>
                <button
                  type="button"
                  onClick={showNextGalleryImage}
                  className="rounded-full border border-espresso/20 px-4 py-2 text-xs uppercase tracking-[0.16em] text-espresso transition hover:bg-white"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
