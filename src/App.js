import './App.css';
import {} from '@mui/material'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
