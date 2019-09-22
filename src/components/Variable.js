import React from "react";
import { doCambiarDato, doBorrarDato } from "../actions-creators/datos";
import {
  doCambiarValorInicial,
  doBorrarIncognita
} from "../actions-creators/incognitas";
import { connect } from "react-redux";
import { Form, Typography, Button, InputNumber, Icon } from "antd";

const { Text } = Typography;

function Variable(props) {
  function handleChange(number) {
    props.doCambiarVariable(props.tipo, props.variableAsId, parseFloat(number));
  }

  function handleClick() {
    props.doBorrarVariable(props.tipo, props.variableAsId);
  }
  return (
    <Form layout="inline">
      <Form.Item>
        <Text>{props.nombre}</Text>
      </Form.Item>
      <Form.Item>
        <InputNumber step={0.001} value={props.valor} onChange={handleChange} />
      </Form.Item>
      <Form.Item>
        <Button onClick={handleClick}>
          <Icon type="delete" />
        </Button>
      </Form.Item>
    </Form>
  );
}

function mapStateToProps(state, props) {
  let { nombre, valor } = state.entities[props.tipo][props.variableAsId];
  if (valor === undefined) {
    valor = state.entities[props.tipo][props.variableAsId].valorInicial;
  }
  return {
    nombre,
    valor
  };
}

function mapDispatchToProps(dispatch) {
  function doCambiarVariable(tipo, idVariable, nuevoValor) {
    if (tipo === "datos") {
      dispatch(doCambiarDato(idVariable, nuevoValor));
    } else if (tipo === "incognitas") {
      dispatch(doCambiarValorInicial(idVariable, nuevoValor));
    }
  }

  function doBorrarVariable(tipo, idVariable) {
    if (tipo === "datos") {
      dispatch(doBorrarDato(idVariable));
    } else if (tipo === "incognitas") {
      dispatch(doBorrarIncognita(idVariable));
    }
  }

  return {
    doCambiarVariable,
    doBorrarVariable
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Variable);
