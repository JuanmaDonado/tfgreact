import { CONECTAR_ENLACE, BORRAR_ENLACE } from "../constants/actionTypes";
import uuidv4 from "uuid";

export function doConectarEnlace(id = uuidv4(), idOrigen, idDestino) {
  return {
    type: CONECTAR_ENLACE,
    payload: {
      id,
      idOrigen,
      idDestino
    }
  };
}

export function doBorrarEnlace(id) {
  return {
    type: BORRAR_ENLACE,
    payload: {
      id
    }
  };
}
