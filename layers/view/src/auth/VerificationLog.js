import { Authenticator } from "./Authenticator";
import { GetMethod } from "../shared/GetMethod";

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
     * @param {string} email - Dirección de correo electrónico del usuario.
     * @param {string} password - La contraseña del usuario.
     */
    async auth(email, password) {
        const exists = await new GetMethod().execute(`http://localhost:3030/users/exists?email=${email}`);
        if (exists) {
            return this.next.auth(email, password)
        }

        return null;
    }
}