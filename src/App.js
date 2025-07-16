import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Navbar from './Pages/Navbar'
import Footer from './Pages/footer';
import NoPage from './Components/NoPage/NoPage';
import AboutMe from './Pages/Aboutme';

function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar/>
          <Routes >
            <Route path='*' element={<NoPage/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<AboutMe/>} />
            <Route path='/project' element={<Project/>} />
            <Route path='/project' element={<Project/>} />
            <Route path='/project' element={<Project/>} />
          </Routes>
        <Footer/> 
      </BrowserRouter>
    </>
  );
}


export default App;
