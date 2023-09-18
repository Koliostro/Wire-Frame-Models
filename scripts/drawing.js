const drawing_area = document.querySelector(`#display`);
const ctx = drawing_area.getContext("2d");


function projection(vertex, distance_to_screen, number) {
    let x = ((vertex[number][0] * distance_to_screen) / Math.abs(vertex[number][2] + distance_to_screen)) * 50 + 250
    let y = ((vertex[number][1] * distance_to_screen) / Math.abs(vertex[number][2] + distance_to_screen)) * 50 + 250

    x = x.toFixed(2)
    y = y.toFixed(2)

    return [x,y]
}

function rotation_x(vertex, angle) {
    for(let num = 0; num < vertex.length; num++) {
        let x_new =  vertex[num][0]
        let y_new =  vertex[num][1] * Math.cos(angle) -  vertex[num][2] * Math.sin(angle)
        let z_new =  vertex[num][1] * Math.sin(angle) +  vertex[num][2] * Math.cos(angle)

        vertex[num][0] = x_new
        vertex[num][1] = y_new
        vertex[num][2] = z_new
    }
    return vertex
} 

function rotation_y(vertex, angle) {
    for(let num = 0; num < vertex.length; num++) {
        let x_new =  vertex[num][2] * Math.sin(angle) +  vertex[num][0] * Math.cos(angle)
        let y_new =  vertex[num][1]
        let z_new =  vertex[num][2] * Math.cos(angle) -  vertex[num][0] * Math.sin(angle)

        vertex[num][0] = x_new
        vertex[num][1] = y_new
        vertex[num][2] = z_new
    }
    return vertex
} 

function rotation_z(vertex, angle) {
    for(let num = 0; num < vertex.length; num++) {
        let x_new =  vertex[num][0] * Math.cos(angle) -  vertex[num][1] * Math.cos(angle)
        let y_new =  vertex[num][0] * Math.sin(angle) +  vertex[num][1] * Math.cos(angle)
        let z_new =  vertex[num][2]
        
        vertex[num][0] = x_new
        vertex[num][1] = y_new
        vertex[num][2] = z_new
    }
    return vertex
} 

function rotation(vertex, angle_x, angle_y, angle_z) {
    vertex = rotation_x(vertex, angle_x)
    vertex = rotation_y(vertex, angle_y)
    vertex = rotation_z(vertex, angle_z)

    return vertex
} 

export function drawing(vertex, distance_to_screen, edges) {
    ctx.beginPath();
    for (let num = 0; num < edges.length; num++) {
        const start = rotation(projection(vertex, distance_to_screen, edges[num][0]), 0.01, 0.01, 0.01)
        const end = rotation(projection(vertex, distance_to_screen, edges[num][1]), 0.01, 0.01, 0.01)
        
        // const start = projection(vertex, distance_to_screen, edges[num][0])
        // const end = projection(vertex, distance_to_screen, edges[num][1])

        console.log('start = ', start, 'end = ', end)

        ctx.moveTo(start[0], start[1])
        ctx.lineTo(end[0], end[1])
    
    }
    ctx.stroke()
}