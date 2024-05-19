import { Authenticator } from "./Authenticator";

/**
 * @class SignIn
 * @extends Authenticator
 * @description Clase para la autenticación de registro.
 */
export default class SignIn extends Authenticator {
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * @method auth
     * @description Método para autenticar a un usuario durante el registro.
     * @param {string} user - El nombre de usuario.
     * @param {string} password - La contraseña del usuario.
     */
    auth(user, password) {
        
    }
}