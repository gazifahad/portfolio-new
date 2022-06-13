import React from 'react';
import Animation from '../Animation/Animation';
import './Home.css'
import { Link } from 'react-router-dom';


const Home = ({setClick}) => {
   
    return (
        <div>
            <div className="home-full">
               
                <section className='body-background'>
                
                <img className='img-fluid vh-100 vw-100 body-image' src={require("../assets/images/home.jpg") }alt="background" />
                <section className='body-text d-md-block '>
                    <h2>I am <span> Saiful Islam </span></h2>
                    <Animation></Animation>
                    <br />
                    
                    <div className='container project-short mt-2'>
                    <h3 >Projects done by me</h3>
                        <div className="row">
                            <div className="col">
                                <h6>Home Decor</h6>
                                
                                <small>full stack</small>
                                <br />
                                <small>resppnsive</small>
                                <br />
                                
                                <button onClick={()=>setClick('1')}><Link to={'/projects/1'}>details</Link></button>
                            </div>
                            <div className="col">
                                <h6> Green Stock</h6>
                                <small>full stack</small>
                                <br />
                                <small>Responsive</small>
                                <br />
                                <button onClick={()=>setClick('2')}><Link to={'/projects/2'}>details</Link></button>
                            </div>
                            <div className="col">
                                <h6>Tea-Hub</h6>
                                <small>front-end</small>
                                <br />
                                <small>resposive</small>
                                <br />
                                <button onClick={()=>setClick('3')}><Link to={'/projects/3'}>details</Link></button>
                                <br />
                            </div>
                        </div>

                    </div>
                </section>
                
                </section>
               
            </div>

        </div>
    );
};

export default Home;