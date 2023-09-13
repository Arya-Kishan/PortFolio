import './App.css';
import { } from '@mui/material'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
import Snack from './components/Snack';
import AppContext from './AppContext';

function App() {
  return (
    <>
      <AppContext>
        <Navbar />
        <Homepage />
        <Snack />
        <About />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </AppContext>
    </>
  );
}

export default App;
