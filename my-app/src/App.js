import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';
import NavbarLink from './Routes/NavbarLink';
import DesktopNav from './Routes/NavbarLink';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App;
