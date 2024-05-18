import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/PublishAuctionPage.css";
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import FileInput from "../components/FileInput";

function PublishAuctionPage() {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [initialPrice, setInitialPrice] = useState(0);
    const [specification, setSpecification] = useState("");
    const [otherImages, setOtherImages] = useState([]);

    const handleSubmit = () => {
        // Validar que todos los campos estén llenos
        if (
            itemName &&
            description &&
            startDate &&
            initialPrice &&
            specification
        ) {
            toast.success("Se ha publicado la subasta exitosamente.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.warn("Por favor completa todos los campos obligatorios.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
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
                    />
                </div>

                <div className="container">
                    <h3>Imagen Principal</h3>
                    <FileInput />
                </div>

                <div className="container">
                    <h3>Descripción</h3>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="container">
                    <h3>Fecha de Inicio</h3>
                    <input
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
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
                    />
                </div>

                <div className="container">
                    <h3>Especificación</h3>
                    <input
                        type="text"
                        value={specification}
                        onChange={(e) => setSpecification(e.target.value)}
                    />
                </div>

                <div className="container">
                    <h3>Otras imágenes</h3>
                    <FileInput />
                </div>

                <button onClick={handleSubmit}>Publicar Subasta</button>
            </div>

            <Footer />
            <ToastContainer />
        </div>
    );
}

export default PublishAuctionPage;
