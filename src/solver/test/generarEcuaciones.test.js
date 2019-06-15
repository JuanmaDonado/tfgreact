import {
  generarMapaEquipo,
  generarMapaEquipos,
  cambiarVariables,
  generarEcuacionesEquipos,
  cambiarRelacionesAEcuaciones,
  crearEcuacionesDesdeCadenas
} from "../generarEcuaciones";
import Ecuacion from "../../mates-jfc/Ecuacion";

it("genera mapa de Equipo", () => {
  const mapa = {
    "5": { id: "5", nombre: "Temperatura", valor: 15, nombreSolver: "v_1" },
    "6": { id: "6", nombre: "Presion", valor: 15, nombreSolver: "v_2" },
    "9": { id: "5", nombre: "Entalpia", valorInicial: 0, nombreSolver: "v_3" },
    "10": { id: "6", nombre: "Entropia", valorInicial: 0, nombreSolver: "v_4" }
  };

  const arrayDeVariables = ["5", "9"];

  const expected = {
    Temperatura: "v_1",
    Entalpia: "v_3"
  };

  expect(generarMapaEquipo(arrayDeVariables, mapa)).toEqual(expected);
});

it("genera ecuaciones de equipos", () => {
  const ecuaciones = {
    "5": {
      id: "5",
      valor: "Temperatura=Presion"
    },
    "9": {
      id: "9",
      valor: "Temperatura=Presion"
    }
  };
  const mapa = {
    "5": {
      Temperatura: "v_1",
      Presion: "v_2"
    },
    "6": {
      Temperatura: "v_1",
      Presion: "v_2"
    },
    "9": {
      Temperatura: "v_3",
      Presion: "v_4"
    },
    "10": {
      Temperatura: "v_3",
      Presion: "v_4"
    }
  };

  const expected = ["v_1=v_2", "v_3=v_4"];

  expect(generarEcuacionesEquipos(ecuaciones, mapa).sort()).toEqual(
    expected.sort()
  );
});

it("genera ecuaciones de relaciones", () => {
  const relaciones = {
    "1": ["3", "4"],
    "2": ["5", "6"]
  };

  const mapa = {
    "3": { nombreSolver: "v_1" },
    "4": { nombreSolver: "v_2" },
    "5": { nombreSolver: "v_3" },
    "6": { nombreSolver: "v_4" }
  };

  const expected = ["v_1=v_2", "v_3=v_4"];

  expect(cambiarRelacionesAEcuaciones(relaciones, mapa)).toEqual(expected);
});

it("crea ecuaciones desde cadenas", () => {
  const ecuaciones = ["v_1=v_2", "v_3=v_4"];

  const expected = [new Ecuacion("v_1=v_2"), new Ecuacion("v_3=v_4")];

  expect(crearEcuacionesDesdeCadenas(ecuaciones)).toEqual(expected);
});

it("genera mapa de todos los equipos", () => {
  const equipos = {
    "1": {
      id: "1",
      nombre: "Condensador",
      datos: ["3"],
      incognitas: ["4"],
      ecuaciones: ["5", "6"]
    },
    "2": {
      id: "2",
      nombre: "Condensador",
      datos: ["7"],
      incognitas: ["8"],
      ecuaciones: ["9", "10"]
    }
  };

  const mapa = {
    "3": { id: "3", nombre: "Temperatura", valor: 15, nombreSolver: "v_1" },
    "4": { id: "4", nombre: "Presion", valor: 15, nombreSolver: "v_2" },
    "7": { id: "7", nombre: "Temperatura", valor: 15, nombreSolver: "v_3" },
    "8": { id: "8", nombre: "Presion", valor: 15, nombreSolver: "v_4" }
  };

  const expected = {
    "5": {
      Temperatura: "v_1",
      Presion: "v_2"
    },
    "6": {
      Temperatura: "v_1",
      Presion: "v_2"
    },
    "9": {
      Temperatura: "v_3",
      Presion: "v_4"
    },
    "10": {
      Temperatura: "v_3",
      Presion: "v_4"
    }
  };

  expect(generarMapaEquipos(equipos, mapa)).toEqual(expected);
});

it("cambia variables", () => {
  const ecuacion = "x+2=z+3";
  const mapa = {
    x: "v_1",
    z: "v_2"
  };

  expect(cambiarVariables(ecuacion, mapa)).toEqual("(v_1 + 2)=(v_2 + 3)");
});
