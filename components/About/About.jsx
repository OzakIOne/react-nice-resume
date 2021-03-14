import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image';
const About = ({
  bio,
  name,
  city,
  state,
  street,
  zip,
  phone,
  email,
  resumeDownload,
}) => {
  return (
    <section id="about" className="py-12 overflow-hidden bg-blue-800 md:p-32">
      <div className="flex flex-wrap justify-center lg:justify-around ">
        <div className="p-4">
          <Image
            loading="lazy"
            className="w-32 h-32 rounded-full"
            src="/images/profilepic.jpg"
            width={120}
            height={120}
            alt="Nordic Giant Profile Pic"
          />
        </div>
        <div className="flex flex-col w-full px-16 lg:w-6/12">
          <h2 className="py-4 text-2xl font-bold text-center text-white dark:text-gray-300 lg:text-left">
            About Me
          </h2>

          <p className="text-justify text-gray-400 lg:text-left">{bio}</p>
          <div className="flex flex-wrap items-start justify-center lg:justify-start lg:flex-row">
            <div className="flex flex-col items-center w-full lg:w-6/12 lg:items-baseline">
              <h2 className="py-4 text-2xl font-bold text-center text-white dark:text-gray-300 lg:text-left">
                Contact Details
              </h2>
              <p className="w-full text-center lg:text-left lg:w-64">
                <span className="text-gray-400">{name}</span>
                <br />
                <span className="text-gray-400">
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span className="text-gray-400">{phone}</span>
                <br />
                <span className="text-gray-400">{email}</span>
              </p>
            </div>
            <div className="pt-10">
              {/* <div className="flex items-center justify-center p-4 text-white bg-gray-600">
                <FontAwesomeIcon className="w-4 " icon={faDownload} />
                <a href={resumeDownload} className="pl-8">
                  Download Resume
                </a>
              </div> */}
              <a
                href={resumeDownload}
                className="flex items-center justify-center p-4 px-8 font-bold text-white bg-gray-600 downloadButton hover:text-gray-600 hover:bg-white dark:hover:bg-gray-500 dark:hover:text-gray-400 dark:text-gray-400"
              >
                <FontAwesomeIcon className="w-4 h-4" icon={faDownload} />
                &nbsp; Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
