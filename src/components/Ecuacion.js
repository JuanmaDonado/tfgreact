import React from "react";
import { connect } from "react-redux";
import { Typography, Button, Form, Icon } from "antd";
import { doBorrarEcuacion } from "../actions-creators/ecuaciones";
import * as R from "ramda";

const { Text } = Typography;

function Ecuacion(props) {
  function handleClick() {
    props.borrarEcuacion(props.ecuacionAsId);
  }
  return (
    <Form layout="inline">
      <Form.Item>
        <Text>{props.ecuacion}</Text>
      </Form.Item>
      <Form.Item>
        <Button onClick={handleClick}>
          <Icon type="delete" theme="filled" />
        </Button>
      </Form.Item>
    </Form>
  );
}

function mapStateToProps(state, props) {
  return {
    ecuacion: state.entities.ecuaciones[props.ecuacionAsId].valor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    borrarEcuacion: R.compose(
      dispatch,
      doBorrarEcuacion
    )
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ecuacion);
