/**
 * @interface RechargeMethod
 * @description Interfaz para métodos de recarga.
 */
export class RechargeMethod {
    /**
     * @constructor
     */
    constructor() {
        this.url = ""; // Inicializa la URL como una cadena vacía
    }

    /**
     * @method recharge
     * @description Método para recargar el saldo.
     * @param {number} amount - La cantidad a recargar.
     * @param {UserModel} user - El usuario que hace la recarga.
     */
    recharge(amount, user) {
        throw new Error("El método 'recargar' debe ser implementado");
    }
}
