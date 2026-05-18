import { motion, useReducedMotion } from 'framer-motion';
import homeHero from '../../../images/Home.jpg';
import { heroTrustItems } from '../../data/siteContent';

function HeroSection({ heroY, heroScale, heroOpacity }) {
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <section className="relative flex min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        className="absolute inset-0"
        style={
          shouldReduceMotion
            ? undefined
            : { y: heroY, scale: heroScale, opacity: heroOpacity }
        }
      >
        <img
          src={homeHero}
          alt="Bright, warm living room interior"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
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
            Delhi-based interior design for residences, renovations, and boutique
            hospitality spaces shaped from concept to final styling.
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
          <motion.div
            variants={textItem}
            className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            {heroTrustItems.map((item) => (
              <div
                key={item.label}
                className="glass-panel px-5 py-4 text-left"
              >
                <p className="font-display text-3xl leading-none text-espresso">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-taupe">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
