import React from "react";
import { connect } from "react-redux";
import { List, Typography, Icon, Button } from "antd";
import { doBorrarRelacion } from "../actions-creators/relaciones";

const { Text } = Typography;

function Relacion(props) {
  function handleClick() {
    props.borrarRelacion(props.idRelacion);
  }
  return (
    <List.Item>
      <Text>
        {props.nombre1}={props.nombre2}
      </Text>
      <Button onClick={handleClick}>
        <Icon type="delete" theme="filled" />
      </Button>
    </List.Item>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    borrarRelacion: idRelacion => dispatch(doBorrarRelacion(idRelacion))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Relacion);
