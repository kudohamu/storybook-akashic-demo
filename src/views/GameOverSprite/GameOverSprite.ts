export type GameOverSpriteParameter = {
  scene: g.Scene;
  x?: number;
  y?: number;
};

export class GameOverSprite extends g.Sprite {
  readonly onEndAnimation = new g.Trigger();

  private amp: number;
  private scaleAdd: number = 1;

  constructor({ scene, x, y }: GameOverSpriteParameter) {
    super({
      scene,
      x,
      y,
      src: scene.asset.getImageById("gameover"),
      scaleX: 1,
      scaleY: 1
    });

    this.amp = this.scene.game.width / 2;
    this.x = this.x + this.amp;
    this.scaleX += this.scaleAdd;
    this.scaleY += this.scaleAdd;

    this.onUpdate.add(() => {
      this.amp *= -0.9;
      this.scaleAdd *= 0.9;
      if (Math.abs(this.amp) < 1) {
          this.amp = 0;
          this.scaleAdd = 0;
          this.onUpdate.removeAll();
          this.onEndAnimation.fire();
      }
      this.x = 80 + this.amp;
      this.scaleX = 1 + this.scaleAdd;
      this.scaleY = 1 + this.scaleAdd;
      this.modified();
    });
  }
}
