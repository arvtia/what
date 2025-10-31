import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './Components/NoPage/NoPage';
import MainPage from './Components/MainPage';
import ComponentsPage from './Components/ComponentsPage';
import KanBanUILayout from './Components/costomComponents/KanbanUi/KanBanLayout';
import { CardsShowCase } from './Components/costomComponents/cards/CardsShowCase';
import LayoutDashboard from './Components/AiInterface/LayoutAi';

function App() {
  return (
    <>
      <BrowserRouter >
          <Routes >
            <Route path='*' element={<NoPage/>} />
            <Route path='/' element={<MainPage />} />
          
            <Route path="/component" element={<ComponentsPage />}>
              <Route index element={<div>Welcome to Components</div>} />
              <Route path="kanban" element={<KanBanUILayout />} />
              <Route path="installation" element={<div>Installation</div>} />
              <Route path="settings" element={<div>Settings</div>} />
            </Route>
            <Route path='/cards' element={<CardsShowCase />} />
            <Route path='/ai' element={<LayoutDashboard />} />

          </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
