export default class ProductModel {
  /**
   * @constructor
   * @param {number} id - Identificador del producto.
   * @param {string} name - Nombre del producto.
   * @param {string} description - Descripción del producto.
   * @param {number} price - Precio del producto.
   * @param {string} details - Detalles del producto.
   * @param {ImageModel[]} images - Imagenes del producto.
   */
  constructor(id, name, description, price, details, images) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.details = details;
    this.images = images;
  }
}
