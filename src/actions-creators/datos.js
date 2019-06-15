import { ADD_DATO, BORRAR_DATO, CAMBIAR_DATO } from "../constants/actionTypes";
import uuidv4 from "uuid";

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

export function doBorrarDato(id) {
  return {
    type: BORRAR_DATO,
    payload: {
      id
    }
  };
}

export function doCambiarDato(id, nuevoValor) {
  return {
    type: CAMBIAR_DATO,
    payload: {
      id,
      nuevoValor
    }
  };
}
