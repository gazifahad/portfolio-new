import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'


const ProjectDetails = ({ click }) => {
  const { projectId } = useParams();
  // console.log(click);

  const [project, setProject] = useState({});

  React.useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch("/data1.json");
      let json = await response.json();
      setProject(json);
    };

    fetchJSON();
  }, []);
  console.log(project);
  //   https://i.ibb.co/jLBy3gf/green.png
  // https://i.ibb.co/Ntbp5cs/green1.png
  // https://i.ibb.co/9ZdYh1Q/green2.png
  // https://i.ibb.co/BgKqqCC/green3.png
  // https://i.ibb.co/mrjGSWj/home.jpg
  // https://i.ibb.co/7G7PPKz/home.png
  // https://i.ibb.co/8c05MDy/home-background.jpg
  // https://i.ibb.co/bN17T9R/home1.png
  // https://i.ibb.co/5KkzR23/home2.png
  // https://i.ibb.co/jgm4wFC/home3.png
  // https://i.ibb.co/RSmhTdS/tea.png
  // https://i.ibb.co/qp1SN9f/tea1.png
  // https://i.ibb.co/CWZjZCG/tea2.png
  // https://i.ibb.co/yRcNjT1/tea3.png
  const data = [
    { "id": '1', "projectName": "Home Decor Corp", "projectBullets": "The application is designed for small manufacturers who wants to keep track of their goods and orders using a website ,Admin role is added where an admin can grant another admin and he can manage Inventories and shipments,	Users can leave reviews and order products", "technologies": "ReactJS, Tailwind Css,  DaisyUI, Firebase Auth, Netlify Hosting, ExpressJS, JWT, MongoDB", "responsiveness": "all devices", "live": "https://polite-douhua-e7e846.netlify.app/", "image1": " https://i.ibb.co/7G7PPKz/home.png", "image2": "https://i.ibb.co/bN17T9R/home1.png", "image3": "https://i.ibb.co/5KkzR23/home2.png", "image4": "https://i.ibb.co/jgm4wFC/home3.png" },
    { "id": '2', "projectName": "Green StocK Warehouse", "projectBullets": "This is a stock measuring website where Any user can make ID and use the website to keep up-to-date about their goods, Add Delete Update quantity function has been added to modify products, There is a My items option where users can see their added products", "technologies": "ReactJS, Firebase Auth,  JWT, ExpressJS, MongoDB, React Router ,Bootstrap", "responsiveness": "all devices", "live": "https://warehouse-green.netlify.app/", "image1": "https://i.ibb.co/jLBy3gf/green.png", "image2": "https://i.ibb.co/Ntbp5cs/green1.png", "image3": "https://i.ibb.co/9ZdYh1Q/green2.png", "image4": "https://i.ibb.co/BgKqqCC/green3.png" },
    { "id": '3', "projectName": "Tea Hub", "projectBullets": "It is designed for small retailers who tends to spread his small business online,	Google and Email has been Login used for verification,all the users need to be signed in for ordering a service", "technologies": "ReactJS, Firebase Auth , Firebase hosting, React Bootstrap, React Router", "responsiveness": "All devices", "live": "https://fi-assignment1.web.app/", "image1": " https://i.ibb.co/RSmhTdS/tea.png", "image2": "https://i.ibb.co/qp1SN9f/tea1.png", "image3": "https://i.ibb.co/CWZjZCG/tea2.png", "image4": "https://i.ibb.co/yRcNjT1/tea3.png" }
  ]

  const found = data.find(obj => obj.id === projectId
  );

  console.log(found);
  return (
    <div className='projectDetails-body'>

      <section className='title w-100vw text-center mt-5 mb-3'> <h2> {found.projectName}</h2></section>
      <section className='project-details '>
        <p>{found.projectBullets} </p>

        <h4>technology used</h4>
        <p>{found.technologies}</p>
      </section>
      <section className='bullets  d-flex flex-column flex-md-row flex-lg-row justify-content-around'>
        <div><b>responsiveness: {found.responsiveness}</b></div>
        <div><b>Live site: <a href={found.live} target="_blank" rel="noopener noreferrer">click here</a></b></div>
        <div><b>Catagory: website</b></div>
        </section>
      <section className='images'>


      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={found.image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={found.image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={found.image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </section>
        

    </div>
  );
};

export default ProjectDetails;