/* eslint-disable no-unused-vars */
import { RequestCommand } from "./RequestCommand";

/**
 * @class NequiRechargeMethod
 * @description Clase para método de recarga con Nequi
 * @extends RequestCommand
 */
export class CreateMethod extends RequestCommand {
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
 * @method execute
 * @description Método para ejecutar enviar una petición.
 * @param {string} path - Ruta a la que se va a realizar la petición.
 * @param {Object} data - Modelo de la entidad sobre la que se realizará la peteción.
 */
  async execute(path, data) {
    try {
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
}