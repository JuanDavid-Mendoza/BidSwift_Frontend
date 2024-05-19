export class AccountModel {
  /**
   * @constructor
   * @param {number} id - Identificador de la cuenta.
   * @param {boolean} status - Indica si la cuenta goza del beneficio "status".
   * @param {boolean} reducedCost - Indica si la cuenta goza del beneficio "Costo reducido".
   * @param {number} balance - Saldo de la cuenta.
   * @param {number} userId - Identificador del usuario al que pertenece la cuenta.
   */
  constructor(id, status, reducedCost, balance, userId) {
    this.id = id;
    this.status = status;
    this.reducedCost = reducedCost;
    this.balance = balance;
    this.userId = userId;
  }
}
