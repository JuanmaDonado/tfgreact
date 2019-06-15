import {
  TOGGLE_DRAWER,
  BORRAR_EQUIPO,
  BORRAR_ENLACE
} from "../constants/actionTypes";

export default function drawerReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return !state;
    case BORRAR_EQUIPO:
      return false;
    case BORRAR_ENLACE:
      return false;
    default:
      return state;
  }
}
