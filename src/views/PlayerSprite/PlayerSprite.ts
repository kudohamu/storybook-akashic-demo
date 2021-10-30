export type PlayerSpriteParameter = {
  scene: g.Scene;
  x?: number;
  y?: number;
  hidden?: boolean;
};

export class PlayerSprite extends g.Sprite {
  constructor({ scene, x, y, hidden }: PlayerSpriteParameter) {
    super({
      scene,
      src: scene.asset.getImageById("player"),
      x,
      y,
      hidden
    });
  }
}
