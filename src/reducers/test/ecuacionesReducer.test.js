import ecuacionesReducer from "../ecuacionesReducer";
import {
  doAddEcuacion,
  doBorrarEcuacion
} from "../../actions-creators/ecuaciones";

it("añade ecuaciones", () => {
  const initial = {};
  const expected = {
    "1": { id: "1", valor: "a+b=2" }
  };

  expect(ecuacionesReducer(initial, doAddEcuacion("1", "3", "a+b=2"))).toEqual(
    expected
  );
});

it("borra ecuaciones", () => {
  const initial = {
    "1": { id: "1", valor: "a+b=2" }
  };
  const expected = {};

  expect(ecuacionesReducer(initial, doBorrarEcuacion("1"))).toEqual(expected);
});
