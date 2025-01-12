import { useState } from 'react';
import img1 from './../images/icon-brand-recognition.svg';
import img2 from './../images/icon-detailed-records.svg';
import img3 from './../images/icon-fully-customizable.svg';

const Content = () => {
  const [invalid, setInvalid] = useState(false);
  const [text, setText] = useState('');

  const inputText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setInvalid(true);
    }

    setText('');
    setInvalid(false);
  };

  return (
    <section className="bg-gray-bg pb-32P">
      <div className="flex flex-col gap-24 relative bottom-96I">
        <form
          onSubmit={handleSubmit}
          id="link-shortener"
          className="w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-4 px-0 py-48P lg:px-32P rounded-10BR"
        >
          <div className="w-[90%] lg:w-3/4 relative">
            <input
              type="text"
              className={`font-semibold input w-[100%] bg-white ${
                invalid && 'border-red border-2'
              }`}
              placeholder="Shorten a link here..."
              required
              aria-label="add a link to shorten it"
              onChange={inputText}
            />
            {invalid && (
              <span className="absolute left-0 -bottom-32I text-red">
                Please add a link
              </span>
            )}
          </div>
          <button
            type="submit"
            className="font-semibold text-black text-white bg-cyan rounded-5BR px-16P py-3 hover:opacity-60 w-[90%] lg:w-1/4"
          >
            Shorten It!
          </button>
        </form>

        {/* Link Cards */}
        <ul className="flex flex-col justify-center items-center gap-6 -mt-67.2M -mb-16M">
          <li className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-4 lg:gap-0 w-[80%] py-16P bg-white mx-auto rounded-10BR">
            <span className="text-black px-32P">sassfasfas</span>
            <hr className="w-[100%] bg-gray block lg:hidden" />
            <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-start lg:items-center gap-4 px-32P w-[100%]">
              <span className="text-cyan">sdagasd</span>
              <button className="font-semibold text-black text-white bg-cyan rounded-5BR px-16P py-3 hover:opacity-60 w-[100%] lg:w-auto">
                Copy
              </button>
              {/* <button className="font-semibold text-black text-white bg-very-dark-blue rounded-5BR px-16P py-3 hover:opacity-60">
                Copied!
              </button> */}
            </div>
          </li>
          <li className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-4 lg:gap-0 w-[80%] py-16P bg-white mx-auto rounded-10BR">
            <span className="text-black px-32P">sassfasfas</span>
            <hr className="w-[100%] bg-gray block lg:hidden" />
            <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-start lg:items-center gap-4 px-32P w-[100%]">
              <span className="text-cyan">sdagasd</span>
              <button className="font-semibold text-black text-white bg-cyan rounded-5BR px-16P py-3 hover:opacity-60 w-[100%] lg:w-auto">
                Copy
              </button>
              {/* <button className="font-semibold text-black text-white bg-very-dark-blue rounded-5BR px-16P py-3 hover:opacity-60">
                Copied!
              </button> */}
            </div>
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center gap-2 max-w-container-400 mx-auto text-center px-32P">
          <h2 className="font-bold text-black text-2xl">Advanced Statistics</h2>
          <p className="font-bold text-gray">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="relative flex flex-col xl:flex-row justify-center items-center gap-24 my-64M">
          <div className="z-10 relative xl:bottom-64I font-bold flex flex-col justify-center items-center gap-2 max-w-container-400 text-center p-32P  px-48P pt-16 bg-white rounded-5BR">
            <div className="absolute bg-dark-violet p-24P rounded-full bottom-256I 23-125:bottom-192I 2xs:bottom-192I">
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
            <div className="absolute bg-dark-violet p-24P rounded-full bottom-256I 23-125:bottom-192I 2xs:bottom-192I">
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
