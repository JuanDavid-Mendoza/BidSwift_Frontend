import './styles/PublishedPage.css'
import { purchasedProducts } from '../../utils/fakeData';
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import { useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../utils/GlobalContext';

import {Auctionable} from "../Auctionable"
import {Product} from "../Product"


function PublishedPage() {
    const navigate = useNavigate();
    const [auctions, setAuctions] = useState([]);
    const { setCurrentAuction } = useContext(GlobalContext);


    useEffect(() => {
        const getData = async () => {
            setAuctions(purchasedProducts.map(p => new Product(p.id, p.name, p.description, p.price, [p.principalImage])));
        };

        getData();
    }, [])

    /**
     * @function cloneAuction
     * @description Clona una subasta.
     * @param {Auctionable} auction - La subasta a clonar.
     */
    const cloneAuction = (auction) => {
        const clonedAuction = auction.clone();
        setCurrentAuction(clonedAuction);
        navigate(`/publish-auction`);
    };

    return (
        <>
            <Navbar />

            <div className="purchased-container">

                <h1>Subastas Hechas</h1>

                {auctions.map((p, i) => <div key={i} className="purchased-product">

                    <div className="img-container">
                        <img src={p.images[0]} alt={p.name} />
                    </div>

                    <div className="product-data-container">
                        <h3>Información del producto</h3>
                        <ul>
                            <li><b>Nombre:</b> {p.name}</li>
                            <li><b>Descripción:</b> {p.description}</li>
                        </ul>
                    </div>

                    <div className="auction-data-container">
                        <h3>Información de la subasta</h3>
                        <ul>
                            <li><b>Fecha de inicio de la subasta:</b> {p.startDate}</li>
                            <li><b>Precio final:</b> {p.price}</li>
                        </ul>
                    </div>

                    <div className="options-container">
                        <h3>Opciones</h3>
                        <button onClick={() => cloneAuction(p)}>Copiar Subasta</button>
                    </div>

                </div>)}

            </div>
            <Footer />
        </>
    )
}

export default PublishedPage;