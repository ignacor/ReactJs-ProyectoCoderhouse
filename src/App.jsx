import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar1 from './componentes/Global/Navbar1'
import Home from './pages/Home'
import Pokemones from './pages/Pokemones'
import Detail from './pages/Detail'
import CartContextProvider from './Context/CartContextProvides'
import Carrito from './pages/Carrito'
import InicioSesion from './pages/InicioSesion'
import TipoAgua from './pages/TipoAgua'
import TipoBicho from './pages/TipoBicho'
import TipoElectrico from './pages/TipoElectrico'
import TipoFuego from './pages/TipoFuego'
import TipoHada from './pages/TipoHada'
import TipoNormal from './pages/TipoNormal'
import TipoPlanta from './pages/TipoPlanta'
import TipoTierra from './pages/TipoTierra'
import Footer from './componentes/Global/Footer'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfw3M1LfITZzB3yDo81WGaey_9uXnqD_w",
  authDomain: "react-proyectofinal-99f46.firebaseapp.com",
  projectId: "react-proyectofinal-99f46",
  storageBucket: "react-proyectofinal-99f46.appspot.com",
  messagingSenderId: "342811752302",
  appId: "1:342811752302:web:7a7cf7d8896e81a3fdf37f"
};
const app = initializeApp(firebaseConfig);
function App() {

  
  return (
    <>
   
<CartContextProvider>
<Router>
   <NavBar1 />
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Pokemones' element={<Pokemones/>}/>
<Route path='/detalle/:id' element={<Detail />} />
<Route path='/Carrito' element={<Carrito/>} />
<Route path='/InicioSesion' element={<InicioSesion/>} />
<Route path='/TipoAgua' element={<TipoAgua/>} />
<Route path='/TipoBicho' element={<TipoBicho/>} />
<Route path='/TipoElectrico' element={<TipoElectrico/>} />
<Route path='/TipoFuego' element={<TipoFuego/>} />
<Route path='/TipoHada' element={<TipoHada/>} />
<Route path='/TipoNormal' element={<TipoNormal/>} />
<Route path='/TipoPlanta' element={<TipoPlanta/>} />
<Route path='/TipoTierra' element={<TipoTierra/>} />
</Routes>
<Footer/>
</Router>
</CartContextProvider>

    </>
  )
}

export default App
