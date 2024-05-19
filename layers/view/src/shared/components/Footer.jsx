import React from "react";

import "./styles/Footer.css";
import logoImg from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="group-1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <img src={logoImg} alt="Logo BidSwift" />
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>En BidSwift, nos dedicamos a ofrecer una experiencia de subasta en línea excepcional. </p>
                    <p>Con nuestra plataforma intuitiva y segura, conectamos compradores y vendedores de manera eficiente y transparente.</p>
                    <p>¡Descubre cómo BidSwift está transformando la experiencia de las subastas en línea hoy mismo!</p>
                </div>
                <div className="box">
                    <h2>COMPAÑÍA</h2>
                    <div className="company">
                        <a href="#">Nosotros</a>
                        <a href="#">Términos y Condiciones</a>
                        <a href="#">Políticas de Privacidad</a>
                    </div>
                </div>
            </div>
            <div className="group-2">
                <small>&copy; 2024 <b>BidSwift</b> - Todos los derechos reservados.</small>
            </div>
        </footer>
    );
};

export default Footer;