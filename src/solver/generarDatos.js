import Dato from "../mates-jfc/Dato";

export default function generarDatos(datos, mapa) {
  const arrayDeDatos = Object.keys(datos).map(id => {
    return new Dato(mapa[id].nombreSolver, datos[id].valor);
  });

  return arrayDeDatos;
}
