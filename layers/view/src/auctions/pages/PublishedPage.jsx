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
    const [purchases, setPurchases] = useState([]);
    const [auctions, setAuctions] = useState([]);
    const { setCurrentAuction, user } = useContext(GlobalContext);
    const accountId = user.account.id;

    const getPurchases = async () => {
        const purchasesResult = await new GetMethod().execute(`http://localhost:3030/purchases/getByAccountId?accountId=${accountId}`);
        const auctionsResult = await new GetMethod().execute(`http://localhost:3030/auctions/getByAccountId?accountId=${accountId}`);
        setPurchases(purchasesResult.map(p => ({
            name: p.productName,
            description: p.productDescription,
            startDate: p.startDate,
            price: p.productPrice,
            image: p.productImage,
            productId: p.productId,
        })));
        setAuctions(auctionsResult);
    }

    useEffect(() => {
        getPurchases();
    }, []);

    /**
     * @function cloneAuction
     * @description Clona una subasta.
     * @param {number} productId - El id del producto de la subasta a clonar.
     */
    const cloneAuction = (productId) => {
        const auction = auctions.find(a => a.productId == productId);
        const productToClone = new ProductModel(
            null,
            auction.product.name,
            auction.product.description,
            auction.product.price,
            auction.product.details,
            auction.product.images,
        );
        const auctionToClone = new AuctionModel(null, auction.startdate, null, null, null, null, null, productToClone);
        const clonedAuction = auctionToClone.clone();
        setCurrentAuction(clonedAuction);
        navigate(`/publish-auction`);
    };

    return (
        <>
            <Navbar />

            <div className="purchased-container">

                <h1>Subastas Hechas</h1>

                {purchases.map((p, i) => <div key={i} className="purchased-product">

                    <div className="img-container">
                        <img src={p.image} alt={p.name} />
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
                        <button onClick={() => cloneAuction(p.productId)}>Copiar Subasta</button>
                    </div>

                </div>)}

            </div>
            <Footer />
        </>
    )
}

export default PublishedPage;