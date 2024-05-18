/**
 * @interface Auctionable
 * @description Interfaz para objetos subastables.
 */
export class Auctionable {
    /**
     * @constructor
     */
    constructor() {
        if (new.target === Auctionable) {
            throw new Error("No se puede instanciar la interfaz 'Auctionable' directamente");
        }
    }

    /**
     * @method clone
     * @description Método para clonar el objeto subastable.
     * @returns {Auctionable} Una copia del objeto subastable.
     * @throws {Error} Si el método no está implementado.
     */
    clone() {
        throw new Error("El método 'clone' debe ser implementado");
    }
}
