import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './Components/NoPage/NoPage';
import ComponentsPage from './Components/ComponentsPage';
import LayoutDashboard from './Components/AiInterface/LayoutAi';
import NewVersionPage from './pages/NewVersionPage';
import NordenVersion, { NordenAboutMePage, NordenHomePage, NordenProjectPage, NordenWorkPage, NorderLetsTalkPage } from './pages/NordenVersion';
import { Divide } from 'phosphor-react';
import NordenBlogMain from './pages/NordenTheme/components/blogs/NordenBlogMain';

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
              <Route path='work' element={<NordenWorkPage />} />
              <Route path='work/:projectId' element={ <NordenProjectPage />} />
              <Route path='contact' element={<NorderLetsTalkPage />} />
              <Route path='blog' element={<NordenBlogMain />} />
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
