import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './Components/NoPage/NoPage';
import ComponentsPage from './Components/ComponentsPage';
import LayoutDashboard from './Components/AiInterface/LayoutAi';
import NewVersionPage from './pages/NewVersionPage';
import NordenVersion, { NordenAboutMePage, NordenHomePage } from './pages/NordenVersion';

function App() {
  return (
    <>
      <BrowserRouter >
          <Routes >
            <Route path='*' element={<NoPage/>} />
            <Route path="/" element={<NordenVersion />}>
              {/* This renders when path is exactly "/" */}
              <Route index element={<NordenHomePage />} />
              
              {/* This renders when path is "/about" */}
              <Route path="about" element={<NordenAboutMePage />} />
            </Route>


            <Route path='/new' element={<NewVersionPage />} />
            <Route path="/component" element={<ComponentsPage />}>

            </Route>
            <Route path='/ai' element={<LayoutDashboard />} />

          </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
