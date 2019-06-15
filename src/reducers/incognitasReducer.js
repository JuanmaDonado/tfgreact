import {
  ADD_INCOGNITA,
  BORRAR_INCOGNITA,
  CAMBIAR_VALOR_INICIAL
} from "../constants/actionTypes";
import {
  applyDeleteEntryFromObject,
  applyCambiarPropiedadDeObjeto
} from "./utilities";

export default function incognitasReducer(state = {}, action) {
  switch (action.type) {
    case ADD_INCOGNITA: {
      return applyAddIncognita(state, action);
    }
    case BORRAR_INCOGNITA: {
      return applyBorrarIncognita(state, action);
    }
    case CAMBIAR_VALOR_INICIAL: {
      return applyCambiarValorInicial(state, action);
    }
    default:
      return state;
  }
}

function applyAddIncognita(state, action) {
  return {
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      nombre: action.payload.nombre,
      valorInicial: 1
    }
  };
}

const applyBorrarIncognita = applyDeleteEntryFromObject;

const applyCambiarValorInicial = applyCambiarPropiedadDeObjeto("valorInicial");
