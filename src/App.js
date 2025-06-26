import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useAppContext } from './context/context';

function App() {

  const { isToggleSidebar, setIsToggleSidebar } = useAppContext();

  return (
    <BrowserRouter>

      <Header />
      <div className='main d-flex'>
        <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
          <Sidebar />
        </div>
        <div className={`content ${isToggleSidebar === true ? 'toggle' : ''}`}>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;

