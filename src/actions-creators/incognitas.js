import {
  ADD_INCOGNITA,
  BORRAR_INCOGNITA,
  CAMBIAR_VALOR_INICIAL
} from "../constants/actionTypes";
import uuidv4 from "uuid";

/**
 *
 * @param {string} id id único de la incógnita. Si se suministra undefined, generará un id nuevo automáticamente.
 * @param {string} idObjetivo id del equipo al que pertenece la incógnita.
 * @param {string} nombre nombre de la incógnita.
 */

export function doAddIncognita(id = uuidv4(), idObjetivo, nombre) {
  return {
    type: ADD_INCOGNITA,
    payload: {
      id,
      idObjetivo,
      nombre
    }
  };
}

/**
 *
 * @param {string} id id de la incógnita a borrar.
 */

export function doBorrarIncognita(id) {
  return {
    type: BORRAR_INCOGNITA,
    payload: {
      id
    }
  };
}

/**
 *
 * @param {string} id id de la incógnita a cambiar.
 * @param {number} nuevoValor nuevo valor inicial de la incógnita para el proceso iterativo de resolución
 */

export function doCambiarValorInicial(id, nuevoValor) {
  return {
    type: CAMBIAR_VALOR_INICIAL,
    payload: {
      id,
      nuevoValor
    }
  };
}
