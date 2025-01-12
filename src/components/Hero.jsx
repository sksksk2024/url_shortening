import work from './../images/illustration-working.svg';

const Hero = () => {
  return (
    <section className="static lg:relative left-128I z-50 flex flex-col lg:flex-row-reverse justify-center lg:justify-around items-center gap-1 lg:gap-4 p-32P lg:pl-0 lg:pr-16P lg:py-32P mb-128M">
      <img
        className="w-2/4 hidden lg:block"
        src={work}
        alt="working illustration"
      />
      <section className="w-2/4 flex flex-col justify-start text-center lg:items-start text-start">
        <h1 className="font-bold text-black text-2xl lg:text-4xl leading-10 lg:leading-2xs-tight">
          More than just shorter links
        </h1>
        <p className="text-gray">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="font-semibold text-black text-white bg-cyan rounded-30BR p-16P px-32P my-16M hover:opacity-60">
          Get Started
        </button>
      </section>
    </section>
  );
};

export default Hero;
