import React from "react";
import * as R from "ramda";
import { Select } from "antd";
import { connect } from "react-redux";

const { Option } = Select;

function VariableSelect(props) {
  return (
    <Select
      style={{ width: 200 }}
      placeholder={props.placeholder}
      value={props.value}
      onSelect={props.onSelect}
    >
      {props.arrayVariables.map(variable => (
        <Option key={variable.id}>{variable.nombre}</Option>
      ))}
    </Select>
  );
}

function mapStateToProps(state, props) {
  const { idEquipo, tipo } = props;
  const equipo = state.entities.equipos[idEquipo];
  const { datos, incognitas } = state.entities;

  const variables = { ...datos, ...incognitas };

  const arrayIdDatos = equipo.datos;
  let arrayIdVariables = equipo.incognitas;

  if (tipo === "origen") {
    arrayIdVariables = arrayIdVariables.concat(arrayIdDatos);
  }

  const arrayVariables = R.pipe(
    R.pick(arrayIdVariables),
    R.values,
    R.map(R.pick(["id", "nombre"]))
  )(variables);

  return {
    arrayVariables
  };
}

export default connect(mapStateToProps)(VariableSelect);
