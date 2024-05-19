import { GetMethod } from "../shared/GetMethod";
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
     * @param {string} email - Dirección de correo electrónico del usuario.
     * @param {string} password - La contraseña del usuario.
     */
    auth(email, password) {
        if (new GetMethod().execute(`http://localhost:3030/users/exists?email=${email}`)) return null;
        
        return this.next.auth(email, password)
    }
}
