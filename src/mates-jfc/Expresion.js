import { Parser } from "expr-eval";
import Variable from "./Variable";

class Expresion {
  constructor(expresion) {
    this._expresion = "1";
    this._parser = Parser.parse(this._expresion);
    this.setExpresion(expresion);
  }

  setExpresion(expresion) {
    this._expresion = expresion;
    try {
      this._parser = Parser.parse(this._expresion);
    } catch (error) {
      throw error.message + " en '" + this._expresion + "'";
    }
  }

  getListaVariables() {
    let variables = [];
    try {
      let variablesParser = this._parser.variables();
      for (let i = 0; i < variablesParser.length; i++) {
        variables.push(new Variable(variablesParser[i]));
      }
    } catch (error) {
      throw error.message + " en '" + this._expresion + "'";
    }
    return variables;
  }

  calcular(datos) {
    try {
      let objeto = {};
      let lista = datos.forEach(dato => {
        objeto[dato.getSimbolo()] = dato.getValor();
      });
      var valor = this._parser.evaluate(objeto);
      return valor;
    } catch (error) {
      throw error.message + " en '" + this._expresion + "'";
    }
  }
}

export default Expresion;
