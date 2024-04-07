import React from "react";
import * as Components from '../components/LogInComponents';

function LogInPage() {
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      {/* FORMULARIO DE REGISTRO */}
      <Components.SignUpContainer signinIn={signIn}>
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
      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Inicia sesión en BidSwift</Components.Title>
          <Components.Input type='text' placeholder='Usuario' />
          <Components.Input type='password' placeholder='Contraseña' />
          <Components.Button>Iniciar sesión</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          {/* INICIAR SESIÓN CON CUENTA EXISTENTE */}
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>¡Hola de nuevo!</Components.Title>
            <Components.Paragraph>
              Si ya posees una cueta, puedes iniciar sesión e ingresar a nuestra plataforma
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Iniciar sesión
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          {/* CREAR NUEVA CUENTA */}
          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>¡Bienvenido a BidSwift!</Components.Title>
            <Components.Paragraph>
              Si aún no tienes tu cuenta, puedes registrarte fácilmente para iniciar en nuestro mundo de subastas en línea
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Crear cuenta
            </Components.GhostButton>
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>

    </Components.Container>
  )
}

export default LogInPage;