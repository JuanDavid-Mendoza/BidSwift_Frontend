import { RechargeMethod } from "./RechargeMethod";

/**
 * @class PayPalRechargeMethod
 * @description Clase para método de recarga con PayPal
 * @extends RechargeMethod
 */
export class PayPalRechargeMethod extends RechargeMethod {
    /**
     * @constructor
     * @param {string} email - El correo electrónico asociado a PayPal.
     * @param {string} password - La contraseña de PayPal.
     */
    constructor(email, password) {
      super();
      this.email = email;
      this.password = password;
      this.url = 'https://www.paypal.com/co/home';
    }
  
    /**
     * @method recharge
     * @description Método para recargar el saldo utilizando PayPal.
     * @param {number} amount - La cantidad a recargar.
     */
    recharge(amount) {
      
        //TODO: LLAMAR SERVICIO ACTUALIZAR BALANCE

        return this.url;
    }
  }
