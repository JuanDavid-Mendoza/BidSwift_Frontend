import { Authenticator } from "./Authenticator";

/**
 * @class VerificationLog
 * @extends Authenticator
 * @description Clase para la verificación de log.
 */
export default class VerificationLog extends Authenticator {
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * @method auth
     * @description Método para autenticar a un usuario mediante verificación de log.
     * @param {string} user - El nombre de usuario.
     * @param {string} password - La contraseña del usuario.
     */
    auth(user, password) {
        
    }
}