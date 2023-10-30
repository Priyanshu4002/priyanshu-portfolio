import './styles/app.scss';
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from './components/Work';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Toaster} from 'react-hot-toast'
import {  useState } from 'react';
import Certification from './components/Certification';


function App() {

  const [menuOpen,setMenuOpen]=useState(false);
  // const [ratio,setRatio]=useState(window.innerWidth/window.innerHeight);

  // useEffect(() => {
  //   const resizeRatio=()=>{
  //     setRatio(window.innerWidth/window.innerHeight)
  //   };
  //   window.addEventListener("resize",resizeRatio);

  //   return () => {
  //     window.removeEventListener("resize",resizeRatio);
  //   }
  // }, [ratio])
  // ratio<2?
  return  (
    <>
     <HeaderPhone menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Certification />
      <Contact />
      <Footer />
      <Toaster />
    </>
   )
  //  : (<em className="customMessage">Please Change the ratio to view</em>)
}

export default App;
