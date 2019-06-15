export const sampleState = {
    seleccionado: "2",
    entities: {
        "equipos": {
            "1": {
                id: "1",
                nombre: "Condensador",
                datos: ["5", "6"],
                incognitas: ["9", "10"],
                ecuaciones: ["7", "8"]
            },
            "2": {
                id: "2",
                nombre: "Condensador",
                datos: ["5", "6"],
                incognitas: ["9", "10"],
                ecuaciones: ["7", "8"]
            },
        },
        "enlaces": {
            "3": {
                id: "3",
                origen: "1",
                destino: "2",
                ecuaciones: ["7", "8"]
            },
            "4": {
                id: "4",
                origen: "2",
                destino: "1",
                ecuaciones: ["7", "8"]
            },
        },
        "datos": {
            "5": { id: "5", nombre: "Temperatura", valor: 15 },
            "6": { id: "6", nombre: "Temperatura", valor: 15 },
        },
        "incognitas": {
            "9": { id: "5", nombre: "Temperatura", valorInicial: 0},
            "10": { id: "6", nombre: "Temperatura", valorInicial: 0},
        },
        "ecuaciones": {
            "7": { id: "7", valor: "a+b=2"},
            "8": { id: "8", valor: "a+b=2"},
        }
    }
}
