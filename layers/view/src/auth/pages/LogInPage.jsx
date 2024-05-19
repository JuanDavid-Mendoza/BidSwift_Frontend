import React, { useRef, useContext } from "react";
import * as Components from '../components/LogInComponents';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import { GlobalContext } from '../../utils/GlobalContext';
import VerificationLog from "../VerificationLog";
import VerificationSign from "../VerificationSign";
import LogIn from "../LogIn";
import SignUp from "../SignUp"; 

function LogInPage() {
  const [signin, toggle] = React.useState('true');
  const navigate = useNavigate();
  const { setUser } = useContext(GlobalContext);
  const emailLogRef = useRef(null);
  const passwordLogRef = useRef(null);
  const namesRef = useRef(null);
  const lastNamesRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const birthDateRef = useRef(null);
  const identificationRef = useRef(null);
  const addressRef = useRef(null);

  const logIn = async (event) => {
    event.preventDefault();

    const logreg = new VerificationLog();
    logreg.setNext(new LogIn());
    const user = await logreg.auth(emailLogRef.current.value, passwordLogRef.current.value);

    if (user) {
      setUser(user);
      navigate('/landing');
    } else {
      toast.error('Datos incorrectos o usuario inexistente.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const register = async (event) => {
    event.preventDefault();

    const logreg = new VerificationSign();
    logreg.setNext(new SignUp(
      namesRef.current.value,
      lastNamesRef.current.value,
      birthDateRef.current.value,
      identificationRef.current.value,
      addressRef.current.value,
    ));

    const user = await logreg.auth(emailRef.current.value, passwordRef.current.value);

    if (user) {
      setUser(user);
      navigate('/landing');
    } else {
      toast.error('Usuario ya existente.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <Components.Container>
        {/* FORMULARIO DE REGISTRO */}
        <Components.SignUpContainer signin={signin}>
          <Components.Form>
            <Components.Title>Registrate en BidSwift</Components.Title>
            <Components.Input type='text' placeholder='Nombres' ref={namesRef} required/>
            <Components.Input type='text' placeholder='Apellidos' ref={lastNamesRef} required/>
            <Components.DateInput type='date' placeholder='Fecha de nacimiento' ref={birthDateRef} required/>
            <Components.Input type='number' placeholder='Número de identificación' ref={identificationRef} required/>
            <Components.Input type='email' placeholder='Correo electrónico' ref={emailRef} required/>
            <Components.Input type='password' placeholder='Contraseña' ref={passwordRef} required/>
            <Components.Input type='text' placeholder='Dirección de residencia' ref={addressRef} required/>
            <Components.Button onClick={register}>Registrarse</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        {/* FORMULARIO DE INISIO DE SSESIÓN */}
        <Components.SignInContainer signin={signin}>
          <Components.Form>
            <Components.Title>Inicia sesión en BidSwift</Components.Title>
            <Components.Input type='email' placeholder='Dirección de correo' ref={emailLogRef} required/>
            <Components.Input type='password' placeholder='Contraseña' ref={passwordLogRef} required/>
            <Components.Button onClick={logIn}>Iniciar sesión</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signin={signin}>
          <Components.Overlay signin={signin}>
            {/* INICIAR SESIÓN CON CUENTA EXISTENTE */}
            <Components.LeftOverlayPanel signin={signin}>
              <Components.Title>¡Hola de nuevo!</Components.Title>
              <Components.Paragraph>
                Si ya posees una cueta, puedes iniciar sesión e ingresar a nuestra plataforma
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle('true')}>
                Iniciar sesión
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            {/* CREAR NUEVA CUENTA */}
            <Components.RightOverlayPanel signin={signin}>
              <Components.Title>¡Bienvenido a BidSwift!</Components.Title>
              <Components.Paragraph>
                Si aún no tienes tu cuenta, puedes registrarte fácilmente para iniciar en nuestro mundo de subastas en línea
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle('false')}>
                Crear cuenta
              </Components.GhostButton>
            </Components.RightOverlayPanel>

          </Components.Overlay>
        </Components.OverlayContainer>

      </Components.Container>
      <ToastContainer />
    </>
  )
}

export default LogInPage;