import React from "react";
import Image from "next/image";

const skills = [
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
  { skill: "React Native" },
  {
    skill: "HTML",
  },
  { skill: "CSS" },
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
              I enjoy the problem-solving aspect of programming. I like turning
              ideas into reality. I also appreciate the satisfaction of passing
              tests and seeing working features. In my free time, I enjoy
              reading and cooking vegetables. Being active is important to me; I
              enjoy swimming and working out to keep my brain happy. I also like
              lying on the grass or sand and looking at trees and the sky.
            </p>
            <br />
            <p>
              &apos;Not knowing&apos; is my motivator, and I am always looking
              for opportunities to further develop my skills.
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
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
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
