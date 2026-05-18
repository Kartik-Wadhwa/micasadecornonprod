import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { navLinks } from './data/siteContent';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import GalleryModal from './components/modals/GalleryModal';
import WorkModal from './components/modals/WorkModal';
import AboutSection from './components/sections/AboutSection';
import HeroSection from './components/sections/HeroSection';
import InquirySection from './components/sections/InquirySection';
import PortfolioSection from './components/sections/PortfolioSection';
import ProcessSection from './components/sections/ProcessSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeWork, setActiveWork] = useState(null);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 800], [0, 160]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const heroOpacity = useTransform(scrollY, [0, 520], [1, 0.6]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 28;
      const scrollPosition = window.scrollY + 180;
      let currentSection = '';

      navLinks.forEach(({ href }) => {
        const section = document.querySelector(href);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = href;
        }
      });

      setIsScrolled((previous) => (previous === scrolled ? previous : scrolled));
      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection,
      );
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen || activeGallery || activeWork) {
      document.body.style.overflow = 'hidden';
      return undefined;
    }

    document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, activeGallery, activeWork]);

  const validateField = (name, value) => {
    const trimmedValue = typeof value === 'string' ? value.trim() : value;

    switch (name) {
      case 'name':
        if (!trimmedValue) {
          return 'Please enter your full name.';
        }
        if (trimmedValue.length < 2) {
          return 'Please enter at least 2 characters.';
        }
        return '';
      case 'email':
        if (!trimmedValue) {
          return 'Please enter your email address.';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
          return 'Please enter a valid email address.';
        }
        return '';
      case 'type':
        if (!trimmedValue) {
          return 'Please choose a project type.';
        }
        return '';
      case 'timeline':
        if (!trimmedValue) {
          return 'Please choose a timeline.';
        }
        return '';
      default:
        return '';
    }
  };

  const validateForm = (formData) => {
    const nextErrors = {};

    ['name', 'email', 'type', 'timeline'].forEach((fieldName) => {
      const errorMessage = validateField(fieldName, formData.get(fieldName));

      if (errorMessage) {
        nextErrors[fieldName] = errorMessage;
      }
    });

    return nextErrors;
  };

  const handleFieldBlur = (event) => {
    const { name, value } = event.target;
    const errorMessage = validateField(name, value);

    setFieldErrors((previous) => ({
      ...previous,
      [name]: errorMessage,
    }));
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFieldErrors((previous) => {
      if (!previous[name]) {
        return previous;
      }

      return {
        ...previous,
        [name]: validateField(name, value),
      };
    });

    if (submitStatus !== 'idle' || submitError) {
      setSubmitStatus('idle');
      setSubmitError('');
    }
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
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      form.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }

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
    setFieldErrors({});

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey,
      );
      form.reset();
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  const openGallery = (service) => {
    if (!service.gallery) {
      return;
    }

    setActiveGallery({
      title: service.title,
      label: service.galleryLabel,
      images: service.gallery,
    });
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

  const selectGalleryImage = (index) => {
    setActiveGalleryIndex(index);
  };

  const openWork = (work) => {
    setActiveWork(work);
  };

  const closeWork = () => {
    setActiveWork(null);
  };

  return (
    <div id="top" className="relative overflow-x-hidden">
      <Header
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        activeSection={activeSection}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <main id="main-content" tabIndex={-1}>
        <HeroSection
          heroY={heroY}
          heroScale={heroScale}
          heroOpacity={heroOpacity}
        />
        <AboutSection />
        <ServicesSection onOpenGallery={openGallery} />
        <PortfolioSection onOpenWork={openWork} />
        <ProcessSection />
        <TestimonialsSection />
        <InquirySection
          handleFormSubmit={handleFormSubmit}
          submitStatus={submitStatus}
          submitError={submitError}
          fieldErrors={fieldErrors}
          onFieldBlur={handleFieldBlur}
          onFieldChange={handleFieldChange}
        />
      </main>

      <Footer />

      <GalleryModal
        activeGallery={activeGallery}
        activeGalleryIndex={activeGalleryIndex}
        onClose={closeGallery}
        onNext={showNextGalleryImage}
        onPrevious={showPreviousGalleryImage}
        onSelectIndex={selectGalleryImage}
      />
      <WorkModal activeWork={activeWork} onClose={closeWork} />
    </div>
  );
}

export default App;
