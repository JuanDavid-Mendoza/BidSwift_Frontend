/**
 * @class AbstractAccount
 * @description Clase abstracta que representa una cuenta con balance y un método para realizar pagos.
 * @abstract
 */
export class AbstractAccountModel {
    /**
     * @constructor
     */
    constructor() {
      if (new.target === AbstractAccountModel) {
        throw new TypeError("Cannot construct AbstractAccount instances directly");
      }
    }
  
    /**
     * @method payShipment
     * @description Método abstracto para realizar un pago. Debe ser implementado por las clases derivadas.
     * @abstract
     * @param {number} amount - La cantidad a pagar.
     * @returns {boolean} booleano indicando el exito o fracaso del pago
     * @throws {Error} - Este método debe ser implementado por una subclase.
     */
    payShipment(amount) {
      throw new Error("Method 'payShipment()' must be implemented.");
    }
  }