import React, { useState } from "react";
import { Button, Typography, Form, Input } from "antd";
import { crearVisualizacionDeEquipo } from "../diagrama/diagrama";
const { Title } = Typography;

export default function BarraHerramientas(props) {
  const [inputText, setInputText] = useState("");

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleNuevoEquipoClick() {
    crearVisualizacionDeEquipo(inputText);
    setInputText("");
  }

  return (
    <Form layout="inline">
      <Form.Item>
        <Title level={4}>TFG</Title>
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="Nombre de equipo"
          value={inputText}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={handleNuevoEquipoClick}>Nuevo equipo</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={props.onResolver} type="primary">
          Resolver
        </Button>
      </Form.Item>
    </Form>
  );
}
