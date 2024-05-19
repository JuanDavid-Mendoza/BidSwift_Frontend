export class UserModel {
  /**
   * @constructor
   * @param {number} id - Identificador del usuario.
   * @param {string} names - Nombres del usuario.
   * @param {string} lastNames - Apellidos del usuario.
   * @param {string} email - Dirección de correo electrónico del usuario.
   * @param {string} password - Contraseña del usuario.
   * @param {string} birthDate - Fecha de nacimiento del usuario.
   * @param {string} identification - Numero de identificación del usuario.
   * @param {string} address - Dirección de residencia del usuario.
   * @param {AccountModel} account - Cuenta del usuario.
   */
  constructor(id, names, lastNames, email, password, birthDate, identification, address, account) {
    this.id = id;
    this.names = names;
    this.lastNames = lastNames;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
    this.identification = identification;
    this.address = address;
    this.account = account;
  }
}
