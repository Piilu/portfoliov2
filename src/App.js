import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import FirstPage from './pages/FirstPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import Footer from './pages/Footer';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
function App() {
  const landingPic = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const firstText = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5 } },
    hidden: { y: "500%", opacity: 0, scale: 0.5 }
  
  
  };
  const downUp = {
    visible: { opacity: 1, scale:1, transition: { duration: 1 } },
    hidden: { opacity: 0,scale:0.5 }
  
  
  };
  const sideIn = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { y: "30%", opacity: 0}
  
  
  
  };
  const firstControls = useAnimation();
  const aboutControls = useAnimation();
  const projectControls = useAnimation();
  const contactControls = useAnimation();

  const [firstRef, inViewFirst] = useInView();
  const [aboutRef, inViewAbout] = useInView();
  const [ProjectRef, inViewProject] = useInView();
  const [ContactRef, inViewContact] = useInView();

  useEffect(() => {
    if (inViewFirst) {
      firstControls.start("visible");
    }
    if(inViewAbout){
      aboutControls.start("visible");

    }
    if(inViewProject){
      projectControls.start("visible");
    }
    if(inViewContact){
      contactControls.start("visible");
    }
  }, [firstControls,aboutControls, inViewFirst,inViewAbout,inViewContact,inViewProject]);
  return (
    <div className='main'>
      <NavBar/>
      <FirstPage firstText={firstText} landingPic={landingPic} firstRef={firstRef} controls={firstControls }/>
      <AboutPage  downUp={downUp} aboutRef={aboutRef} controls={aboutControls}/>
      <ProjectPage sideIn={sideIn} downUp={downUp} projectRef={ProjectRef} controls={projectControls}/>
      <ContactPage sideIn={sideIn} downUp={downUp} contactRef={ContactRef} controls={contactControls}/>
      <Footer/>
    </div>
  );
}

export default App;
