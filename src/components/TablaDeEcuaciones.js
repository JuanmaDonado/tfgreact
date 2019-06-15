import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, List, Input } from "antd";
import Ecuacion from "./Ecuacion";
import { doAddEcuacion } from "../actions-creators/ecuaciones";

function TablaDeEcuaciones(props) {
  const [inputEq, setInputEq] = useState("");

  function handleInputChange(e) {
    setInputEq(e.target.value);
  }

  function handleClick() {
    props.addEcuacion(props.idObjetivo, inputEq);
    setInputEq("");
  }
  return (
    <div>
      <Input value={inputEq} onChange={handleInputChange} />
      <List
        header={
          <Button type="button" onClick={handleClick}>
            Añadir
          </Button>
        }
      >
        {props.ecuacionesAsIds.map(ecuacionAsId => (
          <List.Item key={ecuacionAsId}>
            <Ecuacion ecuacionAsId={ecuacionAsId} />
          </List.Item>
        ))}
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  let ecuacionesAsIds = state.entities.equipos[state.seleccionado].ecuaciones;

  return {
    ecuacionesAsIds,
    idObjetivo: state.seleccionado
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addEcuacion: (idObjetivo, valor) =>
      dispatch(doAddEcuacion(undefined, idObjetivo, valor))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablaDeEcuaciones);
