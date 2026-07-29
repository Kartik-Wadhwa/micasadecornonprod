function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-8xl flex-col gap-6 rounded-[2rem] border border-white/55 bg-[rgba(255,249,244,0.58)] px-6 py-8 shadow-glass backdrop-blur-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-3xl text-espresso">Orchid Design</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-taupe">
            Luxury interior design for residences and boutique spaces shaped with warmth,
            restraint, and timeless detail.
          </p>
        </div>
        <div className="text-sm leading-7 text-taupe sm:text-right">
          <p>orchiddesign.in</p>
          <p>+91 8076556700</p>
          <p>New Delhi, India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
