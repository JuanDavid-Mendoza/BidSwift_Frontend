import { useNavigate, useParams } from "react-router-dom";
import './styles/AuctionPage.css'
import { useContext, useEffect, useRef, useState } from 'react';
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import { ToastContainer } from "react-toastify";
import { GlobalContext } from "../../utils/GlobalContext";
import { AuctionPageData } from "../handlers/AuctionPageHandlers/AuctionPageData";
import { AuctionPageHandler } from "../handlers/AuctionPageHandlers/AuctionPageHandler";
import { Message } from "../../shared/messages/Message";

function AuctionPage() {
  const [imgIndex, setImgIndex] = useState(0);
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [auctions, setAuctions] = useState(null);
  const [auction, setAuction] = useState(null);
  const [bidsHistory, setBidsHistory] = useState([]);
  const { user } = useContext(GlobalContext);
  const userBid = useRef(null);
  const userBidButton = useRef(null);
  const state = useRef(null);
  const auctionButton = useRef(null);
  /** @type {AuctionList} */
  let auctionList;
  /** @type {Iterator} */
  let auctionIterator;
  const message = new Message()
  const handler = new AuctionPageHandler();

  function getData() {
    return new AuctionPageData(
      imgIndex, setImgIndex, itemId, navigate, auctions, setAuctions, auction, setAuction, bidsHistory,
      setBidsHistory, user, userBid, userBidButton, state, auctionButton, auctionList, auctionIterator,
      message
    );
  }

  useEffect(() => {
    handler.getAuctions(getData());
    handler.getBids(getData());
  }, []);

  const doAuction = async (event) => {
    event.stopPropagation();
    handler.doAuction(getData());
  }

  return (
    <>
      <Navbar />

      <div className="nav-buttons">
        <button id="nav-left" onClick={() => handler.goPrevAuction(getData())}>{'🡰'}</button>
        <button id="nav-right" onClick={() => handler.goNextAuction(getData())}>{'🡲'}</button>
      </div>

      <div className="auction-container">
        <h1>{auction?.product.name}</h1>
        <p id="timer" ref={state}>La subasta está <b>{auction ? (auction.state).toLowerCase() : ''}</b>.</p>

        <div className="imgs-container">
          <button id="left" onClick={() => handler.prevImg(getData())}>{'🡰'}</button>
          <img src={auction?.product.images.map(i => i.url)[imgIndex]} alt="Reloj" />
          <button id="right" onClick={() => handler.nextImg(getData())}>{'🡲'}</button>
        </div>
        <div className="bidding-container">
          <div className="history-container">
            <h3>Historial de pujas</h3>
            <ul className="bids-container">
              {bidsHistory.map((b, i) => <li key={i}>{b.usernames} {b.userlastnames} realizó una puja de ${b.bidvalue}</li>)}
            </ul>
          </div>

          <div className="bid-up-container">
            <input type="number" ref={userBid} />
            <button onClick={() => handler.addBid(getData())} ref={userBidButton}>Pujar</button>
          </div>
        </div>

        <div className="detail-container">
          <h3>Detalles del producto</h3>
          <p><b>Fecha de incio de la subasta:</b> {auction?.startdate}</p>
          <p><b>Nombre:</b> {auction?.product.name}</p>
          <p><b>Descripción:</b> {auction?.product.description}</p>
          <p><b>Precio:</b> {auction?.product.price}</p>
          <p><b>Detalle:</b> {auction?.product.details}</p>
        </div>

      </div>

      <button id="start-end-auction" ref={auctionButton} onClick={doAuction}>
        {auction?.state === 'En espera' ? 'Iniciar Subasta' : 'Terminar Subasta'}
      </button>

      <Footer />
      <ToastContainer />
    </>
  )
}

export default AuctionPage;