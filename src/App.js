import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from './Pages/footer';
import NoPage from './Components/NoPage/NoPage';
import MainPage from './Components/MainPage';
import ComponentsPage from './Components/ComponentsPage';
import KanBanUILayout from './Components/costomComponents/KanbanUi/KanBanLayout';

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

          </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
