import SistemaEcuaciones from "../mates-jfc/SistemaEcuaciones";
import generarDatos from "./generarDatos";
import generarIncognitas from "./generarIncognitas";
import {
  generarMapaEquipos,
  generarEcuacionesEquipos,
  cambiarRelacionesAEcuaciones,
  crearEcuacionesDesdeCadenas
} from "./generarEcuaciones";

export function crearMapa(variables) {
  let mapa = {};
  let i = 1;

  for (let id in variables) {
    mapa[id] = {
      nombre: variables[id].nombre,
      nombreSolver: `v_${i}`
    };
    i++;
  }

  return mapa;
}

export function solveEstado(entities) {
  const { equipos, datos, incognitas, ecuaciones, relaciones } = entities;

  const mapa = crearMapa({ ...datos, ...incognitas });

  const arrayDatos = generarDatos(datos, mapa);
  const { ordenDeIds, arrayIncognitas } = generarIncognitas(incognitas, mapa);

  const mapaCambios = generarMapaEquipos(equipos, mapa);
  const ecuacionesAsStrings = [
    ...generarEcuacionesEquipos(ecuaciones, mapaCambios),
    ...cambiarRelacionesAEcuaciones(relaciones, mapa)
  ];
  const arrayEcuaciones = crearEcuacionesDesdeCadenas(ecuacionesAsStrings);

  const sistema = new SistemaEcuaciones();
  const solucion = sistema.resolver(
    arrayEcuaciones,
    arrayIncognitas,
    arrayDatos
  );

  return crearMapaSoluciones(ordenDeIds, solucion);
}

function crearMapaSoluciones(ordenDeIds, solucion) {
  let mapaSoluciones = {};

  ordenDeIds.forEach((idIncognita, index) => {
    mapaSoluciones[idIncognita] = {
      id: idIncognita,
      solucion: solucion[index]
    };
  });

  return mapaSoluciones;
}
