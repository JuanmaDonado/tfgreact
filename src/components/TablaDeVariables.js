import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, List, Input } from "antd";
import Variable from "./Variable";
import { doAddDato } from "../actions-creators/datos";
import { doAddIncognita } from "../actions-creators/incognitas";

function TablaDeVariables(props) {
  const [inputText, setInputText] = useState("");

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleButtonClick() {
    props.doAddVariable(props.tipo, props.idEquipo, inputText);
    setInputText("");
  }

  const header = (
    <div>
      <Input
        value={inputText}
        onChange={handleInputChange}
        placeholder="Nombre"
      />
      <Button type="button" onClick={handleButtonClick}>
        Añadir
      </Button>
    </div>
  );

  return (
    <List header={header}>
      {props.variablesAsIds.map(variableAsId => (
        <List.Item key={variableAsId}>
          <Variable variableAsId={variableAsId} tipo={props.tipo} />
        </List.Item>
      ))}
    </List>
  );
}

function mapStateToProps(state, props) {
  return {
    variablesAsIds: state.entities.equipos[state.seleccionado][props.tipo],
    idEquipo: state.seleccionado
  };
}

function mapDispatchToProps(dispatch) {
  function doAddVariable(tipo, idObjetivo, nombre) {
    if (tipo === "datos") {
      dispatch(doAddDato(undefined, idObjetivo, nombre));
    } else if (tipo === "incognitas") {
      dispatch(doAddIncognita(undefined, idObjetivo, nombre));
    }
  }

  return {
    doAddVariable
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablaDeVariables);
