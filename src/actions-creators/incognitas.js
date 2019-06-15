import {
  ADD_INCOGNITA,
  BORRAR_INCOGNITA,
  CAMBIAR_VALOR_INICIAL
} from "../constants/actionTypes";
import uuidv4 from "uuid";

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

export function doBorrarIncognita(id) {
  return {
    type: BORRAR_INCOGNITA,
    payload: {
      id
    }
  };
}

export function doCambiarValorInicial(id, nuevoValor) {
  return {
    type: CAMBIAR_VALOR_INICIAL,
    payload: {
      id,
      nuevoValor
    }
  };
}
