import {
  ADD_EQUIPO,
  BORRAR_EQUIPO,
  ADD_ECUACION,
  BORRAR_ECUACION,
  ADD_DATO,
  BORRAR_DATO,
  ADD_INCOGNITA,
  BORRAR_INCOGNITA
} from "../constants/actionTypes";
import {
  applyAddToArrayInObject,
  applyDeleteFromArrayInObject,
  applyDeleteEntryFromObject
} from "./utilities";

export default function equiposReducer(state = {}, action) {
  switch (action.type) {
    case ADD_EQUIPO: {
      return applyAddEquipo(state, action);
    }
    case BORRAR_EQUIPO: {
      return applyBorrarEquipo(state, action);
    }
    case ADD_ECUACION: {
      return applyAddEcuacion(state, action);
    }
    case BORRAR_ECUACION: {
      return applyBorrarEcuacion(state, action);
    }
    case ADD_DATO: {
      return applyAddDato(state, action);
    }
    case BORRAR_DATO: {
      return applyBorrarDato(state, action);
    }
    case ADD_INCOGNITA: {
      return applyAddIncognita(state, action);
    }
    case BORRAR_INCOGNITA: {
      return applyBorrarIncognita(state, action);
    }
    default: {
      return state;
    }
  }
}

function applyAddEquipo(state, action) {
  const equipo = {
    id: action.payload.id,
    nombre: action.payload.nombre,
    datos: [],
    incognitas: [],
    ecuaciones: []
  };
  return { ...state, [action.payload.id]: equipo };
}

const applyBorrarEquipo = applyDeleteEntryFromObject;

const applyAddEcuacion = applyAddToArrayInObject("ecuaciones");

const applyBorrarEcuacion = applyDeleteFromArrayInObject("ecuaciones");

const applyAddDato = applyAddToArrayInObject("datos");

const applyBorrarDato = applyDeleteFromArrayInObject("datos");

const applyAddIncognita = applyAddToArrayInObject("incognitas");

const applyBorrarIncognita = applyDeleteFromArrayInObject("incognitas");
