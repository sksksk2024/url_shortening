import logoW from './../images/logoW.svg';
import Insta from './utils/Insta';
import Pinterest from './utils/Pinterest';
import Twitter from './utils/Twitter';
import Facebook from './utils/Facebook';

const Footer = () => {
  return (
    <footer className="bg-very-dark-violet">
      <div className="max-w-container-1440 mx-auto flex flex-col lg:flex-row justify-start lg:justify-around items-center lg:items-start gap-12 bg-very-dark-violet py-48P">
        <img src={logoW} aria-hidden="true" />

        <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-12 lg:gap-16">
          <ul className="flex flex-col justify-center items-center lg:items-start gap-4">
            <li className="font-bold text-white mb-16M" aria-label="title 1">
              <h2>Features</h2>
            </li>
            <li className="hover:text-cyan cursor-pointer">Link Shortening</li>
            <li className="hover:text-cyan cursor-pointer">Branded Links</li>
            <li className="hover:text-cyan cursor-pointer">Analytics</li>
          </ul>

          <ul className="flex flex-col justify-center items-center lg:items-start gap-4">
            <li className="font-bold text-white mb-16M" aria-label="title 2">
              <h2>Resources</h2>
            </li>
            <li className="hover:text-cyan cursor-pointer">Blog</li>
            <li className="hover:text-cyan cursor-pointer">Developers</li>
            <li className="hover:text-cyan cursor-pointer">Support</li>
          </ul>

          <ul className="flex flex-col justify-center items-center lg:items-start gap-4">
            <li className="font-bold text-white mb-16M" aria-label="title 3">
              <h2>Company</h2>
            </li>
            <li className="hover:text-cyan cursor-pointer">About</li>
            <li className="hover:text-cyan cursor-pointer">Our Team</li>
            <li className="hover:text-cyan cursor-pointer">Careers</li>
            <li className="hover:text-cyan cursor-pointer">Careers</li>
            <li className="hover:text-cyan cursor-pointer">Contact</li>
          </ul>

          <ul className="flex justify-center items-center gap-6">
            <li>
              <Facebook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Pinterest />
            </li>
            <li>
              <Insta />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
