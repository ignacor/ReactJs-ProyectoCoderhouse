import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar1 = () => {

   
    


  return (

<Navbar collapseOnSelect expand="lg" className=" bg-warning">
      <Container>
        <Navbar.Brand><Link to='/' class="navbar-brand">Pokemon Shop!</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
            <NavDropdown title="Pokemons" id="collapsible-nav-dropdown">
            <NavDropdown.Item > <Link to='Pokemones' class="nav-item nav-link active ">Todos los Pokemons</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item > <Link to='TipoAgua' class="nav-item nav-link active ">Agua</Link> </NavDropdown.Item>    
            <NavDropdown.Item > <Link to='TipoFuego' class="nav-item nav-link active ">Fuego</Link> </NavDropdown.Item>
            <NavDropdown.Item > <Link to='TipoTierra' class="nav-item nav-link active ">Tierra</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='TipoPlanta' class="nav-item nav-link active ">Planta</Link></NavDropdown.Item>
            <NavDropdown.Item > <Link to='TipoNormal' class="nav-item nav-link active ">Normal</Link></NavDropdown.Item>
            <NavDropdown.Item > <Link to='TipoBicho' class="nav-item nav-link active ">Bicho</Link> </NavDropdown.Item>
            <NavDropdown.Item > <Link to='TipoHada' class="nav-item nav-link active ">Hada</Link></NavDropdown.Item>
            <NavDropdown.Item > <Link to='TipoElectrico' class="nav-item nav-link active ">Electrico</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link className="d-flex" ><Link  to='Carrito' class="nav-item nav-link active " >Carrito</Link></Nav.Link>            
            <Nav.Link  className="d-flex"> <Link to='InicioSesion' class="nav-item nav-link active " >Inicia Sesion!</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>




   
            
           
  );
}

export default NavBar1
