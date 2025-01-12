import work from './../images/illustration-working.svg';

const Hero = () => {
  return (
    <section className="z-50 flex flex-col lg:flex-row-reverse justify-center items-center gap-1 text-center p-32P">
      <img src={work} alt="working illustration" />
      <h1 className="text-black text-2xl lg:text-3xl">
        More than just shorter links
      </h1>
      <p className="font-semibold text-gray">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className="font-semibold text-black text-white bg-cyan rounded-20BR px-16P py-8P hover:opacity-60">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
