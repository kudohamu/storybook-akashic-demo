import { StartButton } from '../StartButton';
import { TitleSprite } from '../TitleSprite';

export type TitleUIParameter = {
  scene: g.Scene;
  x?: number;
  y?: number;
};

export class TitleUI extends g.E {
  readonly onClickStartButton = new g.Trigger();

  constructor(params: TitleUIParameter) {
    super(params);

    const title = new TitleSprite({ scene: this.scene, x: 128, y: 112 });
    this.append(title);

    const startButton = new StartButton({ scene: this.scene, x: 192, y: 272 });
    startButton.onPointUp.add(() => {
      startButton.touchable = false;
      startButton.modified();
      this.scene.setTimeout(() => this.onClickStartButton.fire(), 100);
    });
    this.append(startButton);
  }
}
