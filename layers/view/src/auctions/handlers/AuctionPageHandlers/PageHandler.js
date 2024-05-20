import { AuctionPageData } from "./AuctionPageData";

/**
 * @interface PageHandler
 * @description Interfaz para el manejador de eventos de AuctionPage.
 */
export class PageHandler {
  /**
   * @method getAuctions
   * @description Obtiene las subastas de la página
   * @param {AuctionPageData} data - Atributos de AuctionPage
   * @returns {void} 
   */
  async getAuctions(data) {
    throw new Error("El método 'getAuctions' debe ser implementado");
  }

  /**
   * @method getBids
   * @description Obtiene las pujas de la subasta
   * @param {AuctionPageData} data - Atributos de AuctionPage
   * @returns {void} 
   */
  async getBids(data) {
    throw new Error("El método 'getBids' debe ser implementado");
  }

  /**
   * @method prevImg
   * @description Muestra la imagen anterior del producto
   * @param {AuctionPageData} data - Atributos de AuctionPage
   * @returns {void} 
   */
  prevImg(data) {
    throw new Error("El método 'prevImg' debe ser implementado");
  }

  /**
   * @method nextImg
   * @description Muestra la siguiente imagen del producto
   * @param {AuctionPageData} data - Atributos de AuctionPage
   * @returns {void} 
   */
  nextImg(data) {
    throw new Error("El método 'nextImg' debe ser implementado");
  }

  /**
   * @method goPrevAuction
   * @description Muestra la subasta anterior
   * @param {AuctionPageData} data - Atributos de AuctionPage
   * @returns {void} 
   */
  async goPrevAuction(data) {
    throw new Error("El método 'goPrevAuction' debe ser implementado");
  }

  /**
   * @method goNextAuction
   * @description Muestra la siguiente subasta
   * @param {AuctionPageData} data - Atributos de AuctionPage
   * @returns {void} 
   */
  async goNextAuction(data) {
    throw new Error("El método 'goNextAuction' debe ser implementado");
  }

  /**
   * @method doAuction
   * @description Inicia o termina la subasta
   * @param {AuctionPageData} data - Atributos de AuctionPage
   * @returns {void} 
   */
  async doAuction(data) {
    throw new Error("El método 'doAuction' debe ser implementado");
  }

  /**
   * @method createPurchase
   * @description Hace la compra
   * @param {AuctionPageData} data - Atributos de AuctionPage
   * @returns {void} 
   */
  async createPurchase(data) {
    throw new Error("El método 'createPurchase' debe ser implementado");
  }

  /**
   * @method addBid
   * @description Hace una puja
   * @param {AuctionPageData} data - Atributos de AuctionPage
   * @returns {void} 
   */
  async addBid(data) {
    throw new Error("El método 'addBid' debe ser implementado");
  }
}