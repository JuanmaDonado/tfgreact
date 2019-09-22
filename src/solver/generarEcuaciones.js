import { Parser } from "expr-eval";
import Ecuacion from "../mates-jfc/Ecuacion";

export function generarMapaEquipos(equipos, mapaIds) {
  let mapaEquipos = {};

  for (let idEquipo in equipos) {
    let { ecuaciones, datos, incognitas } = equipos[idEquipo];

    for (let idEcuacion of ecuaciones) {
      let arrayDeVariables = [...datos, ...incognitas];
      mapaEquipos = {
        ...mapaEquipos,
        [idEcuacion]: generarMapaEquipo(arrayDeVariables, mapaIds)
      };
    }

    /*     ecuaciones.forEach(idEcuacion => {
      let arrayDeVariables = [...datos, ...incognitas];
      mapaEquipos = {
        ...mapaEquipos,
        [idEcuacion]: generarMapaEquipo(arrayDeVariables, mapaIds)
      };
    }); */
  }

  return mapaEquipos;
}

export function generarMapaEquipo(arrayDeVariables, mapaIds) {
  let mapaEquipo = {};

  arrayDeVariables.forEach(id => {
    let { nombre, nombreSolver } = mapaIds[id];
    mapaEquipo[nombre] = nombreSolver;
  });

  return mapaEquipo;
}

export function cambiarVariables(ecuacion, mapa) {
  let miembros = ecuacion.split("=").map(miembro => Parser.parse(miembro));

  for (let variableOriginal in mapa) {
    miembros = miembros.map(miembro =>
      miembro.substitute(variableOriginal, mapa[variableOriginal])
    );
  }

  let nuevaEcuacion = miembros[0].toString() + "=" + miembros[1].toString();

  return nuevaEcuacion;
}

export function generarEcuacionesEquipos(ecuaciones, mapaDeCambios) {
  let arrayDeEcuacionesCambiadas = [];

  for (let idEcuacion in ecuaciones) {
    arrayDeEcuacionesCambiadas.push(
      cambiarVariables(ecuaciones[idEcuacion].valor, mapaDeCambios[idEcuacion])
    );
  }

  return arrayDeEcuacionesCambiadas;
}

export function cambiarRelacionesAEcuaciones(relaciones, mapaDeIds) {
  let arrayDeEcuaciones = [];

  for (let idRelacion in relaciones) {
    let relacion = relaciones[idRelacion];
    let v1 = mapaDeIds[relacion[0]].nombreSolver;
    let v2 = mapaDeIds[relacion[1]].nombreSolver;
    arrayDeEcuaciones.push(`${v1}=${v2}`);
  }

  return arrayDeEcuaciones;
}

export function crearEcuacionesDesdeCadenas(arrayDeEcuaciones) {
  return arrayDeEcuaciones.map(ecuacionAsString => {
    return new Ecuacion(ecuacionAsString);
  });
}
