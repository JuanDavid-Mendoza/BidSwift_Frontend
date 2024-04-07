import React from "react";
import "./styles/ItemCard.css"

function ItemCard() {
    return (
        <div className="card">
            <figure>
                <img
                    src="https://static2.cilory.com/189111-thickbox_default/no-logo-royal-blue-full-sleeves-henley-t-shirt.jpg"
                    alt="t-shirt"
                />
            </figure>
            <section className="details">
                <div className="min-details">
                    <h1>
                        Anillo con diamante
                    </h1>
                    <h1 className="price">En espera</h1>
                </div>

                <div className="options">
                    <h4>Anillo con diamante incrustado, una joya deslumbrante para una ocasión especial.</h4>
                    <h4>La subasta inicia el 12/04/2020</h4>
                    <h4>La subasta finalizará en: 23s</h4>
                    <h4>Precio actual: $2000000000000</h4>
                </div>
                <a href="#" className="btn">
                    Ver
                </a>
            </section>
        </div>
    );
}

export default ItemCard;
