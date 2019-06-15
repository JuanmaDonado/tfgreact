import { ADD_EQUIPO, BORRAR_EQUIPO } from "../constants/actionTypes";
import uuidv4 from "uuid";

export function doAddEquipo(id = uuidv4(), nombre) {
  return {
    type: ADD_EQUIPO,
    payload: {
      id,
      nombre
    }
  };
}

export function doBorrarEquipo(id) {
  return {
    type: BORRAR_EQUIPO,
    payload: {
      id
    }
  };
}
