import React from 'react'
import './index.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Social from './Components/Social';
import Projects from './Components/projects';
import About from './Components/about';
import Skills from './Components/Skills';
import Contact from "./Components/Contact";
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills />
    <Projects />
    <Contact />
    <Footer/>
 
  


    <Social/>
    </>
  );
}

export default App;
