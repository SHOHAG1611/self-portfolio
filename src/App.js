import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
// import SkillPersent from './components/SkillPersent';
import Reviews from './components/Reviews';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className='bg-neutral-focus text-white'>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      {/* <SkillPersent></SkillPersent> */}
      <Reviews></Reviews>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
