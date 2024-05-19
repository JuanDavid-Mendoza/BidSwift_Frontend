import { UserModel } from "../shared/models/UserModel";
import { CreateMethod } from "../shared/CreateMethod";
import { Authenticator } from "./Authenticator";

/**
 * @class SignIn
 * @extends Authenticator
 * @description Clase para la autenticación de registro.
 */
export default class SignIn extends Authenticator {
    /**
     * @constructor
     * @param {string} names - Nombres del usuario.
     * @param {string} lastNames - Apellidos del usuario.
     * @param {string} birthDate - Fecha de nacimiento del usuario.
     * @param {string} identification - Numero de identificación del usuario.
     * @param {string} address - Dirección de residencia del usuario.
     */
    constructor(names, lastNames, birthDate, identification, address) {
        super();
        this.names = names;
        this.lastNames = lastNames;
        this.birthDate = birthDate;
        this.identification = identification;
        this.address = address;
    }

    /**
     * @method auth
     * @description Método para autenticar a un usuario durante el registro.
     * @param {string} email - Dirección de correo electrónico del usuario.
     * @param {string} password - La contraseña del usuario.
     */
    async auth(email, password) {
        const user = new UserModel(
            null, 
            this.names, 
            this.lastNames,
            email,
            password,
            this.birthDate,
            this.identification,
            this.address,
            null
        );

        const result = new CreateMethod().execute('http://localhost:3030/users/create', user);

        return result ? user : null;
    }
}