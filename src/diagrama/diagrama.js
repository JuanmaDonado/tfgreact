import * as joint from "jointjs";
import store from "../store/store";
import { doAddEquipo, doBorrarEquipo } from "../actions-creators/equipos";
import { doConectarEnlace, doBorrarEnlace } from "../actions-creators/enlaces";
import { doCambiarSeleccion } from "../actions-creators/seleccion";
import { doToggleDrawer } from "../actions-creators/drawer";

let graph, paper;

export default function crearDiagrama(container) {
  graph = new joint.dia.Graph();

  paper = new joint.dia.Paper({
    el: document.querySelector(".diagrama"),
    model: graph,
    width: "100%",
    height: "100%",
    gridSize: 10,
    drawGrid: true,
    defaultRouter: { name: "manhattan" },
    linkPinning: false,
    interactive: { vertexAdd: false }
  });

  graph.on("add", cell => {
    if (cell.isElement()) {
      store.dispatch(doAddEquipo(cell.id, cell.attr("label/text")));
    }
  });

  graph.on("remove", cell => {
    if (cell.isElement()) {
      store.dispatch(doBorrarEquipo(cell.id));
    }
    if (cell.isLink()) {
      store.dispatch(doBorrarEnlace(cell.id));
    }
  });

  paper.on("link:connect", linkView => {
    store.dispatch(
      doConectarEnlace(
        linkView.model.id,
        linkView.model.attributes.source.id,
        linkView.model.attributes.target.id
      )
    );
  });

  paper.on("element:pointerdown", cellView => {
    limpiarSeleccionados();
    cellView.highlight(cellView);
    store.dispatch(doCambiarSeleccion(cellView.model.id));
  });

  paper.on("link:pointerclick", function(linkView) {
    limpiarSeleccionados();
    store.dispatch(doCambiarSeleccion(linkView.model.id));
  });

  paper.on("link:pointerdblclick", linkView => {
    store.dispatch(doCambiarSeleccion(linkView.model.id));
    store.dispatch(doToggleDrawer());
  });

  paper.on("element:pointerdblclick", () => {
    store.dispatch(doToggleDrawer());
  });

  paper.on("blank:pointerdown", limpiarSeleccionados);
}

function limpiarSeleccionados() {
  paper.findViewsInArea(paper.getContentArea()).forEach(cell => {
    cell.unhighlight();
  });

  store.dispatch(doCambiarSeleccion(""));
}

export function crearVisualizacionDeEquipo(nombre) {
  const port1 = {
    group: "inputs"
  };

  const port2 = {
    group: "outputs"
  };

  const visualizacion = new joint.shapes.standard.Rectangle({
    ports: {
      groups: {
        inputs: {
          position: {
            name: "left",
            args: {}
          },
          attrs: { circle: { magnet: true } }
        },
        outputs: {
          position: {
            name: "right",
            args: {}
          },
          attrs: { circle: { magnet: true } }
        }
      },
      items: [port1, port2]
    }
  });
  visualizacion.position(800, 400);
  visualizacion.resize(100, 40);
  visualizacion.attr({
    body: {
      fill: "white"
    },
    label: {
      text: nombre,
      fill: "black"
    },
    root: {
      magnet: "false"
    }
  });
  visualizacion.addTo(graph);
}

export function borrarSeleccionado() {
  let seleccion = store.getState().seleccionado;
  let isEquipo = store.getState().entities.equipos[seleccion];

  if (isEquipo) {
    graph.getCell(seleccion).remove();
  }
}
