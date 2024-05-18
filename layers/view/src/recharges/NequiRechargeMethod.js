import { RechargeMethod } from "./RechargeMethod";

/**
 * @class NequiRechargeMethod
 * @description Clase para método de recarga con Nequi
 * @extends RechargeMethod
 */
export class NequiRechargeMethod extends RechargeMethod {
    /**
     * @constructor
     * @param {string} phoneNumber - El número de teléfono asociado a Nequi.
     * @param {string} password - La contraseña de Nequi.
     */
    constructor(phoneNumber, password) {
      super();
      this.phoneNumber = phoneNumber;
      this.password = password;
      this.url = 'https://www.nequi.com.co/';
    }
  
    /**
     * @method recharge
     * @description Método para recargar el saldo utilizando Nequi.
     * @param {number} amount - La cantidad a recargar.
     */
    recharge(amount) {
        
        

        return this.url;
    }
}