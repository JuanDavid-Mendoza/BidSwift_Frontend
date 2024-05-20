import { useNavigate, useParams } from "react-router-dom";
import './styles/AuctionPage.css'
import { useContext, useEffect, useRef, useState } from 'react';
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import { ToastContainer, toast } from "react-toastify";
import { ActiveAuctionList } from "../ActiveAuctionList"
import { GetMethod } from "../../shared/GetMethod";
import { format } from 'date-fns';
import { GlobalContext } from "../../utils/GlobalContext";
import { CreateMethod } from "../../shared/CreateMethod";
import { UpdateMethod } from "../../shared/UpdateMethod";
import { BidModel } from "../../shared/models/BidModel";
import { AccountModel } from "../../shared/models/AccountModel";
import { UserModel } from "../../shared/models/UserModel";
import { PurchaseModel } from "../../shared/models/PurchaseModel";
import { ActiveAuction } from "../ActiveAuction";
import { CreatePurchaseProxy } from "../CreatePurchaseProxy";

function AuctionPage() {
  const [imgIndex, setImgIndex] = useState(0);
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [auctions, setAuctions] = useState(null);
  const [auction, setAuction] = useState(null);
  const [bidsHistory, setBidsHistory] = useState([]);
  const { user } = useContext(GlobalContext);

  /** @type {ActiveAuction} */
  let activeAuction;

  const getAuctions = async () => {
    const result = await new GetMethod().execute('http://localhost:3030/auctions/getAll');
    setAuctions(result);
    setAuction(result.find(a => a.id == itemId));
    // setCountdown(parseInt(auction?.timer || 0));
  }
  const getBids = async () => {
    const result = await new GetMethod().execute(`http://localhost:3030/bids/getByAuctionId?auctionId=${itemId}`);
    setBidsHistory(result.reverse());
  }

  useEffect(() => {
    getAuctions();
    getBids();

    activeAuction = new ActiveAuction(auction);
    activeAuction.addBidder(user.account);
  }, []);

  const userBid = useRef(null);
  const userBidButton = useRef(null);
  const timer = useRef(null);
  const [countdown, setCountdown] = useState(20);
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

  const prevImg = () => { setImgIndex(imgIndex === 0 ? auction.product.images.map(i => i.url).length - 1 : imgIndex - 1) }
  const nextImg = () => { setImgIndex(imgIndex === auction.product.images.map(i => i.url).length - 1 ? 0 : imgIndex + 1) }

  /** @type {AuctionList} */
  let auctionList;
  /** @type {Iterator} */
  let auctionIterator;

  const goNextAuction = async () => {
    auctionList = new ActiveAuctionList(auctions);
    auctionIterator = auctionList.createUpIterator();
    auctionIterator.setCurrentPosition(auction.id);
    const next = auctionIterator.getNext();
    if (next) {
      navigate(`/auction/${next.id}`);
      setAuction(auctions.find(a => a.id == next.id));
    }
  }

  const goPrevAuction = async () => {
    auctionList = new ActiveAuctionList(auctions);
    auctionIterator = auctionList.createDownIterator();
    auctionIterator.setCurrentPosition(auction.id);
    const next = auctionIterator.getNext();
    if (next) {
      navigate(`/auction/${next.id}`);
      setAuction(auctions.find(a => a.id == next.id));
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
      if (bidsHistory.length) {
        const purchaseResult = createPurchase();
        if(purchaseResult)  timer.current.innerText = `${bidsHistory[0].usernames} ${bidsHistory[0].userlastnames} 
                                      adquiere el producto por $${bidsHistory[0].bidvalue}`;
      } else {
        timer.current.innerText = `Ha finalizado la subasta, no se realizaron pujas`;
      }
    }
  }, [countdown, bidsHistory]);

  const createPurchase = async () => {
    const purchase = new PurchaseModel(
      null,
      bidsHistory[0].bidvalue,
      format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      user.account.id,
      itemId,
    );
    const auctionToUpdate = { id: itemId, endDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss'), state: 'Finalizada' }

    const result = await new CreatePurchaseProxy(new CreateMethod(), user.id).execute('http://localhost:3030/purchases/create', purchase)
    await new UpdateMethod().execute('http://localhost:3030/auctions/update', auctionToUpdate);
    return result;
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const addBid = async () => {
    const userBidValue = parseInt(userBid.current.value)
    let isCorrect = true;

    if (!userBidValue) {
      isCorrect = false;
      warnMessage('Ingrese un valor para pujar.');
    }
    if (isCorrect && userBidValue > user.account.balance) {
      isCorrect = false;
      warnMessage('Saldo insuficiente.');
    }
    if (isCorrect && userBidValue < auction.price) {
      isCorrect = false;
      warnMessage('Debes ingresar un valor superior al precio inicial del producto.');
    }
    if (isCorrect && bidsHistory[0] && userBidValue <= bidsHistory[0].bidvalue) {
      isCorrect = false;
      warnMessage('Debes ingresar un valor superior a la última puja.');
    }

    if (isCorrect) {
      const currentBid = new BidModel(
        null,
        userBidValue,
        format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        user.account.id,
        itemId,
      );
      const accountToUpdate = new AccountModel(
        user.account.id,
        null,
        null,
        user.account.balance - currentBid.bidValue,
        null
      );
      const userToUpdate = new UserModel(user.id, null, null, null, null, null, null, null, accountToUpdate);

      const bidResult = await new CreateMethod().execute('http://localhost:3030/bids/create', currentBid);
      if (bidResult) {
        const result = await new GetMethod().execute(`http://localhost:3030/bids/getByAuctionId?auctionId=${itemId}`);
        setBidsHistory(result.reverse());
      }
      const userResult = await new UpdateMethod().execute('http://localhost:3030/users/update', userToUpdate);
      if (userResult) user.account.balance -= currentBid.bidValue;

      activeAuction.makeBid(bidResult);

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
        <h1>{auction?.product.name}</h1>
        <p id="timer" ref={timer}>La subasta finalizará en: <b>{formatTime(countdown)}</b></p>

        <div className="imgs-container">
          <button id="left" onClick={prevImg}>{'🡰'}</button>
          <img src={auction?.product.images.map(i => i.url)[imgIndex]} alt="Reloj" />
          <button id="right" onClick={nextImg}>{'🡲'}</button>
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
            <button onClick={addBid} ref={userBidButton}>Pujar</button>
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

      <Footer />
      <ToastContainer />
    </>
  )
}

export default AuctionPage;