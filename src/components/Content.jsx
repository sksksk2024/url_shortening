import img1 from './../images/icon-brand-recognition.svg';
import img2 from './../images/icon-detailed-records.svg';
import img3 from './../images/icon-fully-customizable.svg';

const Content = () => {
  return (
    <section className="bg-gray-bg pb-32P">
      <div className="flex flex-col gap-24 relative bottom-96I">
        <form
          id="link-shortener"
          className="w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-4 px-0 py-32P lg:px-32P rounded-20BR"
        >
          <input
            type="text"
            className="font-semibold input w-[90%] lg:w-3/4 bg-white"
            placeholder="Shorten a link here..."
            aria-label="add a link to shorten it"
          />
          <button className="font-semibold text-black text-white bg-cyan rounded-5BR px-16P py-3 hover:opacity-60 w-[90%] lg:w-1/4">
            Shorten It!
          </button>
        </form>
        {/* Link Cards */}

        <div className="flex flex-col justify-center items-center gap-2 max-w-container-400 mx-auto text-center">
          <h2 className="font-bold text-black text-2xl">Advanced Statistics</h2>
          <p className="font-bold text-gray">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="relative flex flex-col xl:flex-row justify-center items-center gap-24 my-64M">
          <div className="z-10 relative xl:bottom-64I font-bold flex flex-col justify-center items-center gap-2 max-w-container-400 text-center p-32P  px-48P pt-16 bg-white rounded-5BR">
            <div className="absolute bg-dark-violet p-24P rounded-full bottom-224I 2xs:bottom-192I">
              <img src={img1} alt="brand recognition" />
            </div>
            <h3 className="text-black text-xl">Brand Recognition</h3>
            <p className="text-gray">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="z-10 relative font-bold flex flex-col justify-center items-center gap-2 max-w-container-400 text-center p-32P px-48P pt-16 bg-white rounded-5BR">
            <div className="absolute bg-dark-violet p-24P rounded-full bottom-224I 2xs:bottom-192I">
              <img src={img2} alt="brand recognition" />
            </div>
            <h3 className="text-black text-xl">Detailed Records</h3>
            <p className="text-gray">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="z-10 relative xl:top-64I font-bold flex flex-col justify-center items-center gap-2 max-w-container-400 text-center p-32P px-48P pt-16 bg-white rounded-5BR">
            <div className="absolute bg-dark-violet p-24P rounded-full bottom-208I 2xs:bottom-192I">
              <img src={img3} alt="brand recognition" />
            </div>
            <h3 className="text-black text-xl">Fully Customizable</h3>
            <p className="text-gray">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
          <div className="z-0 absolute h-[90dvh] xl:h-2 w-2 xl:w-[50dvw] bg-cyan border-2 border-cyan border-solid"></div>
        </div>
      </div>
    </section>
  );
};

export default Content;
