import { RechargeMethod } from "./RechargeMethod";

/**
 * @class PSERechargeMethod
 * @description Clase para método de recarga con PSE
 * @extends RechargeMethod
 */
export class PSERechargeMethod extends RechargeMethod {
    /**
     * @constructor
     * @param {string} email - El correo electrónico asociado a PSE.
     * @param {string} password - La contraseña de PSE.
     */
    constructor(email, password) {
      super();
      this.email = email;
      this.password = password;
      this.url = 'https://www.pse.com.co/';
    }
  
    /**
     * @method recharge
     * @description Método para recargar el saldo utilizando PSE.
     * @param {number} amount - La cantidad a recargar.
     */
    recharge(amount) {
        
        
        return this.url;
    }
}