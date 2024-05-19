import { UpdateMethod } from "../shared/UpdateMethod";
import { AccountModel } from "../shared/models/AccountModel";
import { UserModel } from "../shared/models/UserModel";
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
