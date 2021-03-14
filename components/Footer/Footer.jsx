import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialIconMap = {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
};

const Footer = ({ networks, author }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center w-full text-gray-400 bg-gray-900">
      <div className="flex flex-col-reverse items-center">
        <div className="">
          <ul className="flex flex-wrap justify-center">
            {networks.map((network) => {
              return (
                <li className="p-8" key={network.name}>
                  <a href={network.url}>
                    <FontAwesomeIcon
                      className="w-16 h-16"
                      icon={socialIconMap[network.className]}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-col items-center copyright">
            <li>
              Design by {author + ' • '}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
            <li className="pb-8">&copy; Copyright {year} Niagamix</li>
          </ul>
        </div>
        <a
          className="p-4 -mt-8 bg-gray-300 rounded-full"
          title="Back to Top"
          href="#home"
        >
          <FontAwesomeIcon className="w-8 h-8" icon={faArrowUp} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
