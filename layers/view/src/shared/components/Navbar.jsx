import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import RechargeModal from "../../recharges/components/RechargeModal";

import "./styles/Navbar.css";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <nav>
            <Link to="/" className="title">
                <img src={logoImg} alt="Logo BidSwift" />
                <p>BidSwift</p>
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <div className="links">
                    <li>
                        <NavLink to="/home">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/publish-auction">
                            Publicar Subasta
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Historial Publicados</NavLink>
                    </li>
                    <li>
                        <NavLink to="/purchased-products">
                            Historial Adquiridos
                        </NavLink>
                    </li>
                    <li onClick={openModal}>
                        <a>Saldo</a>
                    </li>
                </div>
                <div className="btn-container">
                    {user == null ? (
                        <li className="btn">
                            <NavLink to="/">Iniciar Sesión</NavLink>
                        </li>
                    ) : (
                        <li className="btn">
                            <NavLink to="/">Cerrar Sesión</NavLink>
                        </li>
                    )}
                </div>
            </ul>

            <RechargeModal isOpen={isModalOpen} onClose={closeModal} />
        </nav>
    );
};

export default Navbar;
