/* eslint-disable */
import Expresion from "./Expresion";

class Ecuacion {
  constructor(ecuacion) {
    this._ecuacion = "0 = 0";
    this._miembros = [];
    this._expresion = new Expresion("0");
    this.nCifras = 5;
    this.nIterMax = 100;
    this.setEcuacion(ecuacion);
  }

  setEcuacion(ecuacion) {
    this._ecuacion = ecuacion;
    this._miembros = ecuacion.split("=");
    if (this._miembros.length === 1) {
      throw "No se encuentra = en '" + ecuacion + "'";
    } else if (this._miembros.length > 2) {
      throw "Más de un = en '" + ecuacion + "'";
    } else {
      this._expresion.setExpresion(
        "( " + this._miembros[0] + ") - (" + this._miembros[1] + " )"
      );
    }
  }

  getListaVariables() {
    return this._expresion.getListaVariables();
  }

  getResiduo(variables) {
    return this._expresion.calcular(variables);
  }

  resolver(incognita, datos = []) {
    let xAnterior, xIncrementada, xActual, pendiente;
    let fAnterior, fIncrementada;
    let incremento = 0.01;
    let haConvergido = false;

    xAnterior = incognita.valorInicial;
    let vars = [];

    for (let i = 0; i < this.nIterMax; i++) {
      xIncrementada = xAnterior + incremento;
      incognita.setValor(xAnterior);
      vars = [...datos, incognita];
      fAnterior = this._expresion.calcular(vars);
      incognita.setValor(xIncrementada);
      vars = [...datos, incognita];
      fIncrementada = this._expresion.calcular(vars);

      pendiente = (fIncrementada - fAnterior) / (xIncrementada - xAnterior);
      if (pendiente === 0) {
        // perturbar
        xActual = xIncrementada;
      } else {
        xActual = xAnterior - fAnterior / pendiente;
      }
      haConvergido = false;
      // comprobar límites
      if (xActual > incognita.maximo) {
        xActual = incognita.maximo - incremento;
        haConvergido = false;
      } else if (xActual < incognita.minimo) {
        xActual = incognita.minimo + incremento;
        haConvergido = false;
      } else {
        haConvergido = this._haConvergido(xActual, xAnterior);
      }

      if (haConvergido) {
        return xActual;
      }

      xAnterior = xActual;
    }

    throw "Nº de iteraciones: " +
      this.nIterMax +
      " superado sin encontrar solución";
  }

  _haConvergido(xActual, xAnterior) {
    let ordenMagnitud;
    if (xActual === 0) {
      ordenMagnitud = 1;
    } else {
      ordenMagnitud = Math.ceil(Math.log10(Math.abs(xActual)));
    }
    var tolerancia = Math.pow(10, ordenMagnitud - this.nCifras);
    if (ordenMagnitud > this.nCifras) {
      // Números grandes todos los valores no decimales iguales
      return Math.abs(xActual - xAnterior) < 0.1;
    } else {
      return Math.abs(xActual - xAnterior) < tolerancia;
    }
  }
}

export default Ecuacion;
