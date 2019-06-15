import { ADD_ECUACION, BORRAR_ECUACION } from "../constants/actionTypes.js";
import uuidv4 from "uuid";

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

export function doBorrarEcuacion(id) {
  return {
    type: BORRAR_ECUACION,
    payload: {
      id
    }
  };
}
