import { FONT_SIZE } from '../../constants/settings';
import { GameFont } from '../GameFont';

export type VersionLabelParameter = {
  scene: g.Scene;
  font?: g.BitmapFont;
  x?: number;
  y?: number;
};

export class VersionLabel extends g.Label {
  constructor({ scene, font, x, y }: VersionLabelParameter) {
    super({
      scene: scene,
      text: "",
      font: font ?? new GameFont({ scene }),
      fontSize: FONT_SIZE,
      x,
      y
    });

    this.text = `ver ${scene.asset.getTextById("version").data.replace(/[\r\n]/g, "")}`;
    this.invalidate();
  }
}
