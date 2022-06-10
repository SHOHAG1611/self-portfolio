import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';

function App() {
  return (
    <div className='bg-neutral-focus text-center mx-auto text-white'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/blog' element={<Blogs></Blogs>}>Blog</Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
