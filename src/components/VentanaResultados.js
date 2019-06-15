import React from "react";
import { connect } from "react-redux";
import { Modal, Table, Typography } from "antd";
import { solveEstado } from "../solver/solver";
import * as R from "ramda";

const { Text } = Typography;

const columns = [
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre"
  },
  {
    title: "Equipo",
    dataIndex: "equipo",
    key: "equipo"
  },
  {
    title: "Resultado",
    dataIndex: "resultado",
    key: "resultado"
  }
];

function VentanaResultados(props) {
  return (
    <Modal
      title="Resultados"
      visible={props.visible}
      onCancel={props.onCancel}
      onOk={props.onCancel}
      centered
    >
      {props.haySolucion ? (
        <Table dataSource={props.dataSource} columns={columns} size="small" />
      ) : (
        <Text type="danger">{props.errorMsg}</Text>
      )}
    </Modal>
  );
}

function dataRowFromSolucion(equipos, incognitas, solucion) {
  return {
    key: solucion.id,
    nombre: incognitas[solucion.id].nombre,
    equipo: findNombreDeEquipo(equipos, solucion.id),
    resultado: solucion.solucion
  };
}

function findNombreDeEquipo(equipos, idIncognita) {
  for (let idEquipo in equipos) {
    let equipo = equipos[idEquipo];
    if (equipo.incognitas.some(R.equals(idIncognita))) {
      return equipo.nombre;
    } else {
      return "";
    }
  }
}

function mapStateToProps(state) {
  let haySolucion = true;
  let errorMsg = "";
  let dataSource = [];

  try {
    const mapaSoluciones = solveEstado(state.entities);
    const { equipos, incognitas } = state.entities;
    dataSource = R.pipe(
      R.map(R.partial(dataRowFromSolucion, [equipos, incognitas])),
      R.values
    )(mapaSoluciones);
  } catch (error) {
    errorMsg = error;
    haySolucion = false;
  }

  return {
    dataSource,
    errorMsg,
    haySolucion
  };
}

export default connect(mapStateToProps)(VentanaResultados);
