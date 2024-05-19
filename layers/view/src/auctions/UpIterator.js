import { Auction } from "./Auction";
import { AuctionList } from "./AuctionList";
import { Iterator } from "./Iterator";

/**
 * @class UpIterator
 * @implements {Iterator}
 * @description Implementación del iterador ascendente.
 */
export class UpIterator extends Iterator {
    /**
     * @constructor
     * @param {AuctionList} auctionList - La lista de subastas sobre la que se va a iterar hacia adelante.
     */
    constructor(auctionList) {
        super();
        this.auctionList = auctionList;
        this.currentPosition = 0;
    }

    /**
     * @method hasMore
     * @description Comprueba si hay más elementos en la colección.
     * @returns {boolean} - Devuelve true si hay más elementos, de lo contrario false.
     */
    hasMore() {
        return this.currentPosition < this.auctionList.getAuctions().length-1;
    }

    /**
     * @method getNext
     * @description Devuelve el siguiente elemento en la colección.
     * @returns {Auction} - El siguiente elemento en la colección.
     */
    getNext() {
        if (this.hasMore()) {
            this.currentPosition++;
            return this.auctionList.getAuctions()[this.currentPosition];
        } else {
            return null;
        }
    }

    /**
     * @method setCurrentPosition
     * @description Establece la posición actual del iterador basado en el ID de la subasta.
     * @param {number} auctionId - El ID de la subasta a establecer como posición actual del iterador.
     */
    setCurrentPosition(auctionId) {
        const auctions = this.auctionList.getAuctions();
        const index = auctions.findIndex(auction => auction.id === auctionId);
        if (index !== -1) {
            this.currentPosition = index;
        } else {
            console.error(`Subasta con ID ${auctionId} no encontrada en la lista.`);
        }
    }

    /**
     * @method getCurrentPosition
     * @description Obtiene la posición actual del iterador.
     * @returns {number} - La posición actual del iterador.
     */
    getCurrentPosition() {
        return this.currentPosition;
    }
}
