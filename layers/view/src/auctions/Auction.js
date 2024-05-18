import { Auctionable } from "./Auctionable";
import { Product } from "./Product";

/**
 * @class Subasta
 * @extends Auctionable
 * @description Clase que representa una subasta.
 */
export class Auction extends Auctionable {
    /**
     * @constructor
     * @param {number} id - El identificador de la subasta.
     * @param {Date} startDate - La fecha de inicio de la subasta.
     * @param {Date} endDate - La fecha de finalización de la subasta.
     * @param {number} timer - El temporizador de la subasta.
     * @param {string} state - El estado de la subasta.
     * @param {Product} product - El producto asociado a la subasta.
     */
    constructor(id, startDate, endDate, timer, state, product) {
        super();
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.timer = timer;
        this.state = state;
        this.product = product;
    }

    /**
     * @method clone
     * @description Crea y devuelve una copia del objeto Subasta.
     * @returns {Auction} Una copia del objeto Subasta.
     */
    clone() {
        return new Auction(
            this.id,
            new Date(this.startDate),
            new Date(this.endDate),
            this.timer,
            this.state,
            this.product.clone() 
        );
    }
}