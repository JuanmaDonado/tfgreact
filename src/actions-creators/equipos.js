import { ADD_EQUIPO, BORRAR_EQUIPO } from "../constants/actionTypes";
import uuidv4 from "uuid";

/**
 *
 * @param {string} id id único del equipo. Si se suministra undefined, generará un id nuevo automáticamente.
 * @param {string} nombre Nombre del equipo
 */
export function doAddEquipo(id = uuidv4(), nombre) {
  return {
    type: ADD_EQUIPO,
    payload: {
      id,
      nombre
    }
  };
}

/**
 *
 * @param {string} id id único del equipo a borrar.
 */
export function doBorrarEquipo(id) {
  return {
    type: BORRAR_EQUIPO,
    payload: {
      id
    }
  };
}
