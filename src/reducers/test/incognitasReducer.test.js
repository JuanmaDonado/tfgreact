import incognitasReducer from "../incognitasReducer";
import {
  doAddIncognita,
  doBorrarIncognita,
  doCambiarValorInicial
} from "../../actions-creators/incognitas";

it("añade incognitas", () => {
  const initial = {
    "9": { id: "5", nombre: "Temperatura", valorInicial: 0 },
    "10": { id: "6", nombre: "Temperatura", valorInicial: 0 }
  };

  const expected = {
    ...initial,
    "11": { id: "11", nombre: "Presion", valorInicial: 1 }
  };

  expect(
    incognitasReducer(initial, doAddIncognita("11", null, "Presion"))
  ).toEqual(expected);
});

it("borra incognitas", () => {
  const initial = {
    "9": { id: "5", nombre: "Temperatura", valorInicial: 0 },
    "10": { id: "6", nombre: "Temperatura", valorInicial: 0 }
  };
  const expected = {
    "9": { id: "5", nombre: "Temperatura", valorInicial: 0 }
  };

  expect(incognitasReducer(initial, doBorrarIncognita("10"))).toEqual(expected);
});

it("cambia incognitas", () => {
  const initial = {
    "9": { id: "5", nombre: "Temperatura", valorInicial: 0 },
    "10": { id: "6", nombre: "Temperatura", valorInicial: 0 }
  };

  const expected = {
    "9": { id: "5", nombre: "Temperatura", valorInicial: 5 },
    "10": { id: "6", nombre: "Temperatura", valorInicial: 0 }
  };

  expect(incognitasReducer(initial, doCambiarValorInicial("9", 5))).toEqual(
    expected
  );
});
