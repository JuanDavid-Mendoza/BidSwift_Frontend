import { Auctionable } from "./Auctionable";

/**
 * @class Producto
 * @extends Auctionable
 * @description Clase que representa un producto subastable.
 */
export class Product extends Auctionable {
    /**
     * @constructor
     * @param {number} id - El identificador del producto.
     * @param {string} name - El nombre del producto.
     * @param {string} description - La descripción del producto.
     * @param {number} price - El precio del producto.
     * @param {string[]} images - Un arreglo de URLs de imágenes del producto.
     */
    constructor(id, name, description, price, images = []) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.images = images;
    }

    /**
     * @method clone
     * @description Crea y devuelve una copia del objeto Producto.
     * @returns {Producto} Una copia del objeto Producto.
     */
    clone() {
        return new Product(this.id, this.name, this.description, this.price, [...this.images]);
    }
}