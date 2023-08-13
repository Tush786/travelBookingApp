import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';
import NavbarLink from './Routes/NavbarLink';
import DesktopNav from './Routes/NavbarLink';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <ChakraProvider>
      <Navbar/>
      <AllRoutes/>
      </ChakraProvider>
    </div>
  )
}

export default App;
