import { useNavigate, useParams } from "react-router-dom";
import './styles/AuctionPage.css'
import { auctions, bids, user } from '../../utils/fakeData';
import { useEffect, useRef, useState } from 'react';
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import { ToastContainer, toast } from "react-toastify";

import { AuctionList } from "../AuctionList";
import {ActiveAuctionList} from "../ActiveAuctionList"
import { Iterator } from "../Iterator";

function AuctionPage() {
  const [imgIndex, setImgIndex] = useState(0);
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [bidsHistory, setBidsHistory] = useState(bids.filter((b) => b.auctionId == itemId).reverse());
  const auction = auctions.find((a) => a.id == itemId);
  const userBid = useRef(null);
  const userBidButton = useRef(null);
  const timer = useRef(null);
  const [countdown, setCountdown] = useState(auction.timer);
  const warnMessage = (message) => {
    toast.warn(message, {
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

  const prevImg = () => { setImgIndex(imgIndex === 0 ? auction.images.length - 1 : imgIndex - 1) }
  const nextImg = () => { setImgIndex(imgIndex === auction.images.length - 1 ? 0 : imgIndex + 1) }

  /** @type {AuctionList} */
  let auctionList;
  /** @type {Iterator} */
  let auctionterator;

  const goNextAuction = async () => {
    auctionList = new ActiveAuctionList();
    auctionterator = auctionList.createUpIterator();
    auctionterator.setCurrentPosition(auction.id);
    if (auctionterator.hasMore()){
      navigate(`/auction/${auctionterator.getNext().id}`);
    }
  }

  const goPrevAuction = async () => {
    auctionList = new ActiveAuctionList();
    auctionterator = auctionList.createDownIterator();
    auctionterator.setCurrentPosition(auction.id);
    if (auctionterator.hasMore()){
      navigate(`/auction/${auctionterator.getNext().id}`);
    }
  }

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      toast.info('La subasta ha finalizado.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      userBid.current.style.visibility = 'hidden';
      userBidButton.current.style.visibility = 'hidden';
      timer.current.innerText = bidsHistory.length
        ? `${bidsHistory[0].userName} adquiere el producto por $${bidsHistory[0].value}`
        : `Ha finalizado la subasta, no se realizaron pujas`
    }
  }, [countdown, bidsHistory]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const addBid = () => {
    const userBidValue = parseInt(userBid.current.value)
    let isCorrect = true;

    if (!userBidValue) {
      isCorrect = false;
      warnMessage('Ingrese un valor para pujar.');
    }
    if (isCorrect && userBidValue > user.balance) {
      isCorrect = false;
      warnMessage('Saldo insuficiente.');
    }
    if (isCorrect && userBidValue < auction.price) {
      isCorrect = false;
      warnMessage('Debes ingresar un valor superior al precio inicial del producto.');
    }
    if (isCorrect && bidsHistory[0] && userBidValue <= bidsHistory[0].value) {
      isCorrect = false;
      warnMessage('Debes ingresar un valor superior a la última puja.');
    }

    if (isCorrect) {
      const currentBid = {
        id: bidsHistory[0] ? bidsHistory[0].id + 1 : 1,
        auctionId: itemId,
        value: userBidValue,
        userName: user.userName
      };
      setBidsHistory([currentBid, ...bidsHistory]);
      user.balance -= currentBid.value;
      toast.success('Puja exitosa.', {
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
  }

  return (
    <>
      <Navbar />

      <div className="nav-buttons">
        <button id="nav-left" onClick={goPrevAuction}>{'🡰'}</button>
        <button id="nav-right" onClick={goNextAuction}>{'🡲'}</button>
      </div>

      <div className="auction-container">
        <h1>{auction.name}</h1>
        <p id="timer" ref={timer}>La subasta finalizará en: <b>{formatTime(countdown)}</b></p>

        <div className="imgs-container">
          <button id="left" onClick={prevImg}>{'🡰'}</button>
          <img src={auction.images[imgIndex]} alt="Reloj" />
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
            <input type="number" ref={userBid} />
            <button onClick={addBid} ref={userBidButton}>Pujar</button>
          </div>
        </div>

        <div className="detail-container">
          <h3>Detalles del producto</h3>
          <p><b>Fecha de incio de la subasta:</b> {auction.startDate}</p>
          <p><b>Nombre:</b> {auction.name}</p>
          <p><b>Descripción:</b> {auction.description}</p>
          <p><b>Precio:</b> {auction.price}</p>
          <p><b>Detalle:</b> {auction.details}</p>
        </div>

      </div>

      <Footer />
      <ToastContainer />
    </>
  )
}

export default AuctionPage;