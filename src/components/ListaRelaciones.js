import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { List, Typography } from "antd";
import Relacion from "./Relacion";

const { Text } = Typography;

function ListaRelaciones(props) {
  return (
    <List header={<Text strong>Variable de Origen = Variable de Destino</Text>}>
      {Object.keys(props.relaciones).map(idRelacion => {
        let v1 = props.relaciones[idRelacion][0];
        let v2 = props.relaciones[idRelacion][1];

        return (
          <Relacion
            nombre1={props.variables[v1].nombre}
            nombre2={props.variables[v2].nombre}
            idRelacion={idRelacion}
            key={idRelacion}
          />
        );
      })}
    </List>
  );
}

function mapStateToProps(state) {
  const arrayIdRelaciones =
    state.entities.enlaces[state.seleccionado].relaciones;

  return {
    relaciones: R.pick(arrayIdRelaciones, state.entities.relaciones),
    variables: { ...state.entities.datos, ...state.entities.incognitas }
  };
}

export default connect(mapStateToProps)(ListaRelaciones);
