import { ADD_DATO, BORRAR_DATO, CAMBIAR_DATO } from "../constants/actionTypes";
import uuidv4 from "uuid";

/**
 *
 * @param {string} id id único del dato. Si se suministra undefined, generará un id nuevo automáticamente.
 * @param {string} idObjetivo id del el equipo al que pertenece el dato
 * @param {string} nombre nombre del dato
 *
 */

export function doAddDato(id = uuidv4(), idObjetivo, nombre) {
  return {
    type: ADD_DATO,
    payload: {
      id,
      idObjetivo,
      nombre
    }
  };
}

/**
 *
 * @param {string} id id del dato a borrar
 */

export function doBorrarDato(id) {
  return {
    type: BORRAR_DATO,
    payload: {
      id
    }
  };
}

/**
 * Actualiza el valor numérico de un dato
 * @param {string} id id del dato a cambiar
 * @param {number} nuevoValor nuevo valor numérico del dato
 */

export function doCambiarDato(id, nuevoValor) {
  return {
    type: CAMBIAR_DATO,
    payload: {
      id,
      nuevoValor
    }
  };
}
