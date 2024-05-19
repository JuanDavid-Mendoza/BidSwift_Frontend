/**
 * @interface Authenticator
 * @description Interfaz para autenticadores.
 */
export class Authenticator {
    /**
     * @constructor
     */
    constructor() {
        this.next = null; // Inicializa el siguiente autenticador como null
    }

    /**
     * @method auth
     * @description Método para autenticar a un usuario.
     * @param {string} user - El nombre de usuario.
     * @param {string} password - La contraseña del usuario.
     * @throws {Error} Si el método no está implementado.
     */
    auth(user, password) {
        throw new Error("El método 'auth' debe ser implementado");
    }

    /**
     * @method setNext
     * @description Establece el siguiente autenticador en la cadena.
     * @param {Authenticator} next - El siguiente autenticador.
     */
    setNext(next) {
        this.next = next;
    }
}
