import Ecuacion from "../Ecuacion";
import Dato from "../Dato";
import Incognita from "../Incognita";

var ecuacion = new Ecuacion("x^2 - 4 = 0");

test("Resolver x^2 - 4 = 0", () => {
  let incognita = new Incognita("x");
  expect(ecuacion.resolver(incognita)).toBeCloseTo(2);
});

test("Resolver x^2 - 4 = 0, para x=-2", () => {
  let x = new Incognita("x");
  x.minimo = Number.NEGATIVE_INFINITY;
  x.maximo = 0;
  x.valorInicial = -3;
  expect(ecuacion.resolver(x)).toBeCloseTo(-2);
});

test("Resolver x^2 - 5 + y= 0, para y= 1", () => {
  let vars = [];
  vars[0] = new Dato("y", 1);
  let x = new Incognita("x");
  expect(ecuacion.resolver(x, vars)).toBeCloseTo(2);
});
