import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useAppContext } from './context/context';
import Login from './pages/Login/Login';

function App() {

  const { isToggleSidebar, setIsToggleSidebar,
    isHideSidebarAndHeader, setIsHideSidebarAndHeader } = useAppContext();

  return (
    <BrowserRouter>


      {
        isHideSidebarAndHeader !== true && <Header />
      }
      <div className='main d-flex'>
        {
          isHideSidebarAndHeader !== true &&
          <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Sidebar />
          </div>
        }
        <div className={`content ${isHideSidebarAndHeader === true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
            <Route path="/login" exact={true} element={<Login />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;

