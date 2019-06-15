import Incognita from "../mates-jfc/Incognita";

export default function generarIncognitas(incognitasObject, mapa) {
  let ordenDeIds = [];
  let arrayIncognitas = [];

  for (let id in incognitasObject) {
    ordenDeIds.push(id);
    arrayIncognitas.push(
      new Incognita(
        mapa[id]["nombreSolver"],
        incognitasObject[id]["valorInicial"]
      )
    );
  }

  return {
    ordenDeIds,
    arrayIncognitas
  };
}
