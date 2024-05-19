export class PurchaseModel {
  /**
   * @constructor
   * @param {number} id - Identificador de la compra.
   * @param {number} finalValue - Valor con el que finalizó la subasta.
   * @param {string} purchaseDate - Fecha en que finalizó la subasta.
   * @param {number} accountId - Identficador de la cuenta que ganó la subasta.
   * @param {number} auctionId - Identificador de la subasta.
   */
  constructor(id, finalValue, purchaseDate, accountId, auctionId) {
    this.id = id;
    this.finalValue = finalValue;
    this.purchaseDate = purchaseDate;
    this.accountId = accountId;
    this.auctionId = auctionId;
  }
}
