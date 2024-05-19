import './styles/PublishedPage.css'
// import { purchasedProducts } from '../../utils/fakeData';
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import { useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../utils/GlobalContext';

// import {Auctionable} from "../Auctionable"
// import {Product} from "../Product"
import { GetMethod } from '../../shared/GetMethod';
import { AuctionModel } from '../../shared/models/AuctionModel';
import { ProductModel } from '../../shared/models/ProductModel';


function PublishedPage() {
    const navigate = useNavigate();
    const [auctions, setAuctions] = useState([]);
    const { setCurrentAuction, user } = useContext(GlobalContext);
    const accountId = user.account.id;

    const getPurchases = async () => {
        const auctionsResult = await new GetMethod().execute(`http://localhost:3030/auctions/getByAccountId?accountId=${accountId}`);
        setAuctions(auctionsResult.map(a => ({
            name: a.product.name,
            description: a.product.description,
            details: a.product.details,
            startDate: a.startdate,
            price: a.product.price,
            image: a.product.images[0].url,
            images: a.product.images.map(i => i.url),
        })));
    }

    useEffect(() => {
        getPurchases();
    }, []);

    /**
     * @function cloneAuction
     * @description Clona una subasta.
     * @param {AuctionModel} auction - Subasta a clonar.
     */
    const cloneAuction = (auction) => {
        const productToClone = new ProductModel(
            null,
            auction.name,
            auction.description,
            auction.price,
            auction.details,
            auction.images,
        );
        const auctionToClone = new AuctionModel(null, auction.startDate, null, null, null, null, null, productToClone);
        const clonedAuction = auctionToClone.clone();
        setCurrentAuction(clonedAuction);
        navigate(`/publish-auction`);
    };

    return (
        <>
            <Navbar />

            <div className="purchased-container">

                <h1>Subastas Hechas</h1>

                {auctions.map((a, i) => <div key={i} className="purchased-product">

                    <div className="img-container">
                        <img src={a.image} alt={a.name} />
                    </div>

                    <div className="product-data-container">
                      <h3>Información del producto</h3>
                        <ul>
                            <li><b>Nombre:</b> {a.name}</li>
                            <li><b>Descripción:</b> {a.description}</li>
                        </ul>
                    </div>

                    <div className="auction-data-container">
                        <h3>Información de la subasta</h3>
                        <ul>
                            <li><b>Fecha de inicio de la subasta:</b> {a.startDate}</li>
                            <li><b>Precio final:</b> {a.price}</li>
                        </ul>
                    </div>

                    <div className="options-container">
                        <h3>Opciones</h3>
                        <button onClick={() => cloneAuction(a)}>Copiar Subasta</button>
                    </div>

                </div>)}

            </div>
            <Footer />
        </>
    )
}

export default PublishedPage;