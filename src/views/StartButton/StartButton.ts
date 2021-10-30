export type StartButtonParameter = {
  scene: g.Scene;
  x?: number;
  y?: number;
};

export class StartButton extends g.Sprite {
  constructor({ scene, x, y }: StartButtonParameter) {
    super({
      scene,
      src: scene.asset.getImageById("button_start"),
      x,
      y,
      touchable: true
    });

    this.onPointDown.add(() => {
      this.x += 4;
      this.y += 4;
      this.modified();
    });

    this.onPointUp.add(() => {
      this.x -= 4;
      this.y -= 4;
      this.modified();
    });
  }
}
