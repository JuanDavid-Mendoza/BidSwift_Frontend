import { Authenticator } from "./Authenticator";

/**
 * @class VerificationSign
 * @extends Authenticator
 * @description Clase para la verificación de sign.
 */
export default class VerificationSign extends Authenticator {
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * @method auth
     * @description Método para autenticar a un usuario mediante verificación de sign.
     * @param {string} user - El nombre de usuario.
     * @param {string} password - La contraseña del usuario.
     */
    auth(user, password) {
        
    }
}
