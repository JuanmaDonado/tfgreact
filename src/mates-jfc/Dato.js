/* eslint-disable */
import Variable from "./Variable";

// Variable donde el valor no puede ser undefined
class Dato extends Variable {
  constructor(simbolo, valor) {
    super(simbolo, valor);
  }
}

export default Dato;
