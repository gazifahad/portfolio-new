import React from "react";
import { useParams } from "react-router-dom";
import homedecor from "../../assets/images/homedecor ss.png";
import greenstock from "../../assets/images/warehouse-green.png";
import redchilly from "../../assets/images/red-chilly.png";
import { useEffect } from "react";
import { useState } from "react";
import "./PorjectDetails.css";
import ScreenShotModal from "./ScreenShotModal";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openedImage, setOpenedImage] = useState("");

  const projects = [
    {
      id: 1,
      title: "FHOME DÉCOR CORP",
      name: "Web App for small manufacturers",

      description: [
        "This site includes a firebase email-password-based and google authentication system.",
        "This site has different features for different roles. There is two role admin and user.",
        "You can pay using your credit card.",
        "For an admin role user there in the dashboard he can cancel any unpaid order . make other admin and my profile page.",
        "This site is protected using JsonWebToken",
      ],
      image:homedecor,
      links: {
        live: "https://polite-douhua-e7e846.netlify.app/",
        client: "https://github.com/gazifahad/home-decor-client",
        server: "https://github.com/gazifahad/home-decor-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "MongoDB",

      ],
      screenshots: [
        "https://i.ibb.co/7G7PPKz/home.png",
        "https://i.ibb.co/bN17T9R/home1.png",
        "https://i.ibb.co/5KkzR23/home2.png",
        "https://i.ibb.co/jgm4wFC/home3.png",
      ],
    },
    {
      id: 2,
      title: "GREEN STOCK WAREHOUSE",
      name: "Stock Management WebApp",
      description: [
        "User can maintain their products in all aspects.",
        "User can store their product information in the database.",
        "User Can update stocks and also can add product , and can remove products.",
        "You can see user reviews . what they think about us and how they feel.",
        "Here You can see all our team members and how many companies inventory we manage.",
      ],
      image: greenstock,
      links: {
        live: "https://warehouse-green.netlify.app/",
        client: "https://github.com/gazifahad/warehouse-client",
        server: "https://github.com/gazifahad/warehouse-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "ExpresJs",
        "MongoDB",
      ],
      screenshots: [
        "https://i.ibb.co/jLBy3gf/green.png",
        "https://i.ibb.co/Ntbp5cs/green1.png",
        "https://i.ibb.co/9ZdYh1Q/green2.png",
        "https://i.ibb.co/BgKqqCC/green3.png",
      ],
    },
    {
      id: 3,
      title: "Red Chilly",
      name: "Restaurant Management",

      description: [
        "A mini restaurant who is starting online",
        "Different menus for breakfast,lunch and dinner",
        "can see the location",
        "can checkout if user is logged in",
        "have to verify email for ordering",
      ],
      image: redchilly,
      links: {
        live: "https://red-chilly-e225a.web.app/",
        client: "https://github.com/gazifahad/red-chilly",
        server: "",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "React-Bootstrap"
      ],
      screenshots: [
        "https://i.ibb.co/2t63jmy/redchilly4.png",
        "https://i.ibb.co/Dfh25fk/redchilly3.png",
        "https://i.ibb.co/Htv8Zg5/redchilly2.png",
        "https://i.ibb.co/Fwv6JRJ/redchilly1.png"
      ],
    },
  ];

  useEffect(() => {
    const project = projects.find((x) => x.id === +id);
    setProject(project);
    console.log(project);
  }, [id]);

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      className="detail-card flex flex-col lg:min-h-screen p-5 lg:p-40 hover:text-white"
    >
      <div className="inside-detail flex flex-col lg:flex-row justify-center items-start gap-8 lg:h-[60vh] text-left mb-32">
        <div className="image-detail w-full h-80 lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
          <img src={project.image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
          <div>
            <h2 className="font-semibold text-sm my-4 text-secondary">
              {project.title}
            </h2>
            <h2 className="project-title text-accent font-semibold text-xl my-4">
              {project.name}
            </h2>
            <div className="my-5">
              <h3 className=" text-secondary">Project Overview</h3>
              {project?.description?.map((point, index) => (
                <p key={index} className="text-accent">
                  {index + 1}. {point}
                </p>
              ))}
            </div>
            <div className="my-5">
              <h3 className=" text-secondary">Technology used</h3>
              <div className="flex flex-wrap gap-4">
                {project?.technology?.map((point, index) => (
                  <span key={index} className="text-accent hover:none btn">
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="button-content flex justify-between mt-5">
            <a
              href={project?.links?.live}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
              View Live
            </a>
            <a
              href={project?.links?.client}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Client Code
            </a>
            <a
              href={project?.links?.server}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              {" "}
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Server Code
            </a>
          </div>
        </div>
      </div>

      <div>
        <p className="text-accent text-center font-bold text-xl lg:text-5xl mb-10">
          Project Screenshots
        </p>
        <div className="screenshot w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {project?.screenshots?.map((screenshot) => (
            <button
              onClick={() => {
                setOpenedImage(screenshot);
                setIsOpen(true);
              }}
            >
              <img className="w-full rounded-3xl" src={screenshot} alt="" />
            </button>
          ))}
        </div>
      </div>
      {modalIsOpen && (
        <ScreenShotModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          openedImage={openedImage}
        />
      )}
    </div>
  );
};

export default ProjectDetails;
