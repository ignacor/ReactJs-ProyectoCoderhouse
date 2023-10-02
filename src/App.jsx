import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar1 from './componentes/Navbar1'
import Home from './pages/Home'
import Comics from './pages/Comics'
import Detalle from './pages/Detalle'
import Electronica from './pages/Electronica'
function App() {

  
  return (
    <>

<Router>
   <NavBar1 />
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/comics' element={<Comics/>}/>
<Route path='/electronica' element={<Electronica/>}/>
<Route path='/detalle/:id' element={<Detalle/>}/>
</Routes>

</Router>

   
    </>
  )
}

export default App
