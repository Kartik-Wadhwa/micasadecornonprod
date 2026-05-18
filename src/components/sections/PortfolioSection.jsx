import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { works } from '../../data/siteContent';

function PortfolioSection({ onOpenWork }) {
  const shouldReduceMotion = useReducedMotion();

  return (
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
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${work.title}`}
              onClick={() => onOpenWork(work)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onOpenWork(work);
                }
              }}
              className={`${work.className} ${work.heightClass} group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/55 shadow-card`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.85,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
              <motion.img
                src={work.image}
                alt={`${work.title} interior project`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,10,8,0.06),rgba(14,10,8,0.62))]" />
              <div className="absolute inset-x-5 top-5 flex items-start justify-between">
                <span className="glass-panel px-4 py-2 text-xs uppercase tracking-luxe text-white/80">
                  {work.type}
                </span>
                <span className="glass-panel px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-white/85 transition-transform duration-300 group-hover:-translate-y-1">
                  View story
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5">
                <div className="glass-panel p-5 text-white">
                  <p className="text-xs uppercase tracking-luxe text-white/65">{work.location}</p>
                  <h3 className="mt-3 font-display text-3xl leading-none">{work.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                    {work.summary}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
