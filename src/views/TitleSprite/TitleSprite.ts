export type TitleSpriteParameter = {
  scene: g.Scene;
  x?: number;
  y?: number;
};

export class TitleSprite extends g.Sprite {
  private counter: number = 0;

  constructor({ scene, x, y }: TitleSpriteParameter) {
    super({
      scene,
      x,
      y,
      src: scene.asset.getImageById("title")
    });

    const initialY = y ?? 0;

    this.onUpdate.add(() => {
      this.counter = (this.counter + 1) % 180;
      this.y = initialY - 24 * Math.abs(Math.sin(5 * this.counter / 180 * Math.PI));
      this.modified();
    });
  }
}
