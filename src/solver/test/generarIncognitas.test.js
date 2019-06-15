import generarIncognitas from "../generarIncognitas";
import Incognita from "../../mates-jfc/Incognita";

it("genera incognitas", () => {
  const incognitas = {
    "5": { id: "5", nombre: "Temperatura", valorInicial: 1 },
    "6": { id: "6", nombre: "Temperatura", valorInicial: 2 }
  };

  const mapa = {
    "5": { id: "5", nombre: "Temperatura", valor: 15, nombreSolver: "v_1" },
    "6": { id: "6", nombre: "Temperatura", valor: 15, nombreSolver: "v_2" }
  };

  const expected = {
    ordenDeIds: ["5", "6"],
    arrayIncognitas: [new Incognita("v_1", 1), new Incognita("v_2", 2)]
  };

  expect(generarIncognitas(incognitas, mapa)).toEqual(expected);
});
