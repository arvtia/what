import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './Components/NoPage/NoPage';
import MainPage from './Components/MainPage';
import ComponentsPage from './Components/ComponentsPage';
import LayoutDashboard from './Components/AiInterface/LayoutAi';
import NewVersionPage from './pages/NewVersionPage';

function App() {
  return (
    <>
      <BrowserRouter >
          <Routes >
            <Route path='*' element={<NoPage/>} />
            <Route path='/' element={<MainPage />} />
            <Route path='/new' element={<NewVersionPage />} />

          
            <Route path="/component" element={<ComponentsPage />}>

            </Route>
            {/* <Route path='/cards' element={<CardsShowCase />} /> */}
            <Route path='/ai' element={<LayoutDashboard />} />

          </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
