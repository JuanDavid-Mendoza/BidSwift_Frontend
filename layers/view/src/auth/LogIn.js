import { Authenticator } from "./Authenticator";

/**
     * @class LogIn
     * @extends Authenticator
     * @description Clase para la autenticación de inicio de sesión.
     */
export default class LogIn extends Authenticator {
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * @method auth
     * @description Método para autenticar a un usuario durante el inicio de sesión.
     * @param {string} user - El nombre de usuario.
     * @param {string} password - La contraseña del usuario.
     */
    auth(user, password) {
        
    }
}