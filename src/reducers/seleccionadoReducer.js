import {
  CAMBIAR_SELECCION,
  BORRAR_EQUIPO,
  BORRAR_ENLACE
} from "../constants/actionTypes";

export default function seleccionadoReducer(state = "", action) {
  switch (action.type) {
    case CAMBIAR_SELECCION: {
      return action.payload.nuevaSeleccion;
    }
    case BORRAR_EQUIPO: {
      return "";
    }
    case BORRAR_ENLACE: {
      return "";
    }
    default: {
      return state;
    }
  }
}
