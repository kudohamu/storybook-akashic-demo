export type BackButtonParameter = {
  scene: g.Scene;
  x?: number;
  y?: number;
};

export class BackButton extends g.Sprite {
  constructor({ scene, x, y }: BackButtonParameter) {
    super({
      scene,
      x,
      y,
      src: scene.asset.getImageById("button_back"),
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
