const Resume = ({ education, work, skillmessage, skills }) => {
  return (
    <section
      id="resume"
      className="flex justify-center py-16 dark:bg-gray-700 dark:text-gray-300"
    >
      <div className="md:w-4/6 lg:w-1/2 ">
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
          <span className="text-2xl border-b-4 border-blue-600">Education</span>

          <div className="w-4/6">
            {education.map((e) => {
              return (
                <div className="pb-8" key={e.school}>
                  <h3 className="pt-8 text-3xl font-bold lg:pt-0">
                    {e.school}
                  </h3>
                  <p className="py-4 font-serif text-xl italic text-gray-500 dark:text-gray-300">
                    {e.degree} <span>&bull;</span>
                    <span className="font-sans text-base not-italic">
                      {' '}
                      {e.graduated}
                    </span>
                  </p>
                  <p className="text-gray-500 dark:text-gray-300">
                    {e.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center pb-8 lg:items-start lg:flex-row lg:justify-between">
          <span className="text-2xl border-b-4 border-blue-600">Work</span>

          <div className="w-4/6">
            {work.map((e) => {
              return (
                <div className="pb-8" key={e.company}>
                  <h3 className="pt-8 text-3xl font-bold lg:pt-0">
                    {e.company}
                  </h3>
                  <p className="py-4 font-serif text-xl italic text-gray-500 dark:text-gray-300">
                    {e.title}
                    <span className="font-sans text-base not-italic">
                      &bull;
                    </span>{' '}
                    <em>{e.years}</em>
                  </p>
                  <p className="text-gray-500 dark:text-gray-300">
                    {e.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center pb-8 lg:items-start lg:flex-row lg:justify-between">
          <span className="text-2xl border-b-4 border-blue-600">Skills</span>

          <div className="w-4/6">
            <p className="pt-8 lg:pt-0 ">{skillmessage}</p>
            <ul>
              {skills.map((skill) => {
                return (
                  <li className="py-8" key={skill.name}>
                    <em>{skill.name}</em>
                    <div className="w-full h-8 bg-gray-300 dark:bg-gray-800">
                      <div
                        className={`h-8 ${skill.color} ${skill.name}`}
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
