import Dato from "../../mates-jfc/Dato";
import generarDatos from "../generarDatos";

it("genera datos", () => {
  const datos = {
    "5": { id: "5", nombre: "Temperatura", valor: 15 },
    "6": { id: "6", nombre: "Temperatura", valor: 15 }
  };

  const mapa = {
    "5": { id: "5", nombre: "Temperatura", valor: 15, nombreSolver: "v_1" },
    "6": { id: "6", nombre: "Temperatura", valor: 15, nombreSolver: "v_2" }
  };

  const expected = [new Dato("v_1", 15), new Dato("v_2", 15)].sort();

  expect(generarDatos(datos, mapa).sort()).toEqual(expected);
});
