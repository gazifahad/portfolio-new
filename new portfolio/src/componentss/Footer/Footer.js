import React from "react";

const Footer = () => {
  return (
    <div className="footer-content pb-10 -mt-10">
      <footer className="footer justify-center items-center gap-24 p-10 text-neutral-content max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2>Saiful Islam</h2>
          <p className="text-gray-600">All Rights Reserved @ Saiful Islam</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
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
              href="https://www.facebook.com/saifulislam.fahad.33/"
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
      </footer>
    </div>
  );
};

export default Footer;
