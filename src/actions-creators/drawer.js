import { TOGGLE_DRAWER } from "../constants/actionTypes";

/**
 * Abre el panel desplegable si está cerrado, y lo cierra si está abierto.
 */

export function doToggleDrawer() {
  return {
    type: TOGGLE_DRAWER
  };
}
