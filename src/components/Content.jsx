import { useState, useEffect } from 'react';
import img1 from './../images/icon-brand-recognition.svg';
import img2 from './../images/icon-detailed-records.svg';
import img3 from './../images/icon-fully-customizable.svg';

const Content = () => {
  const [text, setText] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [links, setLinks] = useState(() => {
    // Retrieve stored links from localStorage
    const savedLinks = localStorage.getItem('shortenedLinks');
    return savedLinks ? JSON.parse(savedLinks) : [];
  });

  const inputText = (e) => {
    setText(e.target.value.trimStart());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      setInvalid(true);
      return;
    }

    try {
      const response = await fetch(`https://api.tinyurl.com/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 7NuBNwmUV1b0p0LOqVS9eSr65M3lZiPieiRlJwKFXlGDmIZu2MsTIxt2uO7l`, // Use Bearer prefix
        },
        body: JSON.stringify({
          url: text,
          domain: 'tiny.one',
        }),
      });

      const data = await response.json();
      console.log('Response data:', data); // Debug response data

      if (response.ok) {
        const newLink = { original: text, short: data.data.tiny_url };
        const updatedLinks = [...links, newLink];
        setLinks(updatedLinks);
        localStorage.setItem('shortenedLinks', JSON.stringify(updatedLinks));
        setText('');
        setInvalid(false);
      } else {
        console.error('Error response:', data); // Log server error
        setInvalid(true);
      }
    } catch (error) {
      console.error('Error shortening link:', error); // Log fetch error
      setInvalid(true);
    }
  };

  const handleCopy = (shortLink) => {
    navigator.clipboard.writeText(shortLink);
    alert('Link copied to clipboard!');
  };

  useEffect(() => {
    // Store links in localStorage whenever the `links` state changes
    localStorage.setItem('shortenedLinks', JSON.stringify(links));
  }, [links]);

  return (
    <section className="bg-gray-bg pb-32P">
      <div className="flex flex-col gap-24 relative bottom-96I">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          id="link-shortener"
          className="w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-4 px-0 py-48P lg:px-32P rounded-10BR"
        >
          <div className="w-[90%] lg:w-3/4 relative">
            <input
              type="text"
              value={text}
              onChange={inputText}
              className={`font-semibold input w-[100%] bg-white ${
                invalid && 'border-red border-2'
              }`}
              placeholder="Shorten a link here..."
              aria-label="add a link to shorten it"
            />
            {invalid && (
              <span className="absolute left-0 -bottom-32I text-red">
                Please enter a valid URL.
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

        {/* Links */}
        <ul className="flex flex-col justify-center items-center gap-6 -mt-67.2M -mb-16M">
          {links.map(({ original, short }, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center gap-4 lg:gap-0 w-[80%] py-16P bg-white mx-auto rounded-10BR"
            >
              <span className="text-black px-32P">{original}</span>
              <hr className="w-[100%] bg-gray block lg:hidden" />
              <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-start lg:items-center gap-4 px-32P w-[100%]">
                <span className="text-cyan">{short}</span>
                <button
                  onClick={() => handleCopy(short)}
                  className="font-semibold text-black text-white bg-cyan rounded-5BR px-16P py-3 hover:opacity-60 w-[100%] lg:w-auto"
                >
                  Copy
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Additional Content */}
        <div className="flex flex-col justify-center items-center gap-2 max-w-container-400 mx-auto text-center px-32P">
          <h2 className="font-bold text-black text-2xl">Advanced Statistics</h2>
          <p className="font-bold text-gray">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="relative flex flex-col xl:flex-row justify-center items-center gap-24 my-64M px-32P">
          <div className="z-10 relative xl:bottom-64I font-bold flex flex-col justify-center items-center gap-2 max-w-container-400 text-center p-32P px-48P pt-0 bg-white rounded-5BR">
            <div className="relative bg-dark-violet p-24P rounded-full bottom-48I">
              <img src={img1} alt="brand recognition" />
            </div>
            <h3 className="text-black text-xl">Brand Recognition</h3>
            <p className="text-gray">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>

          <div className="z-10 relative font-bold flex flex-col justify-center items-center gap-2 max-w-container-400 text-center p-32P px-48P pt-0 bg-white rounded-5BR">
            <div className="relative bg-dark-violet p-24P rounded-full bottom-48I">
              <img src={img2} alt="detailed records" />
            </div>
            <h3 className="text-black text-xl">Detailed Records</h3>
            <p className="text-gray">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="z-10 relative xl:top-64I font-bold flex flex-col justify-center items-center gap-2 max-w-container-400 text-center p-32P px-48P pt-0 bg-white rounded-5BR">
            <div className="relative bg-dark-violet p-24P rounded-full bottom-48I">
              <img src={img3} alt="fully customizable" />
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
