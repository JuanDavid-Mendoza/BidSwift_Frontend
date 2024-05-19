import { GetMethod } from "../shared/GetMethod";
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
     * @param {string} email - Dirección de correo electrónico del usuario.
     * @param {string} password - La contraseña del usuario.
     */
    auth(email, password) {
        return new GetMethod().execute(`http://localhost:3030/users/logIn?email=${email}&password=${password}`)
    }
}