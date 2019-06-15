import {
  applyDeleteEntryFromObject,
  applyAddToArrayInObject,
  applyDeleteFromArrayInObject
} from "./utilities";
import {
  CONECTAR_ENLACE,
  BORRAR_ENLACE,
  ADD_RELACION,
  BORRAR_RELACION
} from "../constants/actionTypes";

export default function enlacesReducer(state = {}, action) {
  switch (action.type) {
    case CONECTAR_ENLACE:
      return applyConectarEnlace(state, action);
    case BORRAR_ENLACE:
      return applyBorrarEnlace(state, action);
    case ADD_RELACION:
      return applyAddRelacion(state, action);
    case BORRAR_RELACION:
      return applyBorrarRelacion(state, action);
    default:
      return state;
  }
}

function applyConectarEnlace(state, action) {
  let oldRelaciones;

  if (state[action.payload.id]) {
    oldRelaciones = state[action.payload.id].relaciones;
  } else {
    oldRelaciones = [];
  }

  const enlace = {
    id: action.payload.id,
    origen: action.payload.idOrigen,
    destino: action.payload.idDestino,
    relaciones: oldRelaciones
  };

  return { ...state, [action.payload.id]: enlace };
}

const applyBorrarEnlace = applyDeleteEntryFromObject;

const applyAddRelacion = applyAddToArrayInObject("relaciones");

const applyBorrarRelacion = applyDeleteFromArrayInObject("relaciones");
