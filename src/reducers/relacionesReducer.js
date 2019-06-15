import { ADD_RELACION, BORRAR_RELACION } from "../constants/actionTypes";
import { applyDeleteEntryFromObject } from "./utilities";

export default function relacionesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_RELACION: {
      return applyAddRelacion(state, action);
    }
    case BORRAR_RELACION: {
      return applyBorrarRelacion(state, action);
    }
    default:
      return state;
  }
}

function applyAddRelacion(state, action) {
  const { id, idVar1, idVar2 } = action.payload;

  return {
    ...state,
    [id]: [idVar1, idVar2]
  };
}

const applyBorrarRelacion = applyDeleteEntryFromObject;
