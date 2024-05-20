import { Auction } from "./Auction";
import { BidModel } from "../shared/models/BidModel";
import { AuctionParticipant } from "./AuctionParticipant";

/**
 * @class ActiveAuction
 * @description Clase que representa una subasta activa.
 */
export class ActiveAuction {
    /**
     * @constructor
     * @param {number} initialPrice - El precio inicial de la subasta.
     * @param {Auction} auction - La subasta asociada.
     */
    constructor(auction) {
        /** @type {AuctionParticipant[]} */
        this.bidders = [];
        this.currentPrice = auction?.product.price;
        this.initialPrice = auction?.product.price;
        this.auction = auction;
    }

    /**
     * @method addBidder
     * @description Agrega un nuevo postor a la subasta.
     * @param {AuctionParticipant} bidder - El postor a agregar.
     */
    addBidder(bidder) {
        this.bidders.push(bidder);
    }

    /**
     * @method removeBidder
     * @description Elimina un postor de la subasta.
     * @param {AuctionParticipant} bidder - El postor a eliminar.
     */
    removeBidder(bidder) {
        this.bidders = this.bidders.filter(b => b !== bidder);
    }

    /**
     * @method notifyBidding
     * @description Notifica a todos los postores sobre una nueva puja.
     */
    #notifyBidding() {
        this.bidders.forEach(bidder => {
            bidder.updateAuctionStatus(this);
        });
    }

    /**
     * @method makeBid
     * @description Realiza una nueva puja.
     * @param {BidModel} bid - La nueva puja.
     * @returns {boolean} - True si la puja fue aceptada, false en caso contrario.
     */
    makeBid(bid) {
        if (bid.bidValue > this.currentPrice) {
            this.currentPrice = bid.bidValue;
            this.#notifyBidding();
            return true;
        }
        return false;
    }
}