import React, {useState} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IniciodeSesion = ()=> {
  
  const formStyle = {
    paddingTop : '50px',
    border:' 2px solid black',
  borderRadius:' 25px',
    backgroundColor: '#ee1515',
}
const imgStyle = {
  width :'1500px'
}
const h1Style = {
 color: 'white',
}

const [email, setEmail] = useState('');
const [pass, setPass] = useState('');

const xd = ( )=> {
  toast(`Bienvenido ${email}!`);
}

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom" style={h1Style}>
 <ToastContainer />
      <MDBRow>

        <MDBCol col='10' md='6'>
          <img  style={imgStyle} src="https://play-lh.googleusercontent.com/Xr5CkM0gU_boKbHCKSstIu5tT1F4cwzhlE8qpJJ4O0iGEHfhEgdtnNL4lpFAUJE3t7o=w600-h300-pc0xffffff-pd" class="img-fluid" alt="Sample image" />
        </MDBCol>
      
        <MDBCol col='4' md='6' style={formStyle}>

          <MDBInput  wrapperClass='mb-4' label='Usuario' id='formControlLg' type='email' size="lg" onChange={(ev)=> setEmail(ev.target.value)} />
          <MDBInput  wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg" onChange={(ev)=> setPass(ev.target.value)}   />

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recuerdame' />
            <a style={h1Style} href="!#">Olvidaste Tu Contraseña?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
          <button type="button" class="btn btn-primary btn-warning" onClick={xd} >Inicia Sesion</button>
            <p  style={h1Style} className="small fw-bold mt-2 pt-1 mb-2">No tienes una cuenta? <a href="#!" className="link-warning">Registrate</a></p>
          </div>

        </MDBCol>

      </MDBRow>

   

    </MDBContainer>
  );
}

export default IniciodeSesion;