import { AuctionParticipant } from "../../auctions/AuctionParticipant";

export class AccountModel extends AuctionParticipant {
    /**
     * @constructor
     * @param {number} id - Identificador de la cuenta.
     * @param {boolean} status - Indica si la cuenta goza del beneficio "status".
     * @param {boolean} reducedCost - Indica si la cuenta goza del beneficio "Costo reducido".
     * @param {number} balance - Saldo de la cuenta.
     * @param {number} userId - Identificador del usuario al que pertenece la cuenta.
     */
    constructor(id, status, reducedCost, balance, userId) {
        super();
        this.id = id;
        this.status = status;
        this.reducedCost = reducedCost;
        this.balance = balance;
        this.userId = userId;
        this.activeAuction = null;
    }

    /**
     * @method updateAuctionStatus
     * @description Método que será llamado para actualizar el estado de la subasta.
     * @param {ActiveAuction} activeAuction - La subasta activa.
     */
    updateAuctionStatus(activeAuction) {
        this.activeAuction = activeAuction;
    }

    /**
     * @method payShipment
     * @description Método para realizar un pago.
     * @param {number} amount - La cantidad a pagar.
     * @returns {boolean} booleano indicando el exito o fracaso del pago
     */
    payShipment(amount) {
        if (this.balance >= amount) {
          this.balance -= amount;
          return true;
        }
        return false;
    }
}
