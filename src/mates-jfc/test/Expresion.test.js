import Expresion from "../Expresion";
import Dato from "../Dato";

var expresion = new Expresion("x^2 + x + 3");

test("Parábola con x = 2", () => {
  let vars = [];
  vars[0] = new Dato("x", 2);
  expect(expresion.calcular(vars)).toBe(9);
});

test("Parábola  a_1 = 2", () => {
  expresion.setExpresion("a_1^2 + a_1 + 3");
  let vars = [];
  vars[0] = new Dato("a_1", 2);
  expect(expresion.calcular(vars)).toBe(9);
});

test("Expresion con x = 2 e y =4", () => {
  expresion.setExpresion("x^2 + y + 3");
  let lista = expresion.getListaVariables();
  expect(lista[0].getSimbolo()).toEqual("x");
  expect(lista[1].getSimbolo()).toEqual("y");
  lista[0].setValor(2);
  lista[1].setValor(4);
  expect(expresion.calcular(lista)).toBe(11);
});

test("Expresion incorrecta x _2 + x + 3", () => {
  expect(() => {
    expresion.setExpresion("x _2 + x + 3");
  }).toThrow();
});

test("Expresion con if", () => {
  expresion.setExpresion("if(x>0,x^2,-x)");
  let vars = [];
  vars[0] = new Dato("x", 2);
  expect(expresion.calcular(vars)).toBe(4);
  vars[0] = new Dato("x", -2);
  expect(expresion.calcular(vars)).toBe(2);
});
