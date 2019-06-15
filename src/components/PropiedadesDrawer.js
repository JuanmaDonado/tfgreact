import React from "react";
import { Drawer } from "antd";

import { connect } from "react-redux";

import TablaDeRelaciones from "./TablaDeRelaciones";
import TablaDePropiedades from "./TablaDePropiedades";
import { doToggleDrawer } from "../actions-creators/drawer";

function PropiedadesDrawer(props) {
  let contenido;

  if (props.isEquipo) {
    contenido = <TablaDePropiedades />;
  } else if (props.isEnlace) {
    contenido = <TablaDeRelaciones />;
  } else {
    contenido = "";
  }
  return (
    <Drawer
      title={props.drawerTitle}
      placement="right"
      visible={props.isDrawerOpen}
      width={400}
      onClose={props.handleCloseDrawer}
    >
      {contenido}
    </Drawer>
  );
}

function mapStateToProps(state) {
  let isEquipo = false;
  let isEnlace = false;
  let drawerTitle = "";

  const id = state.seleccionado;
  const { equipos, enlaces } = state.entities;

  if (id !== "") {
    if (equipos[id]) {
      isEquipo = true;
      drawerTitle = equipos[id].nombre;
    } else if (enlaces[id]) {
      isEnlace = true;
      drawerTitle = `${equipos[enlaces[id].origen].nombre} -> ${
        equipos[enlaces[id].destino].nombre
      }`;
    }
  }

  return {
    isDrawerOpen: state.isDrawerOpen,
    isEquipo,
    isEnlace,
    drawerTitle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleCloseDrawer: () => dispatch(doToggleDrawer())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropiedadesDrawer);
