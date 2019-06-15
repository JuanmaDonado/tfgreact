import { ADD_DATO, BORRAR_DATO, CAMBIAR_DATO } from "../constants/actionTypes";
import {
  applyDeleteEntryFromObject,
  applyCambiarPropiedadDeObjeto
} from "./utilities";

export default function datosReducer(state = {}, action) {
  switch (action.type) {
    case ADD_DATO: {
      return applyAddDato(state, action);
    }
    case BORRAR_DATO: {
      return applyBorrarDato(state, action);
    }
    case CAMBIAR_DATO: {
      return applyCambiarDato(state, action);
    }
    default:
      return state;
  }
}

function applyAddDato(state, action) {
  const dato = {
    id: action.payload.id,
    nombre: action.payload.nombre,
    valor: 0
  };
  return {
    ...state,
    [action.payload.id]: dato
  };
}

const applyBorrarDato = applyDeleteEntryFromObject;

const applyCambiarDato = applyCambiarPropiedadDeObjeto("valor");
