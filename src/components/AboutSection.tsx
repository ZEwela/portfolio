import React from "react";
import Image from "next/image";

const skills = [
  {
    skill: "HTML",
  },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "TypeScript" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "Next.js" },
  { skill: "Git" },
  { skill: "Github" },
  { skill: "SQL" },
  { skill: "PostgreSQL" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb:48">
        <h1 className="text-4xl font-bold text-center">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 md:flex-row justify-center align-top items-strech md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold text-center mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              {" "}
              I am <span className="font-bold">passionate </span>about
              programming in Javascript and{" "}
              <span className="font-bold">eager </span> to learn and grow my
              skills. My proactive approach to{" "}
              <span className="font-bold">problem-solving</span>,{" "}
              <span className="font-bold">attention to detail </span>, and{" "}
              <span className="font-bold">commitment </span> to process
              improvement are qualities I bring to every project. I thrive in
              fast-paced environments and am excited to take on new challenges.
              I am now seeking a role that will allow me to continue to learn
              and grow while contributing to a dynamic and collaborative team.
            </p>
            <br />
            <p>
              Through completing various web development courses, including a
              full-stack engineering course through Codecademy, I have gained
              experience in HTML, CSS, JavaScript, and React.
            </p>
            <br />
            <p>
              In my free time, I enjoy reading and cooking veggies. Being active
              is important to me, and I enjoy swimming and working out to keep
              my brain happy.
            </p>
            <br />
            <p>
              Learning is my motivator, and I am always looking for
              opportunities to further develop my skills.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold text-center mb-6 md:text-left">
              My skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 roinded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>

            <Image
              className="hidden md:block md:relative md:bottom-0 md:mt-20 md:left-32 md:z-0 rounded-full "
              src="/stockvault-puzzle-in-a-lightbulb-problem-solving-concept178103.jpg"
              alt="bulb"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
