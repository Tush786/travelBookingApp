import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';
import NavbarLink from './Routes/NavbarLink';
import DesktopNav from './Routes/NavbarLink';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './Component/Homepage';
import Productpage from './Component/ProductPage';
import ProductDetail from './Component/ProductDetail';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Navbar/>
      <AllRoutes/>
      </ChakraProvider>
      {/* <Productpage/>
      <ProductDetail/> */}
    </div>
  )
}

export default App;
