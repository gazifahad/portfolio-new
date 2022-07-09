import React from "react";
import ProjectCard from "./ProjectCard";
import homedecor from "../../assets/images/homedecor ss.png";
import greenstock from "../../assets/images/warehouse-green.png";
import redchilly from "../../assets/images/red-chilly.png";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "FHOME DÉCOR CORP",
      name: "Web App for small manufacturers",
      image: homedecor,
      links: {
        live: "https://polite-douhua-e7e846.netlify.app/",
        client: "https://github.com/gazifahad/home-decor-client",
        server: "https://github.com/gazifahad/home-decor-server",
      },
    },
    {
      id: 2,
      title: "GREEN STOCK WAREHOUSE",
      name: "Stock Management WebApp",
      image: greenstock,
      links: {
        live: "https://warehouse-green.netlify.app/",
        client: "https://github.com/gazifahad/warehouse-client",
        server: "https://github.com/gazifahad/warehouse-server",
      },
    },
    {
      id: 3,
      title: "Red Chilly",
      name: "Restaurant Management",
      image: redchilly,
      links: {
        live: "https://red-chilly-e225a.web.app/",
        client: "https://github.com/gazifahad/red-chilly",
        server: "",
      },
    },
  ];

  return (
    <div id="portfolio" className="text-white max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-xs lg:text-sm text-secondary uppercase">
          VISIT MY PORTFOLIO AND GIVE YOUR VALUABLE FEEDBACK
        </p>
        <p className="text-accent font-bold text-3xl lg:text-5xl mb-10">
         Some of the Projects developed by me
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
