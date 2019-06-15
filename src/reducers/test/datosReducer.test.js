import datosReducer from "../datosReducer";
import {
  doAddDato,
  doBorrarDato,
  doCambiarDato
} from "../../actions-creators/datos";

const sampleState = {
  "5": { id: "5", nombre: "Temperatura", valor: 15 },
  "6": { id: "6", nombre: "Temperatura", valor: 15 }
};

it("applyAddDato", () => {
  const expectedState = {
    ...sampleState,
    "7": { id: "7", nombre: "Presion", valor: 0 }
  };

  expect(datosReducer(sampleState, doAddDato("7", null, "Presion"))).toEqual(
    expectedState
  );
});

it("applyBorrarDato", () => {
  let expectedState = sampleState;
  delete expectedState["5"];

  expect(datosReducer(sampleState, doBorrarDato("5"))).toEqual(expectedState);
});

it("applyCambiarDato", () => {
  const sampleState = {
    "5": { id: "5", nombre: "Temperatura", valor: 15 },
    "6": { id: "6", nombre: "Temperatura", valor: 15 }
  };

  const expectedState = {
    ...sampleState,
    "5": { id: "5", nombre: "Temperatura", valor: 20 }
  };

  expect(datosReducer(sampleState, doCambiarDato("5", 20))).toEqual(
    expectedState
  );
});
