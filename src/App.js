import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar'
// import Footer from './Pages/footer';
import NoPage from './Components/NoPage/NoPage';
import AboutMe from './Pages/Aboutme';
import ProjectPage from './Pages/Project';
import ContactMe from './Pages/contactMe';
import HomePage from './Components/HomeMainPage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar/>
          <Routes >
            <Route path='*' element={<NoPage/>} />
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutMe/>} />
            <Route path='/project' element={<ProjectPage/>} />
            <Route path='/contact' element={<ContactMe/>} />
            {/* <Route path='/blogs' element={</>} /> */}
          </Routes>
        {/* <Footer/>  */}
      </BrowserRouter>
    </>
  );
}


export default App;
