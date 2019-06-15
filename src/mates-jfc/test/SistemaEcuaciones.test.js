import SistemaEcuaciones from "../SistemaEcuaciones";
import Ecuacion from "../Ecuacion";
import Incognita from "../Incognita";
import Dato from "../Dato";

var ecuaciones = [];
ecuaciones[0] = new Ecuacion("x + y -1 = 0");
ecuaciones[1] = new Ecuacion("x - y = 0");

var incognitas = [];
incognitas[0] = new Incognita("x");
incognitas[1] = new Incognita("y");

const sistema = new SistemaEcuaciones();

test("Resolver [x + y -1 = 0], [x - y = 0]", () => {
  const solucion = sistema.resolver(ecuaciones, incognitas);
  expect(solucion[0]).toBeCloseTo(0.5);
  expect(solucion[1]).toBeCloseTo(0.5);
});

test("Resolver [x^2 + y^2 -1 = 0], [x - y = 0]", () => {
  ecuaciones[0].setEcuacion("x^2 + y^2 -1 = 0");
  const solucion = sistema.resolver(ecuaciones, incognitas);
  expect(solucion[0]).toBeCloseTo(Math.sqrt(2) / 2);
  expect(solucion[1]).toBeCloseTo(Math.sqrt(2) / 2);
});

test("Resolver [x^2 + y^2 -2 + z = 0], [x - y + 1 = z], z = 1", () => {
  ecuaciones[0].setEcuacion("x^2 + y^2 -2 + z = 0");
  ecuaciones[1].setEcuacion("x - y + 1 = z");
  const datos = [new Dato("z", 1)];
  const solucion = sistema.resolver(ecuaciones, incognitas, datos);
  expect(solucion[0]).toBeCloseTo(Math.sqrt(2) / 2);
  expect(solucion[1]).toBeCloseTo(Math.sqrt(2) / 2);
});

test("Resolver [x^2 + y^2 -2 + z = 0], [x - y + 1 = z], [z = 1]", () => {
  ecuaciones[0].setEcuacion("x^2 + y^2 -2 + z = 0");
  ecuaciones[1].setEcuacion("x - y + 1 = z");
  ecuaciones[2] = new Ecuacion("z = 1");
  incognitas[2] = new Incognita("z");
  const solucion = sistema.resolver(ecuaciones, incognitas);
  expect(solucion[0]).toBeCloseTo(Math.sqrt(2) / 2);
  expect(solucion[1]).toBeCloseTo(Math.sqrt(2) / 2);
  expect(solucion[2]).toBeCloseTo(1);
});

test("Resolver [x^2 + y^2 - 1 = 0], [x - y = 0 ], [z + t = 2], [z - t = 0]", () => {
  ecuaciones[0].setEcuacion("x^2 + y^2 - 1 = 0");
  ecuaciones[1].setEcuacion("x - y = 0");
  ecuaciones[2] = new Ecuacion("z + t = 2");
  ecuaciones[3] = new Ecuacion("z - t = 0");
  incognitas[2] = new Incognita("z");
  incognitas[3] = new Incognita("t");
  const solucion = sistema.resolver(ecuaciones, incognitas);
  expect(solucion[0]).toBeCloseTo(Math.sqrt(2) / 2);
  expect(solucion[1]).toBeCloseTo(Math.sqrt(2) / 2);
  expect(solucion[2]).toBeCloseTo(1);
  expect(solucion[3]).toBeCloseTo(1);
});

test("Prueba", () => {
  const eqs = [new Ecuacion("x+y=3"), new Ecuacion("2*x+y=5")];
  const incogs = [new Incognita("y"), new Incognita("x")];

  const solucion = sistema.resolver(eqs, incogs);
  expect(solucion[0]).toBeCloseTo(1);
  expect(solucion[1]).toBeCloseTo(2);
});
