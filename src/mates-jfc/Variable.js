/* eslint-disable */
class Variable {
  constructor(simbolo, valor = undefined) {
    this._simbolo = "x";
    this.setSimbolo(simbolo);
    this._valor = valor;
  }

  setSimbolo(simbolo) {
    // Comprobar si el símbolo es válido
    this._simbolo = simbolo;
  }

  getSimbolo() {
    return this._simbolo;
  }

  setValor(valor) {
    this._valor = valor;
  }

  getValor() {
    return this._valor;
  }
}

export default Variable;
