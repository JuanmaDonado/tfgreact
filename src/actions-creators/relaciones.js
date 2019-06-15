import { ADD_RELACION, BORRAR_RELACION } from "../constants/actionTypes.js";
import uuidv4 from "uuid";

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

export function doBorrarRelacion(id) {
  return {
    type: BORRAR_RELACION,
    payload: {
      id
    }
  };
}
