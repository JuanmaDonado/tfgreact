A continuación se listan los componentes disponibles en la aplicación, así como una descripción de para qué se utilizan actualmente. Cabe destacar que, para los estilos, se utilizan componentes de la librería [ant-design.](https://ant.design/docs/react/introduce)

# App

Componente principal de la aplicación. Contiene **BarraHerramientas**, **PropiedadesDrawer** y **VentanaResultados**, así como los estilos necesarios para que estos se muestren correctamente

## BarraHerramientas

Barra de herramientas de la parte de inferior de la pantalla. Contiene un formulario con tres elementos, un campo de texto para el nombre del equipo, un botón para añadir equipo, y un botón para resolver el problema.

## PropiedadesDrawer

Panel lateral desplegable que se abre al hacer doble click en un equipo o un enlace. En caso de que el elemento seleccionado sea un equipo, contendrá el componente **TablaDePropiedades**. Si es un enlace, contendrá el componente **TablaDeRelaciones**.

### TablaDePropiedades

Contiene tres pestañas, una para datos, otra para incógnitas y otra para ecuaciones. La de datos e incógnitas son generadas por el componente **TablaDeVariables**, mientras que la de ecuaciones por el componente **TablaDeEcuaciones**

#### TablaDeVariables

El prop "tipos" acepta "datos" o "incógnitas". En función de lo que se le asigne, mostrará los datos o las incógnitas del estado. El componente incluye un campo para añadir nuevas variables así como una lista de las mismas. La lista está compuesta por componentes **Variable** que incluyen el nombre de la variable y un campo para modificar su valor numérico.

#### TablaDeEcuaciones

Contiene un campo de texto para añadir nuevas ecuaciones y una lista de componentes **Ecuacion** que muestran la ecuación como texto.

### TablaDeRelaciones

Contiene dos componentes **VariableSelect** y un componente **ListaRelaciones**

#### VariableSelect

Elemento Select que muestra todas las variables disponibles en el equipo que se le suministre.

#### ListaRelaciones

Lista de componentes **Relacion** que muestran todas las relaciones de un enlace

## VentanaResultados

Componente que se muestra al pulsar el botón Resolver, y que contiene los resultados numéricos del sistema de ecuaciones mostrados en una tabla.
