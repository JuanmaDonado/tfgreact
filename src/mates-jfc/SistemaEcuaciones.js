import Variable from "./Variable";
import gaussJordan from "./gaussJordan";

class SistemaEcuaciones {
  constructor() {
    this.nCifras = 5;
    this.nIterMax = 1000;
  }

  // Todo funcion listaIncognitas(ecuaciones, datos=[])
  // Que devuelva una lista con las incognitas reales del sistema

  resolver(ecuaciones, incognitas, datos = []) {
    let inc = 0.01; //Incremento para aproximar el Jacobiano
    let iter = 0;
    let resuelto = false;
    // Recuento
    let nEcuaciones = ecuaciones.length;
    let nIncognitas = incognitas.length;
    let nDatos = datos.length;
    if (nIncognitas != nEcuaciones) {
      throw "Error: El número de ecuaciones no es igual al número de incógnitas";
    }
    let x_ant = [];
    let x_int = [];
    let x_act = [];
    let residuos = [];
    let variables = [];
    let F = [];
    let J = [];
    let J_1F = [];
    let i = 0,
      j = 0,
      k = 0;
    // valores iniciales
    for (i = 0; i < nIncognitas; i++) {
      x_ant[i] = new Variable(
        incognitas[i].getSimbolo(),
        incognitas[i].valorInicial
      );
      x_int[i] = new Variable(
        incognitas[i].getSimbolo(),
        incognitas[i].valorInicial
      );
      J[i] = []; // jacobiano
    }

    // iteración
    while (iter < this.nIterMax) {
      variables = [...x_ant, ...datos];

      for (i = 0; i < nEcuaciones; i++) {
        F[i] = ecuaciones[i].getResiduo(variables);
      }

      //x_act = x_ant - JM^-1*FM
      //Jacobiano
      for (j = 0; j < nEcuaciones; j++) {
        for (k = 0; k < nEcuaciones; k++) {
          x_int[k].setValor(x_ant[k].getValor());
        }
        // incrementamos el elemento j
        x_int[j].setValor(x_int[j].getValor() + inc);
        variables = [...x_int, ...datos];
        for (k = 0; k < nEcuaciones; k++) {
          residuos[k] = ecuaciones[k].getResiduo(variables);
        }
        for (i = 0; i < nEcuaciones; i++) {
          J[i][j] = (residuos[i] - F[i]) / inc;
        }
      }

      // resolver
      J_1F = gaussJordan.solve(J, F);
      resuelto = true;

      // calcular próximo x
      for (i = 0; i < nEcuaciones; i++) {
        x_act[i] = x_ant[i].getValor() - J_1F[i];
        // Comprobar que no excede los límites
        if (x_act[i] > incognitas[i].maximo) {
          x_act[i] = incognitas[i].maximo - inc;
        } else if (x_act[i] < incognitas[i].minimo) {
          x_act[i] = incognitas[i].minimo + inc;
        }

        // Comprobar si ha convergido, usando el error relativo
        if (!this._haConvergido(x_act[i], x_ant[i].getValor())) {
          resuelto = false;
        }
        x_ant[i].setValor(x_act[i]);
      }

      if (resuelto) {
        return x_act;
      }
      iter++;
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

export default SistemaEcuaciones;
