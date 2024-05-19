import { Auction } from "./Auction";

/**
 * @interface Iterator
 * @description Interfaz para iteradores de colecciones.
 */
export class Iterator {
    /**
     * @method hasMore
     * @description Comprueba si hay más elementos en la colección.
     * @returns {boolean} - Devuelve true si hay más elementos, de lo contrario false.
     */
    hasMore() {
        throw new Error("El método 'hasMore' debe ser implementado");
    }

    /**
     * @method getNext
     * @description Devuelve el siguiente elemento en la colección.
     * @returns {Auction} - El siguiente elemento en la colección.
     */
    getNext() {
        throw new Error("El método 'getNext' debe ser implementado");
    }

    /**
     * @method setCurrentPosition
     * @description Establece el iterador en la subasta con id dado
     * @param {number} id - La posición actual del iterador.
     */
    setCurrentPosition(id) {
        throw new Error("El método 'setCurrentPosition' debe ser implementado");
    }

    /**
     * @method getCurrentPosition
     * @description Obtiene la posición actual del iterador.
     * @returns {number} - La posición actual del iterador.
     */
    getCurrentPosition() {
        throw new Error("El método 'getCurrentPosition' debe ser implementado");
    }
}
