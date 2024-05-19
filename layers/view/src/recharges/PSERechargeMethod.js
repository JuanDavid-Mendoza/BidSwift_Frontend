import { UpdateMethod } from "../shared/UpdateMethod";
import { AccountModel } from "../shared/models/AccountModel";
import { UserModel } from "../shared/models/UserModel";
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