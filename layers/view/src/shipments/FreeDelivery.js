import { Benefit } from "./Benefit";
import { AbstractAccountModel } from "../shared/models/AbstractAccountModel";

/**
 * @class FreeDelivery
 * @description Clase decoradora que hace que el envío sea gratuito.
 * @extends Benefit
 */
export class FreeDelivery extends Benefit {

    /**
     * @constructor
     * @param {AbstractAccountModel} account - La cuenta a decorar.
     */
    constructor(account) {
      super(account);
    }
  
    /**
     * @method payShipment
     * @description Realiza el pago del envío con un monto de 0, haciéndolo gratuito.
     * @returns {boolean} booleano indicando el éxito o fracaso del pago
     */
    payShipment() {
      return super.payShipment(0);
    }
  }