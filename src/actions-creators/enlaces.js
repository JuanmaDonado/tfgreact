import { CONECTAR_ENLACE, BORRAR_ENLACE } from "../constants/actionTypes";
import uuidv4 from "uuid";

/**
 * Crea un nuevo enlace si no existe, y si ya existe modifica el existente con el nuevo origen y destino
 * @param {string} id id único del enlace. Si se suministra undefined, generará un id nuevo automáticamente.
 * @param {string} idOrigen id del equipo de origen
 * @param {string} idDestino id del equipo de destino
 */

export function doConectarEnlace(id = uuidv4(), idOrigen, idDestino) {
  return {
    type: CONECTAR_ENLACE,
    payload: {
      id,
      idOrigen,
      idDestino
    }
  };
}

/**
 *
 * @param {string} id id del enlace a borrar
 */
export function doBorrarEnlace(id) {
  return {
    type: BORRAR_ENLACE,
    payload: {
      id
    }
  };
}
