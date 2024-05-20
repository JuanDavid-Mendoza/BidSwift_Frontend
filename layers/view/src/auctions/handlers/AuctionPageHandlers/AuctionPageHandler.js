import { CreateMethod } from "../../../shared/CreateMethod";
import { GetMethod } from "../../../shared/GetMethod";
import { UpdateMethod } from "../../../shared/UpdateMethod";
import { AccountModel } from "../../../shared/models/AccountModel";
import { BidModel } from "../../../shared/models/BidModel";
import { PurchaseModel } from "../../../shared/models/PurchaseModel";
import { UserModel } from "../../../shared/models/UserModel";
import { ActiveAuctionList } from "../../ActiveAuctionList";
import { CreatePurchaseProxy } from "../../CreatePurchaseProxy";
import { PageHandler } from "./PageHandler";
import { format } from 'date-fns';

export class AuctionPageHandler extends PageHandler {
  async getAuctions(data) {
    const result = await new GetMethod().execute('http://localhost:3030/auctions/getAll');
    const currentAuction = result.find(a => a.id == data.itemId);
    if (currentAuction.ownerid == data.user.account.id) data.auctionButton.current.style.visibility = 'visible';

    data.setAuctions(result);
    data.setAuction(currentAuction);
  }

  async getBids(data) {
    const result = await new GetMethod().execute(`http://localhost:3030/bids/getByAuctionId?auctionId=${data.itemId}`);
    data.setBidsHistory(result.reverse());
  }

  prevImg(data) {
    data.setImgIndex(data.imgIndex === 0 ? data.auction.product.images.map(i => i.url).length - 1 : data.imgIndex - 1)
  }

  nextImg(data) {
    data.setImgIndex(data.imgIndex === data.auction.product.images.map(i => i.url).length - 1 ? 0 : data.imgIndex + 1)
  }

  async goPrevAuction(data) {
    data.auctionList = new ActiveAuctionList(data.auctions);
    data.auctionIterator = data.auctionList.createDownIterator();
    data.auctionIterator.setCurrentPosition(data.auction.id);
    const next = data.auctionIterator.getNext();
    if (next) {
      data.navigate(`/auction/${next.id}`);
      data.setAuction(data.auctions.find(a => a.id == next.id));
    }
  }

  async goNextAuction(data) {
    data.auctionList = new ActiveAuctionList(data.auctions);
    data.auctionIterator = data.auctionList.createUpIterator();
    data.auctionIterator.setCurrentPosition(data.auction.id);
    const next = data.auctionIterator.getNext();
    if (next) {
      data.navigate(`/auction/${next.id}`);
      data.setAuction(data.auctions.find(a => a.id == next.id));
    }
  }

  async doAuction(data) {
    if (data.auction.state === 'Terminada') {
      data.message.warn('La subasta ya ha terminado.');
      return null;
    }

    if (data.auction.state !== 'En proceso') {
      data.auctionButton.current.innerText = 'Terminar Subasta';

      const auctionToUpdate = { id: data.itemId, state: 'En proceso' }
      await new UpdateMethod().execute('http://localhost:3030/auctions/update', auctionToUpdate);

      data.auction.state = 'En proceso';
      data.state.current.innerHTML = `La subasta está <b>en proceso</b>.`;
    } else {
      data.message.info('La subasta ha finalizado.');

      data.userBid.current.style.visibility = 'hidden';
      data.userBidButton.current.style.visibility = 'hidden';
      if (data.bidsHistory.length) {
        const purchaseResult = this.createPurchase(data);
        data.message.info(`${data.bidsHistory[0].usernames} ${data.bidsHistory[0].userlastnames} 
        adquiere el producto por $${data.bidsHistory[0].bidvalue}`);

        if (purchaseResult) data.state.current.innerHTML = `La subasta está <b>terminada</b>.`;
      } else {
        data.message.info('Ha finalizado la subasta, no se realizaron pujas');
      }
    }
  }

  async createPurchase(data) {
    const purchase = new PurchaseModel(
      null,
      data.bidsHistory[0].bidvalue,
      format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      data.user.account.id,
      data.itemId,
    );
    const auctionToUpdate = { id: data.itemId, endDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss'), state: 'Terminada' }

    const result = await new CreatePurchaseProxy(new CreateMethod(), data.user.id).execute('http://localhost:3030/purchases/create', purchase)
    await new UpdateMethod().execute('http://localhost:3030/auctions/update', auctionToUpdate);
    return result;
  }

  async addBid(data) {
    if (data.auction.state !== 'En proceso') {
      data.message.warn('No puedes realizar pujas por el momento.');
      return null;
    }

    const userBidValue = parseInt(data.userBid.current.value)
    let isCorrect = true;

    if (!userBidValue) {
      isCorrect = false;
      data.message.warn('Ingrese un valor para pujar.');
    }
    if (isCorrect && userBidValue > data.user.account.balance) {
      isCorrect = false;
      data.message.warn('Saldo insuficiente.');
    }
    if (isCorrect && userBidValue < data.auction.price) {
      isCorrect = false;
      data.message.warn('Debes ingresar un valor superior al precio inicial del producto.');
    }
    if (isCorrect && data.bidsHistory[0] && userBidValue <= data.bidsHistory[0].bidvalue) {
      isCorrect = false;
      data.message.warn('Debes ingresar un valor superior a la última puja.');
    }

    if (isCorrect) {
      const currentBid = new BidModel(
        null,
        userBidValue,
        format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        data.user.account.id,
        data.itemId,
      );
      const accountToUpdate = new AccountModel(
        data.user.account.id,
        null,
        null,
        data.user.account.balance - currentBid.bidValue,
        null
      );
      const userToUpdate = new UserModel(data.user.id, null, null, null, null, null, null, null, accountToUpdate);

      const bidResult = await new CreateMethod().execute('http://localhost:3030/bids/create', currentBid);
      if (bidResult) {
        const result = await new GetMethod().execute(`http://localhost:3030/bids/getByAuctionId?auctionId=${data.itemId}`);
        data.setBidsHistory(result.reverse());
      }
      const userResult = await new UpdateMethod().execute('http://localhost:3030/users/update', userToUpdate);
      if (userResult) data.user.account.balance -= currentBid.bidValue;

      data.message.success('Puja exitosa.');
    }
  }
}