import React, { useState } from "react";

import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import AuctionCard from "../components/AuctionCard";

import "./styles/HomePage.css";

import { auctions as auctionsData } from "../../utils/fakeData";

function HomePage() {
    const [auctions, setAuctions] = useState(auctionsData);

    return (
        <div>
            <Navbar />

            <div className="tittle">
              <h1>Explora Nuestras Subastas</h1>
            </div>

            <div className="auctions">
                {auctions.map((auction, index) => {
                    return <AuctionCard auction={auction} key={index} />;
                })}
            </div>

            <Footer />
        </div>
    );
}

export default HomePage;
