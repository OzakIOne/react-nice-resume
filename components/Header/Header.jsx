import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleDown, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';

const Header = ({ project, name, description, github }) => {
  return (
    <header id="home" className="h-screen min-h-500">
      <div className="w-full ">
        <nav className="fixed z-10 flex justify-around w-full h-8 font-bold text-gray-300 bg-gray-500 dark:bg-gray-900 dark:text-gray-500 md:px-64">
          <ul className="flex items-center justify-around w-full h-8">
            <li className="sm:px-8">
              <a href="#home">Home</a>
            </li>
            <li className="sm:px-8">
              <a href="#about">About</a>
            </li>
            <li className="sm:px-8">
              <a href="#resume">Resume</a>
            </li>
            <li className="sm:px-8">
              <a href="#portfolio">Works</a>
            </li>
            <li className="sm:px-8">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-center justify-center h-full min-h-500 dark:bg-gray-800 dark:text-gray-400">
        <div className="flex flex-col items-center justify-center mb-16 md:w-8/12 lg:w-6/12">
          <h1 className="pb-8 text-2xl font-bold text-center md:text-5xl lg:text-7xl">
            {name}
          </h1>
          <h3 className="px-8 text-xl text-center md:w-4/6">{description}</h3>
          <ul className="flex flex-wrap justify-center mt-16 text-xl">
            <li className="flex items-center p-4 m-4 text-white bg-green-600">
              <FontAwesomeIcon className="w-4 mx-2" icon={faBook} />
              <a href={project}>Project</a>
            </li>
            <li className="flex items-center p-4 m-4 text-white bg-gray-600">
              <FontAwesomeIcon className="w-4 mx-2" icon={faGithub} />
              <a href={project}>Github</a>
            </li>
          </ul>
        </div>
        <div className={`flex items-center justify-center ${styles.ArrowDown}`}>
          <a className={styles.ArrowDown} href="#about">
            <FontAwesomeIcon
              className={styles.ArrowDown}
              icon={faArrowCircleDown}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
