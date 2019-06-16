/* eslint-disable */
import Variable from "./Variable";

class Incognita extends Variable {
  constructor(simbolo, valorInicial = 1) {
    super(simbolo, undefined);
    this.minimo = Number.NEGATIVE_INFINITY;
    this.maximo = Number.POSITIVE_INFINITY;
    this.valorInicial = valorInicial;
  }
}

export default Incognita;
