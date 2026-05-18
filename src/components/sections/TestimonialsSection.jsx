import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data/siteContent';

function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
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
              transition={{
                duration: 0.78,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-display text-3xl leading-snug text-espresso">
                "{testimonial.quote}"
              </p>
              <footer className="mt-8 border-t border-[#c5b7aa]/60 pt-5">
                <p className="text-sm uppercase tracking-[0.14em] text-accent">{testimonial.name}</p>
                <p className="mt-1 text-sm text-taupe">{testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
