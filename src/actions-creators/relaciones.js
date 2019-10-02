import { ADD_RELACION, BORRAR_RELACION } from "../constants/actionTypes.js";
import uuidv4 from "uuid";

/**
 *
 * @param {string} id id único de la relación a añadir. Si se suministra undefined, generará un id nuevo automáticamente.
 * @param {string} idObjetivo id del enlace al que pertenece la relación.
 * @param {string} idVar1 id de la primera variable que forma parte de la relación
 * @param {string} idVar2 id de la segunda variable que forma parte de la relación
 */

export function doAddRelacion(id = uuidv4(), idObjetivo, idVar1, idVar2) {
  return {
    type: ADD_RELACION,
    payload: {
      id,
      idObjetivo,
      idVar1,
      idVar2
    }
  };
}

/**
 *
 * @param {string} id id de la relación a borrar
 */

export function doBorrarRelacion(id) {
  return {
    type: BORRAR_RELACION,
    payload: {
      id
    }
  };
}
