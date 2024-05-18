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
     */
    recharge(amount) {
        throw new Error("El método 'recargar' debe ser implementado");
    }
}
