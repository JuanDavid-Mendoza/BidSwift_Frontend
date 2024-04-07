import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles/AuctionCard.css"

function AuctionCard({ auction }) {
    const [countdown, setCountdown] = useState(auction.timer);
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [countdown]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}m ${remainingSeconds}s`;
    };

    return (
        <div className="card">
            <figure>
                <img
                    src={auction.principalImage}
                    alt={auction.name}
                />
            </figure>
            <section className="details">
                <div className="min-details">
                    <h1>
                        {auction.name}
                    </h1>
                    <h4 className="price">{auction.state}</h4>
                </div>

                <div className="all-details">
                    <p>{auction.description}</p>
                    <p>La subasta inicia el <b>{auction.startDate}</b></p>
                    <p>La subasta finalizará en: <b>{formatTime(countdown)}</b></p>
                    <p>Precio actual: <b>${auction.price}</b></p>
                </div>
                <a className="btn" onClick={() => navigate(`/auction/${auction.id}`)}>
                    Ver
                </a>
            </section>
        </div>
    );
}

export default AuctionCard;