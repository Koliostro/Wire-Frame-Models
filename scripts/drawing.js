const drawing_area = document.querySelector(`.display`);

const graphics = new PIXI.Graphics();
const app = new PIXI.Application({ antialias: true, resizeTo: drawing_area });

drawing_area.appendChild(app.view);

export function line (x1, y1, x2, y2, color, thicness) {
    // Set line`s start
    graphics.position.set(x1 , y1);
    // thicness and color of the line
    graphics.lineStyle(thicness, color)
    // end of a line
        .lineTo(x2 , y2);
    app.stage.addChild(graphics);
}

const vertex_of_tetrahedron = [
    [0,0,0],
    [2,0,3.5],
    [4,0,0],
    [2,3,1.7]
]

const edges_of_tetrahedron = [
    [0,1],
    [0,2],
    [0,3],
    [1,2],
    [1,3],
    [2,3]
]


export function projection(vertex, k) {
    let projection = []

    let x = null
    let y = null

    for (let i = 0; i < vertex.length; i++) {
        y = k * vertex[i][1] / (vertex[i][2] + k)
        x = k * vertex[i][0] / (vertex[i][2] + k)

        x = x.toFixed(2)
        y = y.toFixed(2)

        projection.push([])
        projection[i].push(x,y)
    }

    return projection
}

function scale(vertex, times) {
    for (let i = 0; i < vertex.length; i++) {
        for (let j = 0; j < vertex[i].length; j++) {
            vertex[i][j] *= times
        }
    }
    return vertex
}

export function draw_tetrahedron(k) {
    let projected_vertex = scale(projection(vertex_of_tetrahedron, k), 1)

    for (let i = 0; i < edges_of_tetrahedron.length; i++) {
        let start_point = edges_of_tetrahedron[i][0]
        let end_point = edges_of_tetrahedron[i][1]

        let x_start = projected_vertex[start_point][0]
        let y_start = projected_vertex[start_point][1]

        let x_end = projected_vertex[end_point][0]
        let y_end = projected_vertex[end_point][1]

        line(x_start, y_start, x_end, y_end, 0xc629, 2)

        console.log(x_start, y_start, x_end, y_end)

    }
}