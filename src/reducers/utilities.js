import * as R from "ramda";

export const applyAddToArrayInObject = R.curry((nameOfArray, state, action) => {
  const { idObjetivo, id } = action.payload;

  const transformations = {
    [idObjetivo]: {
      [nameOfArray]: R.append(id)
    }
  };

  return R.evolve(transformations, state);
});

export const applyDeleteFromArrayInObject = R.curry(
  (nameOfArray, state, action) => {
    const { id } = action.payload;

    const transformations = {
      [nameOfArray]: R.reject(R.equals(id))
    };

    return R.map(R.evolve(transformations), state);
  }
);

export function applyDeleteEntryFromObject(state, action) {
  return R.omit([action.payload.id], state);
}

export const applyCambiarPropiedadDeObjeto = R.curry(
  (nombrePropiedad, state, action) => {
    const { id, nuevoValor } = action.payload;
    return R.assocPath([id, nombrePropiedad], nuevoValor, state);
  }
);
