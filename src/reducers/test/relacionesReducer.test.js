import relacionesReducer from "../relacionesReducer";
import {
  doAddRelacion,
  doBorrarRelacion
} from "../../actions-creators/relaciones";

it("Añade relaciones", () => {
  const initialState = {};

  const expectedState = {
    "1": ["2", "3"]
  };

  const action = doAddRelacion("1", "5", "2", "3");

  expect(relacionesReducer(initialState, action)).toEqual(expectedState);
});

it("Borra relaciones", () => {
  const initialState = {
    "1": ["2", "3"],
    "4": ["5", "6"]
  };

  const expectedState = {
    "4": ["5", "6"]
  };

  const action = doBorrarRelacion("1");

  expect(relacionesReducer(initialState, action)).toEqual(expectedState);
});
