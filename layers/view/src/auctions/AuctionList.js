import { Iterator } from "./Iterator";
import {Auction} from "./Auction";

/**
 * @interface AuctionList
 * @description Interfaz para una lista de subastas.
 */
export class AuctionList {
    /**
     * @method createUpIterator
     * @description Crea un iterador ascendente para la lista de subastas.
     * @param {AuctionList} auctionList - La lista de subastas sobre la que se va a iterar.
     * @returns {Iterator} - Un iterador ascendente para la lista de subastas.
     */
    createUpIterator(auctionList) {
        throw new Error("El método 'createUpIterator' debe ser implementado");
    }

    /**
     * @method createDownIterator
     * @description Crea un iterador descendente para la lista de subastas.
     * @param {AuctionList} auctionList - La lista de subastas sobre la que se va a iterar.
     * @returns {Iterator} - Un iterador descendente para la lista de subastas.
     */
    createDownIterator(auctionList) {
        throw new Error("El método 'createDownIterator' debe ser implementado");
    }

    /**
     * @method getAuctions
     * @description Devuelve un array de subastas.
     * @returns {Array<Auction>} - Un array de subastas.
     */
    getAuctions() {
        throw new Error("El método 'getAuctions' debe ser implementado");
    }
}
