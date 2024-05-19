export class BidModel {
  /**
   * @constructor
   * @param {number} id - Identificador de la puja.
   * @param {number} bidValue - Valor pujado.
   * @param {string} bidDate - Fecha en la que se realizó la puja.
   * @param {number} accountId - Identificador de la cuenta que hizo la puja.
   * @param {number} auctionId - Identificador de la subasta en que se hizo la puja.
   */

  constructor(id, bidValue, bidDate, accountId, auctionId) {
    this.id = id;
    this.bidValue = bidValue;
    this.bidDate = bidDate;
    this.accountId = accountId;
    this.auctionId = auctionId;
  }
}
