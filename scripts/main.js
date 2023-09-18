import * as drawing from "/scripts/drawing.js"

let vertex_of_tetrahedron = [
    [0, 0, 0],
    [2, 0, 3.5],
    [4, 0, 0],
    [2, 3, 1.7]
]

const edges_of_tetrahedron = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3]
]

drawing.drawing(vertex_of_tetrahedron, 10, edges_of_tetrahedron)

console.log("Done something!")