/* eslint-disable no-unused-vars */
/**
 * @interface Requestcommand
 * @description Interfaz para realizar peticiones al backend.
 */
export class Requestcommand {
  /**
   * @constructor
   */
  constructor() { }

  /**
   * @method execute
   * @description Método para ejecutar enviar una petición.
   * @param {string} path - Ruta a la que se va a realizar la petición.
   * @param {Object} data - Modelo de la entidad sobre la que se realizará la peteción.
   */
  asyncexecute(path, data) {
    throw new Error("El método 'ejecutar' debe ser implementado");
  }
}
