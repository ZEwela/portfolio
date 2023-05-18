import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Leafy Lane",
    description:
      "This is an e-commerce web application built with Vite. The frontend is built using React and TypeScript, while the backend is built with Express and MongoDB/Mongoose. The application is ready to be run with Docker Compose, making it easy to deploy to various environments. While the initial page load may require a bit more time due to its deployment on Render, this presents the perfect opportunity to sit back, relax, and savor a delightful cup of your favorite beverage.",
    image: "/leafy_lane.png",
    link: "https://leafy-lane.onrender.com/",
    github: "https://github.com/ZEwela/leafy_lane",
  },
  {
    name: "News Site",
    description:
      "This is a news site built with Next.js and TypeScript. It uses the New York Times API to fetch the latest news articles and displays them in a clean and responsive interface.",
    image: "/news_site.png",
    link: "https://news-site-i9pi.vercel.app/",
    github: "https://github.com/ZEwela/News-Site",
  },
  {
    name: "p5.js Project Soft Character",
    description:
      "The goal of the project was to create a simple soft character using p5.js graphics and JavaScript logic.",
    image: "/soft_Character.png",
    link: "https://zewela.github.io/p5_soft_Character/",
    github: "https://github.com/ZEwela/p5_soft_Character",
  },
  {
    name: "p5.js Project ASCII Text Video",
    description:
      "The goal of the project was to create a video stream made with ASCII.",
    image: "/ASCII.png",
    link: "https://zewela.github.io/ps_ASCII_Text_Video/",
    github: "https://github.com/ZEwela/ps_ASCII_Text_Video",
  },
  {
    name: "Amazonia",
    description:
      "An e-commerce web application built with React, Express, and MongoDB/Mongoose. It allows users to view products, add them to a cart, and checkout using the PayPal API for payment.",
    image: "/amazonia.png",
    link: "",
    github: "https://github.com/ZEwela/amazonia-",
  },
  {
    name: "JAMMMING",
    description:
      "Codecademy project which allows to search for songs, create playlists, and save them to Spotify. Deploy with Surge.",
    image: "/jammming.png",
    link: "http://ewelina_jammming.surge.sh",
    github: "https://github.com/ZEwela/jammming",
  },
  {
    name: "Read",
    description:
      "This site was created with React and Redux. It uses Reddit API to fetch the latest posts and comments.",
    image: "/read.png",
    link: "https://read-react-project.netlify.app/",
    github: "https://github.com/ZEwela/read",
  },
  {
    name: "My Page",
    description: "My first personal page created with JavaScript, HTML, SCSS.",
    image: "/myPage.png",
    link: "https://zewela.github.io/mypage/",
    github: "https://github.com/ZEwela/mypage",
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
