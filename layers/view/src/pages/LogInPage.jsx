import React, { useRef } from "react";
import * as Components from '../components/LogInComponents';
import { user } from "../utils/fakeData";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function LogInPage() {
  const [signin, toggle] = React.useState('true');
  const navigate = useNavigate();
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const logIn = (event) => {
    event.preventDefault();
    if (userNameRef.current.value === user.userName && passwordRef.current.value === user.password) {
      navigate('/home');
    } else {
      toast.error('Usuario inexistente.', {
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
            <Components.Input type='text' placeholder='Nombre completo' />
            <Components.Input type='email' placeholder='Correo electrónico' />
            <Components.Input type='text' placeholder='Nombre de usuario' />
            <Components.Input type='password' placeholder='Contraseña' />
            <Components.Button>Registrarse</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        {/* FORMULARIO DE INISIO DE SSESIÓN */}
        <Components.SignInContainer signin={signin}>
          <Components.Form>
            <Components.Title>Inicia sesión en BidSwift</Components.Title>
            <Components.Input type='text' placeholder='Usuario' ref={userNameRef} />
            <Components.Input type='password' placeholder='Contraseña' ref={passwordRef} />
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