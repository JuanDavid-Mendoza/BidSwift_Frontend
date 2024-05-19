import { UpdateMethod } from "../shared/UpdateMethod";
import { AccountModel } from "../shared/models/AccountModel";
import { UserModel } from "../shared/models/UserModel";
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
   * @param {UserModel} user - El usuario que hace la recarga.
   */
  async recharge(amount, user) {
    const accountToUpdate = new AccountModel(
      user.account.id,
      null,
      null,
      parseFloat(user.account.balance) + amount,
      null
    );
    const userToUpdate = new UserModel(user.id, null, null, null, null, null, null, null, accountToUpdate);
    const result = await new UpdateMethod().execute('http://localhost:3030/users/update', userToUpdate);

    return result ? this.url : null;
  }
}