import { ADD_ECUACION, BORRAR_ECUACION } from "../constants/actionTypes.js";
import uuidv4 from "uuid";

/**
 *
 * @param {string} id id único de la ecuación. Si se suministra undefined, generará un id nuevo automáticamente.
 * @param {string} idObjetivo id del equipo al que pertenece la ecuación
 * @param {string} valor cadena de texto que representa a la ecuación p.e.: a+b=2
 */

export function doAddEcuacion(id = uuidv4(), idObjetivo, valor) {
  return {
    type: ADD_ECUACION,
    payload: {
      id,
      idObjetivo,
      valor
    }
  };
}

/**
 *
 * @param {string} id id único de la ecuación.
 */
export function doBorrarEcuacion(id) {
  return {
    type: BORRAR_ECUACION,
    payload: {
      id
    }
  };
}
