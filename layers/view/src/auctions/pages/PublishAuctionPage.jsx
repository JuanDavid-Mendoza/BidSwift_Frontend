import { useState, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { GlobalContext } from '../../utils/GlobalContext';
// import {Auctionable} from "../Auctionable"
// import {Product} from "../Product"

import "./styles/PublishAuctionPage.css";
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import { CreateMethod } from "../../shared/CreateMethod";
import { AuctionModel } from "../../shared/models/AuctionModel";
import { ProductModel } from "../../shared/models/ProductModel";
import { useNavigate } from "react-router-dom";
import { Message } from "../../shared/messages/Message";

function PublishAuctionPage() {
    const navigate = useNavigate();
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [initialPrice, setInitialPrice] = useState(0);
    const [specification, setSpecification] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const [images, setImages] = useState([]);
    const { currentAuction, user } = useContext(GlobalContext);
    const message = new Message();

    useEffect(() => {
        if (currentAuction) {
            setItemName(currentAuction.product.name);
            setDescription(currentAuction.product.description);
            setStartDate(currentAuction.startdate);
            setInitialPrice(currentAuction.product.price);
            setSpecification(currentAuction.product.details);
            setImages(currentAuction.product.images);
        }
    }, [currentAuction]);

    const addImage = () => {
        setImages([...images, urlImage])
        setUrlImage("")
    }

    const handleSubmit = async () => {
        // Validar que todos los campos estén llenos
        if (
            itemName &&
            description &&
            startDate &&
            initialPrice &&
            specification &&
            images.length
        ) {
            const product = new ProductModel(
                null,
                itemName,
                description,
                initialPrice,
                specification,
                images
            )

            const auction = new AuctionModel(
                null,
                startDate,
                null,
                300,
                'En espera',
                null,
                user.account.id,
                product
            );

            console.log(auction)
            const result = await new CreateMethod().execute('http://localhost:3030/auctions/create', auction);
            console.log(result);

            if (result) {
                message.success('Se ha publicado la subasta exitosamente.')
                setTimeout(() => {
                    navigate('/home')
                }, 2000);
            }
        } else {
            message.warn('Por favor completa todos los campos obligatorios.');
        }
    };

    return (
        <div>
            <Navbar />

            <div className="tittle">
                <h2>Publica una Subasta</h2>
            </div>

            <div className="form">
                <div className="container">
                    <h3>Nombre de Artículo</h3>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>

                <div className="container">
                    <h3>Imágenes</h3>
                    <input
                        type="text"
                        value={urlImage}
                        onChange={(e) => setUrlImage(e.target.value)}
                    />
                    <button onClick={addImage}>Agregar</button>
                </div>

                <div className="container">
                    <h3>Descripción</h3>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div className="container">
                    <h3>Fecha de Inicio</h3>
                    <input
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>

                <div className="container">
                    <h3>Precio Inicial</h3>
                    <h4>$</h4>
                    <input
                        type="number"
                        min={0}
                        value={initialPrice}
                        onChange={(e) => setInitialPrice(e.target.value)}
                        required
                    />
                </div>

                <div className="container">
                    <h3>Especificación</h3>
                    <textarea
                        type="text"
                        value={specification}
                        onChange={(e) => setSpecification(e.target.value)}
                        required
                    />
                </div>

                <button onClick={handleSubmit}>Publicar Subasta</button>
            </div>

            <Footer />
            <ToastContainer />
        </div>
    );
}

export default PublishAuctionPage;
