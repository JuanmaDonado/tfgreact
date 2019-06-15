import React from "react";
import TablaDeVariables from "./TablaDeVariables";
import TablaDeEcuaciones from "./TablaDeEcuaciones";
import { borrarSeleccionado } from "../diagrama/diagrama";
import { Tabs, Button } from "antd";

const { TabPane } = Tabs;

function TablaDePropiedades(props) {
  function handleBorrarEquipo() {
    borrarSeleccionado();
  }

  return (
    <div>
      <Button type="danger" onClick={handleBorrarEquipo}>
        Borrar equipo
      </Button>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Datos" key="1">
          <TablaDeVariables tipo="datos" />
        </TabPane>
        <TabPane tab="Incognitas" key="2">
          <TablaDeVariables tipo="incognitas" />
        </TabPane>
        <TabPane tab="Ecuaciones" key="3">
          <TablaDeEcuaciones isEquipo={true} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TablaDePropiedades;
