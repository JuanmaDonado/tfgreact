import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
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

const logger = createLogger();

let store = createStore(rootReducer, undefined, applyMiddleware(logger));

export default store;
