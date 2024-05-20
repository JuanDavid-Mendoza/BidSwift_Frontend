import { Benefit } from "./Benefit";
import { AbstractAccountModel } from "../shared/models/AbstractAccountModel";

/**
 * @class ReducedCost
 * @description Clase decoradora que reduce el costo de envío antes de realizar un pago.
 * @extends Benefit
 */
export class ReducedCost extends Benefit {

    /**
     * @constructor
     * @param {AbstractAccountModel} account - La cuenta a decorar.
     */
    constructor(account) {
      super(account);
    }
  
    /**
     * @method payShipment
     * @description Reduce el costo de envío y luego realiza el pago.
     * @param {number} amount - La cantidad a pagar.
     * @returns {boolean} booleano indicando el exito o fracaso del pago
     */
    payShipment(amount) {
      const reducedAmount = this.reduceShipmentCost(amount);
      return super.payShipment(reducedAmount);
    }
  
    /**
     * @method reduceShipmentCost
     * @description Método para reducir el costo de envío.
     * @param {number} amount - La cantidad original.
     * @returns {number} La cantidad reducida.
     * @private
     */
    reduceShipmentCost(amount) {
      const reductionRate = 0.90; // Aplica un descuento del 10%
      return amount * reductionRate;
    }
  }