import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar1 from './componentes/Navbar1'
import Home from './pages/Home'
import Comics from './pages/Comics'
import Contact from './pages/contact'

function App() {

  
  return (
    <>

<Router>
   <NavBar1 />
<Routes>
<Route path='/home' element={<Home/>}/>
  <Route path='/comics' element={<Comics/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>

</Router>

   
    </>
  )
}

export default App
