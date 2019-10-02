A continuación se muestra un estado de ejemplo de la Store de Redux, para ilustrar su estructura. Como se puede observar, cuando un objeto "tiene" otro, por ejemplo, un equipo tiene un dato, en el equipo se guarda el ID del dato, y el dato se almacena en su propio objeto dentro de "entities". Este método se llama "normalizar el estado" y se explica en la [documentación de Redux.](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)

```javascript
{
  seleccionado: '04e60748-4e2d-45ad-bc38-6fc2ae72aa22',
  isDrawerOpen: false,
  entities: {
    equipos: {
      'cee243eb-1506-4201-93d5-76a485aadd97': {
        id: 'cee243eb-1506-4201-93d5-76a485aadd97',
        nombre: 'A',
        datos: [
          '829b6d73-29cd-413c-b4b5-1a89194cd010'
        ],
        incognitas: [
          'b9af9ec6-aa5d-41c6-87a3-fc4f5de2a4a4'
        ],
        ecuaciones: [
          '61ee341e-9d54-43db-a7a2-4e404c5d5f55'
        ]
      },
      'f9a52737-0aef-4690-9a9f-370d552d599b': {
        id: 'f9a52737-0aef-4690-9a9f-370d552d599b',
        nombre: 'B',
        datos: [
          'cb5ced2d-eb7c-4dc9-8155-dad9c7941a84'
        ],
        incognitas: [
          'ec30ca2c-18bc-4913-8dec-bc0dc252ce31',
          '0018a336-7268-4296-83b8-637ac1e993ef'
        ],
        ecuaciones: [
          '39999755-58a5-4018-b08e-a1fa9772d6e1'
        ]
      }
    },
    enlaces: {
      '04e60748-4e2d-45ad-bc38-6fc2ae72aa22': {
        id: '04e60748-4e2d-45ad-bc38-6fc2ae72aa22',
        origen: 'cee243eb-1506-4201-93d5-76a485aadd97',
        destino: 'f9a52737-0aef-4690-9a9f-370d552d599b',
        relaciones: [
          'de9d43ad-0e7c-4fe3-a667-a9ea4495a9b9'
        ]
      }
    },
    datos: {
      '829b6d73-29cd-413c-b4b5-1a89194cd010': {
        id: '829b6d73-29cd-413c-b4b5-1a89194cd010',
        nombre: 'dat1',
        valor: 0
      },
      'cb5ced2d-eb7c-4dc9-8155-dad9c7941a84': {
        id: 'cb5ced2d-eb7c-4dc9-8155-dad9c7941a84',
        nombre: 'dat2',
        valor: 0
      }
    },
    incognitas: {
      'b9af9ec6-aa5d-41c6-87a3-fc4f5de2a4a4': {
        id: 'b9af9ec6-aa5d-41c6-87a3-fc4f5de2a4a4',
        nombre: 'inc1',
        valorInicial: 1
      },
      'ec30ca2c-18bc-4913-8dec-bc0dc252ce31': {
        id: 'ec30ca2c-18bc-4913-8dec-bc0dc252ce31',
        nombre: 'inc2',
        valorInicial: 1
      },
      '0018a336-7268-4296-83b8-637ac1e993ef': {
        id: '0018a336-7268-4296-83b8-637ac1e993ef',
        nombre: 'inc3',
        valorInicial: 1
      }
    },
    ecuaciones: {
      '61ee341e-9d54-43db-a7a2-4e404c5d5f55': {
        id: '61ee341e-9d54-43db-a7a2-4e404c5d5f55',
        valor: 'dat1=inc1'
      },
      '39999755-58a5-4018-b08e-a1fa9772d6e1': {
        id: '39999755-58a5-4018-b08e-a1fa9772d6e1',
        valor: 'dat2=inc2'
      }
    },
    relaciones: {
      'de9d43ad-0e7c-4fe3-a667-a9ea4495a9b9': [
        '829b6d73-29cd-413c-b4b5-1a89194cd010',
        '0018a336-7268-4296-83b8-637ac1e993ef'
      ]
    }
  }
}
```
