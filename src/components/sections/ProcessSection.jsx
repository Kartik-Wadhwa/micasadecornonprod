import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { processSteps } from '../../data/siteContent';

function ProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
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
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
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
  );
}

export default ProcessSection;
