import { AuctionList } from "./AuctionList";
import { Auction } from "./Auction";
import { Iterator } from "./Iterator";
import { UpIterator } from "./UpIterator";
import { DownIterator } from "./DownIterator";

/**
 * @class ActiveAuctionList
 * @implements {AuctionList}
 * @description Implementación de una lista de subastas activas.
 */
export class ActiveAuctionList extends AuctionList {
    /**
     * @constructor
     * @description Crea una instancia de ActiveAuctionList.
     */
    constructor(auctions) {
        super();
        this.auctions = auctions;
    }

    /**
     * @method createUpIterator
     * @description Crea un iterador ascendente para la lista de subastas activas.
     * @returns {Iterator} - Un iterador ascendente para la lista de subastas activas.
     */
    createUpIterator() {
        return new UpIterator(this);
    }

    /**
     * @method createDownIterator
     * @description Crea un iterador descendente para la lista de subastas activas.
     * @returns {Iterator} - Un iterador descendente para la lista de subastas activas.
     */
    createDownIterator() {
        return new DownIterator(this);
    }

    /**
     * @method getAuctions
     * @description Devuelve la lista de subastas activas.
     * @returns {Array<Auction>} - La lista de subastas activas.
     */
    getAuctions() {
        return this.auctions;
    }
}
