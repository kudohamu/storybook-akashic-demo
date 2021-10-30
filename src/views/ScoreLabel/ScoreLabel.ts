import { FONT_SIZE } from '../../constants/settings';
import { makeScoreText } from '../../utils/makeScoreText';
import { GameFont } from '../GameFont';

export type ScoreLabelParameter = {
  scene: g.Scene;
  font?: g.BitmapFont;
  x?: number;
  y?: number;
  prefix: string;
  score?: number;
};

export class ScoreLabel extends g.Label {
  private prefix: string;
  private _score: number;

  constructor({ scene, font, x, y, score, prefix }: ScoreLabelParameter) {
    super({
      scene: scene,
      text: "",
      font: font ?? new GameFont({ scene }),
      fontSize: FONT_SIZE,
      x,
      y,
    });

    this.prefix = prefix;
    this._score = score ?? 0;
    this.score = this._score;
  }

  get score(): number {
    return this._score;
  }

  set score(score: number) {
    this._score = score;
    this.text = makeScoreText(score, this.prefix);
    this.invalidate();
  }
}
