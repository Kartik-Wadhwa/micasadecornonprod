import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { services } from '../../data/siteContent';

function ServicesSection({ onOpenGallery }) {
  const shouldReduceMotion = useReducedMotion();

  return (
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
                aria-label={
                  isInteractive ? `${service.title}, open service gallery` : service.title
                }
                onClick={isInteractive ? () => onOpenGallery(service) : undefined}
                onKeyDown={
                  isInteractive
                    ? (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          onOpenGallery(service);
                        }
                      }
                    : undefined
                }
                className={`glass-panel group flex h-full flex-col overflow-hidden ${
                  isInteractive ? 'cursor-pointer' : ''
                } ${index % 2 === 1 ? 'sm:mt-10' : ''}`}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              >
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
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
                    <div className="mt-4 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-accent">
                      <span className="rounded-full border border-[#d5c9bc] bg-white/55 px-3 py-1">
                        {service.gallery.length} image gallery
                      </span>
                      <span className="rounded-full border border-[#d5c9bc] bg-white/55 px-3 py-1">
                        {service.deliverables}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-taupe">{service.copy}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-[#c5b7aa]/60 pt-4 text-xs uppercase tracking-[0.16em] text-accent">
                    <span>{isInteractive ? 'Open gallery' : 'Tailored scope'}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
