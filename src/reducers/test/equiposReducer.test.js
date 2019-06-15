import equiposReducer from "../equiposReducer";
import { doAddEquipo, doBorrarEquipo } from "../../actions-creators/equipos";
import {
  doAddIncognita,
  doBorrarIncognita
} from "../../actions-creators/incognitas";
import { doAddDato, doBorrarDato } from "../../actions-creators/datos";
import {
  doAddEcuacion,
  doBorrarEcuacion
} from "../../actions-creators/ecuaciones";

const sampleState = {
  "1": {
    id: "1",
    nombre: "Condensador",
    datos: ["5", "6"],
    incognitas: ["9", "10"],
    ecuaciones: ["7", "8"]
  },
  "2": {
    id: "2",
    nombre: "Condensador",
    datos: ["5", "6"],
    incognitas: ["9", "10"],
    ecuaciones: ["7", "8"]
  }
};

it("añade equipos", () => {
  const initial = {};
  const expected = {
    "1": {
      id: "1",
      nombre: "Condensador",
      datos: [],
      incognitas: [],
      ecuaciones: []
    }
  };

  expect(equiposReducer(initial, doAddEquipo("1", "Condensador"))).toEqual(
    expected
  );
});
