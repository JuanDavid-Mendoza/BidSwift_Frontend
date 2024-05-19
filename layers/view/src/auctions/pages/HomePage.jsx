import { useEffect, useState } from "react";

import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import AuctionCard from "../components/AuctionCard";

import "./styles/HomePage.css";

import { GetMethod } from "../../shared/GetMethod";

function HomePage() {
    const [auctions, setAuctions] = useState([]);

    const getAuctions = async () => {
        const result = await new GetMethod().execute('http://localhost:3030/auctions/getAll');
        console.log(result)
        setAuctions(result.map(a => ({
            id: a.id,
            timer: a.timer,
            principalImage: a.product.images[0].url,
            name: a.product.name,
            state: a.state,
            description: a.product.description,
            startDate: a.startdate,
            price: a.product.price,
        })))
    }

    useEffect(() => {
        getAuctions();
    }, []);

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
