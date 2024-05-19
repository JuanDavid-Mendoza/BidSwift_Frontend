/* eslint-disable no-unused-vars */
import { RequestCommand } from "./RequestCommand";

/**
 * @class NequiRechargeMethod
 * @description Clase para método de recarga con Nequi
 * @extends RequestCommand
 */
export class GetMethod extends RequestCommand {
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
    const response = await fetch(path);
    return response.json();
  }
}