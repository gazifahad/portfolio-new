import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import Animation from './Animation/Animation';
import Contact from './Contact/Contact';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import { useState } from 'react';

function App() {
  const[click,setClick]=useState('');
  
  return (
    <div className="App">
      <div className="app-body d-flex  flex-md-row flex-column flex-sm-column">
        <section className='app-left-side'>
         
          <section className="header-bar">
          <Header></Header>
          </section>
        </section>
        <section className='app-right-side'>
          <Routes>
            <Route path='/' element={<Home setClick={setClick}></Home>}></Route>
            <Route path='/aboutme' element={<Animation></Animation>}></Route>
            <Route path='/contactus' element={<Contact></Contact>}></Route>
            <Route path='/projects/:projectId' element={<ProjectDetails click={click}></ProjectDetails>}></Route>
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
