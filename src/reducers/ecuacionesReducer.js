import { ADD_ECUACION, BORRAR_ECUACION } from "../constants/actionTypes";
import { applyDeleteEntryFromObject } from "./utilities";

export default function ecuacionesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_ECUACION: {
      return applyAddEcuacion(state, action);
    }
    case BORRAR_ECUACION: {
      return applyBorrarEcuacion(state, action);
    }
    default:
      return state;
  }
}

function applyAddEcuacion(state, action) {
  return {
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      valor: action.payload.valor
    }
  };
}

const applyBorrarEcuacion = applyDeleteEntryFromObject;
