import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [style, setStyle] = useState('d-lg-block d-md-block d-none p-2 mt-4 d-flex justify-content-evenly  vh-80')
    const burgerClickHandler = () => {
        if (style === 'd-lg-block d-md-block d-none p-2 mt-4 d-flex justify-content-evenly  vh-80') {
            setStyle('d-flex justify-content-between me-4 d-lg-block d-md-block p-2 mt-4 d-flex justify-content-evenly  vh-80')
        }
        else {
            setStyle('d-lg-block d-md-block d-none p-2 mt-4 d-flex justify-content-evenly  vh-80')
        }
       
    }
    return (
        <div className='header-body d-flex-column '>
            <section className='my-dp-image d-md-block d-lg-block d-none  '>
                <img className='my-image' src={require("../assets/images/Fahad.jpg")} alt="me" />
                <div className="image-text">
                    <h3 className='text-on-image'> Saiful Islam</h3>
                </div>
            </section>
            <section className='main-menu mh-80'>
                <section className='hamburger-icon d-lg-none d-md-none d-sm-block '>
                    <button onClick={burgerClickHandler}>
                        <i className="bi bi-list menu-icon " ></i>
                    </button>
                </section>

                <section className='menu-items'>
                    <ul className={style} >
                        <li>

                            <Link to={'/'}><i className="bi bi-house-door"></i> HOME</Link></li>
                            <hr></hr>
                        <li><Link to={'/aboutme'}><i className="bi bi-file-earmark-person"></i> ABOUT</Link></li>
                        <hr></hr>
                        <li><a href="https://pdfhost.io/v/pWHqW8PEv_resume_for_web_dev" target="_blank" rel='noreferrer'><i className="bi bi-file"></i> RESUME</a></li>
                        <hr></hr>
                        <li><Link to={'/contactus'}><i className="bi bi-person-lines-fill"></i> CONTACT</Link></li>

                    </ul>
                </section>
            </section>
        </div>
    );
};

export default Header;