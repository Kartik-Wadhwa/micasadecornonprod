import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { aboutHighlights } from '../../data/siteContent';

function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[0.95fr_minmax(0,1.05fr)] lg:items-center">
        <Reveal className="relative">
          <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-stone/30 blur-3xl lg:block" />
          <div className="overflow-hidden rounded-[2.2rem] border border-white/55 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
              alt="Curated dining interior with layered textures"
              className="h-[26rem] w-full object-cover sm:h-[34rem]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="glass-panel absolute bottom-6 left-6 max-w-xs p-5 text-sm leading-7 text-espresso">
            We design for people who appreciate nuance: spaces that are calm on first
            glance and endlessly rewarding up close.
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <SectionHeading
            eyebrow="About the Studio"
            title="Editorial interiors with a sense of permanence."
            copy="Mi Casa Decor is a luxury interior design studio focused on homes and hospitality spaces that feel composed, tactile, and deeply personal. Our work balances architectural discipline with softness, building rooms that support everyday life while carrying the poise of a beautifully edited publication."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {aboutHighlights.map((point, index) => (
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
  );
}

export default AboutSection;
