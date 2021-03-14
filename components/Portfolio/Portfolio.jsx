import React from 'react';
import Image from 'next/image';

const Portfolio = ({ projects }) => {
  return (
    <section
      id="portfolio"
      className="flex justify-center w-full py-16 bg-gray-100 dark:bg-gray-600 dark:text-gray-300"
    >
      <div className="flex flex-col items-center w-full md:w-4/6 lg:w-4/6">
        <h1 className="text-3xl">Check Out Some of My Works.</h1>

        <div className="flex flex-wrap">
          {projects.map((project) => {
            return (
              <div
                className="flex flex-col items-center w-full p-8 lg:w-4/12"
                key={project.title}
              >
                <a href={project.url} title={project.title}>
                  <Image
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    width={977}
                    height={800}
                  ></Image>
                  <div>
                    <h5 className="text-xl font-bold">{project.title}</h5>
                    <p className="text-gray-500 dark:text-gray-300">
                      {project.category}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
