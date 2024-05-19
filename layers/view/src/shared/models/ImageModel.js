export class ImageModel {
  /**
   * @constructor
   * @param {number} id - Identificador de la imágen.
   * @param {string} url - Dirección url de la imágen.
   * @param {number} productId - Identificador del producto al que hace referencia la imágen.
   */
  constructor(id, url, productId) {
    this.id = id;
    this.url = url;
    this.productId = productId;
  }
}
