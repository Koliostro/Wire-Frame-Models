const drawing_area = document.querySelector(`.display`);

const graphics = new PIXI.Graphics();
const app = new PIXI.Application({ antialias: true, resizeTo: drawing_area });

drawing_area.appendChild(app.view);

export function line (x1, y1, x2, y2, color, thicness) {
    // Координаты начала
    graphics.position.set(x1, y1);
    // толщина и цвет
    graphics.lineStyle(thicness, color)
    // координаты конца
        .lineTo(x2, y2);
    app.stage.addChild(graphics);
}