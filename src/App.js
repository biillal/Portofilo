import { Fragment } from 'react';
import './App.css';

import Header from './utils/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/services/Service';
import Experience from './components/Experience/Experience';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './utils/Footer';

function App() {
  return (
    <div className='body'>
      <Fragment>
        <Header />
        <Home/>
        <About/>
        <Service/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
      </Fragment>
    </div>
  );
}

export default App;
