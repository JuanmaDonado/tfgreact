import { createStore, combineReducers } from "redux";
import equiposReducer from "../reducers/equiposReducer";
import enlacesReducer from "../reducers/enlacesReducer";
import datosReducer from "../reducers/datosReducer";
import incognitasReducer from "../reducers/incognitasReducer";
import ecuacionesReducer from "../reducers/ecuacionesReducer";
import seleccionadoReducer from "../reducers/seleccionadoReducer";
import relacionesReducer from "../reducers/relacionesReducer";
import drawerReducer from "../reducers/drawerReducer";

export const rootReducer = combineReducers({
  seleccionado: seleccionadoReducer,
  isDrawerOpen: drawerReducer,
  entities: combineReducers({
    equipos: equiposReducer,
    enlaces: enlacesReducer,
    datos: datosReducer,
    incognitas: incognitasReducer,
    ecuaciones: ecuacionesReducer,
    relaciones: relacionesReducer
  })
});

let store = createStore(rootReducer, undefined);

export default store;
