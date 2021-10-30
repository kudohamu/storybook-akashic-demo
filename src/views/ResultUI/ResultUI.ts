import { BackButton } from "../BackButton";
import { GameOverSprite } from "../GameOverSprite";

export type ResultUIParameter = {
  scene: g.Scene;
  x?: number;
  y?: number;
};

export class ResultUI extends g.E {
  readonly onClickBackButton = new g.Trigger();

  constructor(params: ResultUIParameter) {
    super(params);

    const backButton = new BackButton({ scene: this.scene, x: 192, y: 272 });
    backButton.onPointUp.add(() => {
      backButton.touchable = false;
      backButton.modified();
      this.scene.setTimeout(() => this.onClickBackButton.fire(), 100);
    });

    const gameOverSprite = new GameOverSprite({
      scene: this.scene,
      x: 80,
      y: 160
    });
    gameOverSprite.onEndAnimation.add(() => this.append(backButton));
    this.append(gameOverSprite);
  }
}
