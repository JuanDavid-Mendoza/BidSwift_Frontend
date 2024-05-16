import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "./styles/LandingPage.css";
import auctionImg from "../assets/auction.jpg"

function LandingPage() {
  const navigate = useNavigate();

    return (
        <div>
            <Navbar />

            <div className="landing">
                <div class="mid_container">
                    <div class="content">
                        <h1>
                          Bienvenido a BidSwift: Tu Destino de Subastas en Línea
                        </h1>
                        <p>
                        Explora un mundo de oportunidades en BidSwift, donde las mejores ofertas esperan por ti.
                        Sumérgete en emocionantes subastas en línea y encuentra artículos exclusivos que se ajusten a tus gustos y necesidades. ¡Únete ahora y comienza a pujar!
                        </p>
                        <button onClick={()=>navigate('/home')} class="btn">Explorar Subastas</button>
                    </div>
                    <div class="image">
                        <img src={auctionImg} alt="Auction" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;
