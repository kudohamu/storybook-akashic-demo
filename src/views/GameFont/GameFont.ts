import { FONT_SIZE } from '../../constants/settings';

export type GameFontParameter = {
  scene: g.Scene;
};

export class GameFont extends g.BitmapFont {
  constructor({ scene }: GameFontParameter) {
    super({
        src: scene.asset.getImageById("font16"),
        map: JSON.parse(scene.asset.getTextById("glyph_area").data),
        defaultGlyphWidth: FONT_SIZE,
        defaultGlyphHeight: FONT_SIZE
    })
  }
}
