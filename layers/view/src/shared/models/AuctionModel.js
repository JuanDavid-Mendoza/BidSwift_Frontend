export default class AuctionModel {
  /**
   * @constructor
   * @param {number} id - Identificador de la subasta.
   * @param {string} startDate - Fecha en la que inicia la subasta.
   * @param {string} endDate - Fecha en la que finalizó la subasta.
   * @param {number} timer - Tiempo que le falta a la subasta actualmente para terminarse.
   * @param {string} state - Indica el estado de la subasta.
   * @param {number} productId - Identificador del producto que se está subastando.
   * @param {number} ownerId - Identificador de la cuenta con que se realizó la subasta.
   * @param {ProductModel} product - Producto que se está subastando.
   */
  constructor(id, startDate, endDate, timer, state, productId, ownerId, product) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.timer = timer;
    this.state = state;
    this.productId = productId;
    this.ownerId = ownerId;
    this.product = product;
  }
}
