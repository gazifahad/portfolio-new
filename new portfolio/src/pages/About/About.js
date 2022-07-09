import React from "react";
import profile from "../../assets/images/saiful.png";
import "./About.css";

const About = () => {
  return (
    <div className="bg-primary flex items-center min-h-[95vh] text-accent">
      <div className="flex flex-col gap-10 items-center justify-center max-w-7xl mx-auto p-5">
        <div className="flex flex-col lg:flex-row p-4 justify-center items-center gap-10 w-full mb-32">
          <div className="about-box w-64 lg:w-96 h-860 overflow-hidden">
            <img
              className="inside-img w-64 lg:w-96 h-830"
              src={profile}
              alt=""
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-4xl text-secondary font-bold ">
              Saiful Islam
            </h2>
            <p className=" text-sm">Web Developer</p>
            <div className="text-center lg:text-left w-full my-4">
              <p
                //
                className="text-left text-base text-accent w-full lg:w-[60ch]"
              >
                Hi I am a MERN Stack developer And I can help you build your website however you want!
                <br />
                <br />
                Creative problem solver with demonstrated ability to work on
                multiple projects simultaneously.Positive driven and confident
                individual with an apt for learning new technologies.{" "}
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-xl font-semibold text-secondary">
                Contact Information
              </h2>
              <div>
                Email: gazifahad3@gmail.com <br /> Phone: +8801764037295{" "}
                <br /> Address: uttara, Dhaka, Bangladesh
              </div>
            </div>
            <div className="text-accent flex flex-col lg:flex-row gap-10 lg:gap-10 justify-between pr-0 lg:pr-36 mt-3">
              <div>
                <h5 className="text-left mb-3 uppercase tracking-wide">
                  Find Me
                </h5>
                <div className="flex gap-5">
                  <a
                    href="https://github.com/gazifahad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="action-box">
                      {" "}
                      <i className="fa-brands fa-github"></i>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/saifulfahad/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="action-box">
                      {" "}
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/saifulisla.fahad.33/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="action-box">
                      {" "}
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h5 className="text-left mb-3 uppercase tracking-wide">
                  Best skills
                </h5>
                <div className="flex gap-5">
                  <div className="action-box text-blue-500">
                    <i className="fa-brands fa-react"></i>
                  </div>
                  <div className="action-box text-yellow-500">
                    <i className="fa-brands fa-js-square"></i>
                  </div>
                  <div className="action-box text-blue-500">
                    <i className="fa-brands fa-css3-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
