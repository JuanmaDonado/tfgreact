import React, { useState } from "react";
import BarraHerramientas from "./BarraHerramientas";
import VentanaResultados from "./VentanaResultados";
import PropiedadesDrawer from "./PropiedadesDrawer";
import { Layout } from "antd";
import "./App.css";

const { Content, Footer } = Layout;

function App(props) {
  const [isResultadosOpen, setIsResultadosOpen] = useState(false);

  function openResultados() {
    setIsResultadosOpen(true);
  }

  function closeResultados() {
    setIsResultadosOpen(false);
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Content className="diagrama" />
      <Footer>
        <BarraHerramientas onResolver={openResultados} />
      </Footer>
      <PropiedadesDrawer />
      {isResultadosOpen && (
        <VentanaResultados
          visible={isResultadosOpen}
          onCancel={closeResultados}
        />
      )}
    </Layout>
  );
}

export default App;
