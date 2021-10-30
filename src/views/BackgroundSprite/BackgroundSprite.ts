export type BackgroundSpriteParameter = {
  scene: g.Scene;
  x?: number;
  y?: number;
};

export class BackgroundSprite extends g.Sprite {
  constructor({ scene, x, y }: BackgroundSpriteParameter) {
    super({
      scene,
      x,
      y,
      src: scene.asset.getImageById("background")
    });
  }
}
