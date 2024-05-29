import React, { useState } from "react";
import "./Contact.css";
import contact from "../../assets/images/contact1.webp";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (message) => {
    setIsLoading(true);
    (async () => {
      const { data } = await axios.post(
        "https://saiful.herokuapp.com/email",
        message
      ).then(alert('I Have Got Your Mail, I will get back to you soon. thanks'))
      if ( data) {
        setIsLoading(false);
        swal(
          "Successful",
          "I Have Got Your Mail, I will get back to you soon.",
          "success",
          {
            className: "rounded-3xl",
          }
        );
        reset();
      }
      setIsLoading(false);
    })();
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-xs lg:text-sm text-secondary uppercase">Contact</p>
        <p className="text-accent font-bold text-3xl lg:text-5xl mb-10">
          Contact With Me
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-10">
        <div
          data-aos="fade-up-right"
          data-aos-duration="1500"
          className="contact-card p-5 lg:p-10 w-full lg:w-2/5 h-full text-left"
        >
          <div className="contact-image rounded-2xl overflow-hidden mb-10">
            <img src={contact} alt="" />
          </div>
          <h3 className="text-3xl font-semibold text-accent my-4">
            Saiful Islam
          </h3>
          <p className="text-gray-500 text-base lg:text-lg">
            Mern Stack Developer
            <br />
            <br />
            I am fully available for remote or spot job. Connect with me via call or email.
            <br />
            <br />
            Phone : <span className="text-accent ml-2">+4917621682798</span>
            <br />
            Email :
            <span className="text-accent ml-2">
              gazifahad3@gmail.com
            </span>
          </p>
          <div className="mt-5">
            <h5 className="text-gray-500 text-lg mb-3 uppercase tracking-wide">
              Find Me in
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
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="1500"
          className="contact-card p-5 lg:p-10 w-full lg:w-3/5"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-8 flex flex-col lg:flex-row gap-10">
              <div className="form-control w-full">
                <label className="label">Full Name</label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  className="input input-bordered w-full focus:border-secondary"
                />
                {errors?.name && (
                  <span className="error">{errors.name.message}</span>
                )}
              </div>

              <div className="form-control w-full">
                <label className="label">Contact Number</label>
                <input
                  {...register("phone")}
                  type="number"
                  className="input input-bordered w-full focus:border-secondary"
                />
              </div>
            </div>

            <div className="mb-8 form-control w-full">
              <label className="label">Email</label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                type="text"
                className="input input-bordered w-full focus:border-secondary"
              />
              {errors?.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>

            <div className="mb-8 form-control w-full">
              <label className="label">Subject</label>
              <input
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Subject is required",
                  },
                })}
                type="text"
                className="input input-bordered w-full focus:border-secondary"
              />
              {errors?.subject && (
                <span className="error">{errors.subject.message}</span>
              )}
            </div>

            <div className="mb-8 form-control">
              <label className="label">Your Message</label>
              <textarea
                {...register("message", {
                  required: {
                    value: true,
                    message: "Message is required",
                  },
                })}
                className="textarea textarea-bordered  focus:border-secondary h-36"
              ></textarea>
              {errors?.message && (
                <span className="error">{errors.message.message}</span>
              )}
            </div>

            <button
              className={`send-mail-button w-full ${
                isLoading ? "loading" : ""
              }`}
              type="submit"
            >
              {isLoading ? (
                <>
                  <svg
                    role="status"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-secondary"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span> Send Mail</span>{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
