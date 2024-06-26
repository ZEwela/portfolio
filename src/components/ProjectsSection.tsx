import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Spokes",
    description:
      "Team project. Spokes is an app designed for cyclists to connect, match, and communicate with fellow cyclists. Developed using React Native with Expo, the app incorporates Firebase for authentication and chat features. On the backend, we utilise a PostgreSQL database and have built an API with Node.js and Express, enabling scalability for future expansions that may require more complex queries.",
    image: "/spokes_n.png",
    link: "https://rejamncspokes.netlify.app/",
    github: "https://github.com/adamkow/FE-Spokes",
  },
  {
    name: "NC News",
    description:
      "The project offers a user-friendly interface for browsing articles, sorting them based on various criteria, and adding comments to selected articles. Hosted on Render, the app is developed using React and Vite. Additionally, the project integrates a backend system constructed with Node.js, Express.js, and PostgreSQL, enabling the implementation of RESTful APIs for user article posting and commenting.",
    image: "/nc_news.png",
    link: "https://nc-news-fe-site.netlify.app/",
    github: "https://github.com/ZEwela/nc-news-fe",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-4xl font-bold text-center">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link
                      href={project.link ? project.link : project.github}
                      target="_black"
                    >
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className=" mt-8  md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        {project.link && (
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:translate-y-1 transition-transform cursor-pointer"
                          />
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
