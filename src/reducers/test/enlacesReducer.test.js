import enlacesReducer from "../enlacesReducer";
import {
  doConectarEnlace,
  doBorrarEnlace
} from "../../actions-creators/enlaces";
import {
  doAddRelacion,
  doBorrarRelacion
} from "../../actions-creators/relaciones";

it("añade enlaces", () => {
  const initialState = {};

  const expectedState = {
    "5": {
      id: "5",
      origen: "1",
      destino: "2",
      relaciones: []
    }
  };

  const action = doConectarEnlace("5", "1", "2");

  expect(enlacesReducer(initialState, action)).toEqual(expectedState);
});

it("modifica enlaces", () => {
  const initialState = {
    "4": {
      id: "4",
      origen: "8",
      destino: "9",
      relaciones: ["7", "8"]
    },
    "5": {
      id: "5",
      origen: "1",
      destino: "2",
      relaciones: []
    }
  };

  const expectedState = {
    "4": {
      id: "4",
      origen: "10",
      destino: "11",
      relaciones: ["7", "8"]
    },
    "5": {
      id: "5",
      origen: "1",
      destino: "2",
      relaciones: []
    }
  };

  const action = doConectarEnlace("4", "10", "11");

  expect(enlacesReducer(initialState, action)).toEqual(expectedState);
});

it("borra enlaces", () => {
  const initialState = {
    "4": {
      id: "4",
      origen: "8",
      destino: "9",
      relaciones: ["7", "8"]
    },
    "5": {
      id: "5",
      origen: "1",
      destino: "2",
      relaciones: []
    }
  };
  const expectedState = {
    "5": {
      id: "5",
      origen: "1",
      destino: "2",
      relaciones: []
    }
  };

  const action = doBorrarEnlace("4");

  expect(enlacesReducer(initialState, action)).toEqual(expectedState);
});

it("añade relaciones", () => {
  const initialState = {
    "4": {
      id: "4",
      origen: "8",
      destino: "9",
      relaciones: ["7", "8"]
    },
    "5": {
      id: "5",
      origen: "1",
      destino: "2",
      relaciones: []
    }
  };

  const expectedState = {
    ...initialState,
    "5": {
      id: "5",
      origen: "1",
      destino: "2",
      relaciones: ["10"]
    }
  };

  const action = doAddRelacion("10", "5", null, null);

  expect(enlacesReducer(initialState, action)).toEqual(expectedState);
});

it("borra relaciones", () => {
  const initialState = {
    "3": {
      id: "3",
      origen: "1",
      destino: "2",
      relaciones: ["7", "8"]
    },
    "4": {
      id: "4",
      origen: "2",
      destino: "1",
      relaciones: ["7", "8"]
    }
  };
  const expectedState = {
    "3": {
      id: "3",
      origen: "1",
      destino: "2",
      relaciones: ["7"]
    },
    "4": {
      id: "4",
      origen: "2",
      destino: "1",
      relaciones: ["7"]
    }
  };

  const action = doBorrarRelacion("8");

  expect(enlacesReducer(initialState, action)).toEqual(expectedState);
});
