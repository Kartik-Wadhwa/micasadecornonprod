import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

function InquirySection({
  handleFormSubmit,
  submitStatus,
  submitError,
  fieldErrors,
  onFieldBlur,
  onFieldChange,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
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
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <Reveal className="glass-panel p-7 sm:p-10" delay={0.12}>
          <form className="space-y-5" onSubmit={handleFormSubmit}>
            <p className="text-sm leading-7 text-taupe">
              Required fields are marked with <span className="font-semibold text-espresso">*</span>.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-shell">
                <span className="field-label">Full Name *</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  className="field-input"
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                  onBlur={onFieldBlur}
                  onChange={onFieldChange}
                />
                {fieldErrors.name ? (
                  <span id="name-error" className="field-error">
                    {fieldErrors.name}
                  </span>
                ) : null}
              </label>
              <label className="field-shell">
                <span className="field-label">Email Address *</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="field-input"
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  onBlur={onFieldBlur}
                  onChange={onFieldChange}
                />
                {fieldErrors.email ? (
                  <span id="email-error" className="field-error">
                    {fieldErrors.email}
                  </span>
                ) : null}
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-shell">
                <span className="field-label">Project Location</span>
                <input
                  type="text"
                  name="location"
                  placeholder="City / neighborhood"
                  autoComplete="address-level2"
                  className="field-input"
                  onBlur={onFieldBlur}
                  onChange={onFieldChange}
                />
              </label>
              <label className="field-shell">
                <span className="field-label">Project Type *</span>
                <select
                  name="type"
                  className="field-input"
                  defaultValue=""
                  required
                  aria-invalid={Boolean(fieldErrors.type)}
                  aria-describedby={fieldErrors.type ? 'type-error' : undefined}
                  onBlur={onFieldBlur}
                  onChange={onFieldChange}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option>Private Residence</option>
                  <option>Renovation</option>
                  <option>Styling Refresh</option>
                  <option>Commercial</option>
                </select>
                {fieldErrors.type ? (
                  <span id="type-error" className="field-error">
                    {fieldErrors.type}
                  </span>
                ) : null}
              </label>
            </div>

            <label className="field-shell">
              <span className="field-label">Desired Timeline *</span>
              <select
                name="timeline"
                className="field-input"
                defaultValue=""
                required
                aria-invalid={Boolean(fieldErrors.timeline)}
                aria-describedby={fieldErrors.timeline ? 'timeline-error' : undefined}
                onBlur={onFieldBlur}
                onChange={onFieldChange}
              >
                <option value="" disabled>
                  Choose your timeline
                </option>
                <option>Within 3 months</option>
                <option>3 to 6 months</option>
                <option>6 to 12 months</option>
                <option>Planning ahead</option>
              </select>
              {fieldErrors.timeline ? (
                <span id="timeline-error" className="field-error">
                  {fieldErrors.timeline}
                </span>
              ) : null}
            </label>

            <label className="field-shell">
              <span className="field-label">Project Vision</span>
              <textarea
                name="vision"
                rows="5"
                placeholder="Tell us how you want the space to feel, how you live in it, and what you would like to transform."
                className="field-input min-h-[9rem] resize-none"
                onBlur={onFieldBlur}
                onChange={onFieldChange}
              />
            </label>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-taupe">
                We review every note personally and typically respond within two business
                days.
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

            <div className="rounded-[1.6rem] border border-[#d8ccc0] bg-white/45 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">
                Prefer a faster start?
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:+918076556700"
                  className="button-secondary border-espresso/20 bg-white/70 px-4 py-2 text-xs tracking-[0.14em] text-espresso hover:bg-white"
                >
                  Call the Studio
                </a>
                <a
                  href="https://wa.me/918076556700"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary border-espresso/20 bg-white/70 px-4 py-2 text-xs tracking-[0.14em] text-espresso hover:bg-white"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.p
                  key="success"
                  className="rounded-2xl border border-[#c7baa9] bg-white/45 px-4 py-3 text-sm text-espresso"
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  Thank you. We have your inquiry and will come back with next steps within
                  two business days.
                </motion.p>
              ) : null}
              {submitStatus === 'error' ? (
                <motion.p
                  key="error"
                  className="rounded-2xl border border-[#d4b3a8] bg-white/45 px-4 py-3 text-sm text-[#7d3d2f]"
                  role="alert"
                  aria-live="assertive"
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
  );
}

export default InquirySection;
