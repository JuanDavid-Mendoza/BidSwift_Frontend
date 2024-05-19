import { Auctionable } from "../../auctions/Auctionable";

/**
 * @extends Auctionable
 */
export class ProductModel extends Auctionable {
  /**
   * @constructor
   * @param {number} id - Identificador del producto.
   * @param {string} name - Nombre del producto.
   * @param {string} description - Descripción del producto.
   * @param {number} price - Precio del producto.
   * @param {string} details - Detalles del producto.
   * @param {string[]} images - Imagenes del producto.
   */

  constructor(id, name, description, price, details, images) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.details = details;
    this.images = images;
  }

  /**
     * @method clone
     * @description Crea y devuelve una copia del objeto Producto.
     * @returns {ProductModel} Una copia del objeto Producto.
     */
  clone() {
    return new ProductModel(this.id, this.name, this.description, this.price, this.details, [...this.images]);
  }
}
