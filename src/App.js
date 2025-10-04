import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from './Pages/footer';
import NoPage from './Components/NoPage/NoPage';
import MainPage from './Components/MainPage';

function App() {
  return (
    <>
      <BrowserRouter >
          <Routes >
            <Route path='*' element={<NoPage/>} />
            <Route path='/' element={<MainPage />} />

         
    
          </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
