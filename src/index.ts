import "./chess/styles.scss";
import { View } from "./chess/View";
import { Controller } from "./chess/Controller";
import { Model } from "./chess/Model";
import {Position} from "./chess/types";

// interface Move {
//     positionFrom: Position,
//     positionTo: Position,
// }

// const moves: Move[] = [{
//     positionFrom: {x: 4, y: 6},
//     positionTo: {x: 4, y: 4}
// },
// {
//     positionFrom: {x: 4, y: 1},
//     positionTo: {x: 4, y: 3}
// },
// {
//
//     positionFrom: {x: 5, y: 6},
//     positionTo: {x: 5, y: 4}
// },
// {
//     positionFrom: {x: 4, y:3},
//     positionTo: {x: 5, y: 4}
// },
// {
//     positionFrom: {x: 5, y:7},
//     positionTo: {x: 2, y: 4}
// }
// ]



    const moves = [
    {
        positionFrom: {
            x: 4,
            y: 6
        },
        positionTo: {
            x: 4,
            y: 4
        }
    },
        {
            positionFrom: {
                x: 4,
                y: 1
            },
            positionTo: {
                x: 4,
                y: 3
            }
        },
        {
            positionFrom: {
                x: 5,
                y: 6
            },
            positionTo: {
                x: 5,
                y: 4
            }
        },
        {
            positionFrom: {
                x: 4,
                y: 3
            },
            positionTo: {
                x: 5,
                y: 4
            }
        },
        {
            positionFrom: {
                x: 5,
                y: 7
            },
            positionTo: {
                x: 2,
                y: 4
            }
        },
        {
            positionFrom: {
                x: 3,
                y: 0
            },
            positionTo: {
                x: 7,
                y: 4
            }
        },
        {
            positionFrom: {
                x: 4,
                y: 7
            },
            positionTo: {
                x: 5,
                y: 7
            }
        },
        {
            positionFrom: {
                x: 1,
                y: 1
            },
            positionTo: {
                x: 1,
                y: 3
            }
        },
        {
            positionFrom: {
                x: 2,
                y: 4
            },
            "positionTo": {
                "x": 1,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 6,
                "y": 0
            },
            "positionTo": {
                "x": 5,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 6,
                "y": 7
            },
            "positionTo": {
                "x": 5,
                "y": 5
            }
        },
        {
            "positionFrom": {
                "x": 7,
                "y": 4
            },
            "positionTo": {
                "x": 7,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 3,
                "y": 6
            },
            "positionTo": {
                "x": 3,
                "y": 5
            }
        },
        {
            "positionFrom": {
                "x": 5,
                "y": 2
            },
            "positionTo": {
                "x": 7,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 5,
                "y": 5
            },
            "positionTo": {
                "x": 7,
                "y": 4
            }
        },
        {
            "positionFrom": {
                "x": 7,
                "y": 2
            },
            "positionTo": {
                "x": 6,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 7,
                "y": 4
            },
            "positionTo": {
                "x": 5,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 2,
                "y": 1
            },
            "positionTo": {
                "x": 2,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 6,
                "y": 6
            },
            "positionTo": {
                "x": 6,
                "y": 4
            }
        },
        {
            "positionFrom": {
                "x": 7,
                "y": 3
            },
            "positionTo": {
                "x": 5,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 7,
                "y": 7
            },
            "positionTo": {
                "x": 6,
                "y": 7
            }
        },
        {
            "positionFrom": {
                "x": 2,
                "y": 2
            },
            "positionTo": {
                "x": 1,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 7,
                "y": 6
            },
            "positionTo": {
                "x": 7,
                "y": 4
            }
        },
        {
            "positionFrom": {
                "x": 6,
                "y": 3
            },
            "positionTo": {
                "x": 6,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 7,
                "y": 4
            },
            "positionTo": {
                "x": 7,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 6,
                "y": 2
            },
            "positionTo": {
                "x": 6,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 3,
                "y": 7
            },
            "positionTo": {
                "x": 5,
                "y": 5
            }
        },
        {
            "positionFrom": {
                "x": 5,
                "y": 2
            },
            "positionTo": {
                "x": 6,
                "y": 0
            }
        },
        {
            "positionFrom": {
                "x": 2,
                "y": 7
            },
            "positionTo": {
                "x": 5,
                "y": 4
            }
        },
        {
            "positionFrom": {
                "x": 6,
                "y": 3
            },
            "positionTo": {
                "x": 5,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 1,
                "y": 7
            },
            "positionTo": {
                "x": 2,
                "y": 5
            }
        },
        {
            "positionFrom": {
                "x": 5,
                "y": 0
            },
            "positionTo": {
                "x": 2,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 2,
                "y": 5
            },
            "positionTo": {
                "x": 3,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 5,
                "y": 2
            },
            "positionTo": {
                "x": 1,
                "y": 6
            }
        },
        {
            "positionFrom": {
                "x": 5,
                "y": 4
            },
            "positionTo": {
                "x": 3,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 2,
                "y": 3
            },
            "positionTo": {
                "x": 6,
                "y": 7
            }
        },
        {
            "positionFrom": {
                "x": 4,
                "y": 4
            },
            "positionTo": {
                "x": 4,
                "y": 3
            }
        },
        {
            "positionFrom": {
                "x": 1,
                "y": 6
            },
            "positionTo": {
                "x": 0,
                "y": 7
            }
        },
        {
            "positionFrom": {
                "x": 5,
                "y": 7
            },
            "positionTo": {
                "x": 4,
                "y": 6
            }
        },
        {
            "positionFrom": {
                "x": 1,
                "y": 0
            },
            "positionTo": {
                "x": 0,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 5,
                "y": 3
            },
            "positionTo": {
                "x": 6,
                "y": 1
            }
        },
        {
            "positionFrom": {
                "x": 4,
                "y": 0
            },
            "positionTo": {
                "x": 3,
                "y": 0
            }
        },
        {
            "positionFrom": {
                "x": 5,
                "y": 5
            },
            "positionTo": {
                "x": 5,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 6,
                "y": 0
            },
            "positionTo": {
                "x": 5,
                "y": 2
            }
        },
        {
            "positionFrom": {
                "x": 3,
                "y": 2
            },
            "positionTo": {
                "x": 4,
                "y": 1
            }
        }
    ]

const zombe = (model: Model) => {
    moves.forEach((move, i) => {
        setTimeout(() => {
            model.figureControl(move.positionFrom, move.positionTo);
        }, 1500 * (i + 1))
    })
}

new Controller(new Model(), new View(), zombe);
