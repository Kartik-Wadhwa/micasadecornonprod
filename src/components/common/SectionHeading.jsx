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

export default SectionHeading;
