import { AbstractAccountModel } from "../shared/models/AbstractAccountModel";

/**
 * @class Benefit
 * @description Clase decoradora base para cuentas.
 * @extends AbstractAccountModel
 */
export class Benefit extends AbstractAccountModel {

    /**
     * @constructor
     * @param {AbstractAccountModel} account - La cuenta a decorar.
     */
    constructor(account) {
      super();
      this.account = account;
    }
  
    /**
     * @method payShipment
     * @description Llama al método pay de la cuenta decorada.
     * @param {number} amount - La cantidad a pagar.
     * @returns {boolean} booleano indicando el exito o fracaso del pago
     */
    payShipment(amount) {
      return this.account.payShipment(amount);
    }
  }