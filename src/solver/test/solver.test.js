import { crearMapa, solveEstado } from "../solver";

it("crea mapa de variables", () => {
  const original = {
    datos: {
      "5": { id: "5", nombre: "Temperatura", valor: 15 },
      "6": { id: "6", nombre: "Temperatura", valor: 15 }
    },
    incognitas: {
      "9": { id: "5", nombre: "Temperatura", valorInicial: 0 },
      "10": { id: "6", nombre: "Temperatura", valorInicial: 0 }
    }
  };

  const variables = { ...original.datos, ...original.incognitas };

  const expected = {
    "5": { nombre: "Temperatura", nombreSolver: "v_1" },
    "6": { nombre: "Temperatura", nombreSolver: "v_2" },
    "9": { nombre: "Temperatura", nombreSolver: "v_3" },
    "10": { nombre: "Temperatura", nombreSolver: "v_4" }
  };

  expect(crearMapa(variables)).toEqual(expected);
});

it("resuelve sistema", () => {
  const sampleState = {
    seleccionado: "3",
    entities: {
      equipos: {
        "1": {
          id: "1",
          nombre: "Condensador",
          datos: ["5"],
          incognitas: ["9", "11"],
          ecuaciones: ["7"]
        },
        "2": {
          id: "2",
          nombre: "Evaporador",
          datos: ["6"],
          incognitas: ["10"],
          ecuaciones: ["8"]
        }
      },
      datos: {
        "5": { id: "5", nombre: "A", valor: 5 },
        "6": { id: "6", nombre: "A", valor: 5 }
      },
      incognitas: {
        "9": { id: "9", nombre: "B", valorInicial: 1 },
        "10": { id: "10", nombre: "B", valorInicial: 1 },
        "11": { id: "11", nombre: "C", valorInicial: 1 }
      },
      ecuaciones: {
        "7": { id: "7", valor: "A+B+C=23" },
        "8": { id: "8", valor: "A+B=15" }
      },
      relaciones: {
        "12": ["9", "10"]
      }
    }
  };

  const mapaSoluciones = {
    "9": 10,
    "10": 10,
    "11": 8
  };

  expect(solveEstado(sampleState.entities)).toEqual(mapaSoluciones);
});
