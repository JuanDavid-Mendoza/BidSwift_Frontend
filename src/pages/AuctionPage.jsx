import { useParams } from "react-router-dom";
import './styles/AuctionPage.css'
import { auctions, bids } from '../utils/fakeData';
import { useState } from 'react';

function AuctionPage() {
  const [imgIndex, setImgIndex] = useState(0);
  const { itemId } = useParams();
  const imgs = auctions[itemId].images;
  const bidsHistory = bids.filter((b) => b.auctionId == itemId);

  const prevImg = () => { setImgIndex(imgIndex === 0 ? imgs.length - 1 : imgIndex - 1) }
  const nextImg = () => { setImgIndex(imgIndex === imgs.length - 1 ? 0 : imgIndex + 1) }

  return (
    <div className="auction-container">

      <h1>{auctions[itemId].name}</h1>

      <div className="imgs-container">
        <button id="left" onClick={prevImg}>{'🡰'}</button>
        <img src={imgs[imgIndex]} alt="Reloj" />
        <button id="right" onClick={nextImg}>{'🡲'}</button>
      </div>

      <div className="bidding-container">
        <div className="history-container">
          <h3>Historial de pujas</h3>
          <ul className="bids-container">
            {bidsHistory.map((b, i) => <li key={i}>{b.userName} realizó una puja de ${b.value}</li>)}
          </ul>
        </div>

        <div className="bid-up-container">
          <input type="number" />
          <button>Pujar</button>
        </div>
      </div>

      <div className="detail-container">
        <h3>Detalles del producto</h3>
        <p><b>Fecha de incio de la subasta:</b> {auctions[itemId].startDate}</p>
        <p><b>Nombre:</b> {auctions[itemId].name}</p>
        <p><b>Descripción:</b> {auctions[itemId].description}</p>
        <p><b>Precio:</b> {auctions[itemId].price}</p>
        <p><b>Detalle:</b> {auctions[itemId].details}</p>
      </div>

    </div>
  )
}

export default AuctionPage;