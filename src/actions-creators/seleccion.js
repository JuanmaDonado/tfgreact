import { CAMBIAR_SELECCION } from "../constants/actionTypes";

export function doCambiarSeleccion(nuevaSeleccion) {
  return {
    type: CAMBIAR_SELECCION,
    payload: {
      nuevaSeleccion
    }
  };
}
