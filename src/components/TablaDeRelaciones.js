import React, { useState } from "react";
import { Typography, Button } from "antd";
import { connect } from "react-redux";
import VariableSelect from "./VariableSelect";
import ListaRelaciones from "./ListaRelaciones";
import { doAddRelacion } from "../actions-creators/relaciones";

const { Title } = Typography;

function TablaDeRelaciones(props) {
  const [idVar1, setIdVar1] = useState(undefined);
  const [idVar2, setIdVar2] = useState(undefined);

  function handleClick() {
    props.addRelacion(props.idEnlace, idVar1, idVar2);
  }

  return (
    <div>
      <VariableSelect
        idEquipo={props.idOrigen}
        tipo="origen"
        placeholder="Equipo de origen"
        value={idVar1}
        onSelect={value => setIdVar1(value)}
      />
      <VariableSelect
        idEquipo={props.idDestino}
        tipo="destino"
        placeholder="Equipo de destino"
        value={idVar2}
        onSelect={value => setIdVar2(value)}
      />
      <Button onClick={handleClick}>Añadir relación</Button>
      <Title level={4}>Relaciones</Title>
      <ListaRelaciones />
    </div>
  );
}

function mapStateToProps(state) {
  const enlace = state.entities.enlaces[state.seleccionado];
  const { origen, destino } = enlace;

  return {
    idOrigen: origen,
    idDestino: destino,
    idEnlace: enlace.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addRelacion: (idEnlace, idVar1, idVar2) => {
      dispatch(doAddRelacion(undefined, idEnlace, idVar1, idVar2));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablaDeRelaciones);
