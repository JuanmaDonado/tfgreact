import { CAMBIAR_SELECCION } from "../constants/actionTypes";

/**
 * Refleja la selección actual del usuario en el diagrama. Utilizado para saber qué información mostrar cuando se abre un menú desplegable.
 * @param {string} nuevaSeleccion id del elemento seleccionado actualmente en el diagrama, ya sea equipo o enlace.
 */

export function doCambiarSeleccion(nuevaSeleccion) {
  return {
    type: CAMBIAR_SELECCION,
    payload: {
      nuevaSeleccion
    }
  };
}
