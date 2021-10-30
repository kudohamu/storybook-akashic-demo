import { FONT_SIZE } from '../../constants/settings';
import { GameCore } from '../../models/GameCoore';
import { BackgroundSprite } from '../BackgroundSprite';
import { GameFont } from '../GameFont';
import { MapTile } from '../MapTile';
import { PlayerSprite } from '../PlayerSprite';
import { ResultUI } from '../ResultUI';
import { ScoreLabel } from '../ScoreLabel';
import { TitleUI } from '../TitleUI';
import { VersionLabel } from '../VersionLabel';

export type HoppingWitchParameter = {
  scene: g.Scene;
};

export class HoppingWitch extends g.E {
  private font: g.BitmapFont;
  private gameCore: GameCore;

  constructor({ scene }: HoppingWitchParameter) {
    super({ scene });

    this.font = new GameFont({ scene });
    this.gameCore = new GameCore({
      fps: scene.game.fps,
      gameData: {
        width: scene.game.width,
        height: scene.game.height,
      },
      mapData: JSON.parse(scene.asset.getTextById('map_data').data),
      playerData: {
        x: scene.game.width / 2,
        y: scene.game.height / 2,
        width: scene.asset.getImageById('player').width,
        height: scene.asset.getImageById('player').height,
      },
    });

    const background = new BackgroundSprite({ scene });
    this.append(background);

    const mapTile = new MapTile({ scene });
    this.append(mapTile);

    const player = new PlayerSprite({ scene, hidden: true });
    this.append(player);

    const currentScoreLabel = new ScoreLabel({
      scene,
      x: 4,
      y: 4,
      font: this.font,
      prefix: 'SCORE',
    });
    this.append(currentScoreLabel);

    const hightScoreLabel = new ScoreLabel({
      scene,
      y: 4,
      prefix: 'HI',
    });
    hightScoreLabel.x = scene.game.width - (FONT_SIZE * hightScoreLabel.text.length + 4);
    this.append(hightScoreLabel);

    const versionLabel = new VersionLabel({
      scene,
      font: this.font,
      y: scene.game.height - (FONT_SIZE + 4),
    });
    versionLabel.x = scene.game.width - (FONT_SIZE * versionLabel.text.length + 4);
    this.append(versionLabel);

    const titleUI = new TitleUI({ scene });
    titleUI.onClickStartButton.add(() => {
      this.gameCore.start();
      titleUI.destroy();
    });
    this.append(titleUI);

    this.onUpdate.add(() => {
      const prevState = this.gameCore.state;

      // ゲーム状態更新
      this.gameCore.update();

      // プレイヤーキャラの描画位置など更新
      if (this.gameCore.pc) {
        player.show();
        player.x = this.gameCore.pc.x.x;
        player.y = this.gameCore.pc.x.y;
        player.scaleX = this.gameCore.scrollSpeed >= 0 ? 1 : -1;
        player.modified();
      } else {
        player.hide();
      }

      // スコア描画更新
      currentScoreLabel.score = this.gameCore.score;
      hightScoreLabel.score = Math.max(hightScoreLabel.score, this.gameCore.score);

      // タイル位置更新
      mapTile.x = -this.gameCore.scroll;
      mapTile.modified();

      // バージョンラベル表示状態更新
      this.gameCore.state === 'title' ? versionLabel.show() : versionLabel.hide();

      if (prevState !== 'result' && this.gameCore.state === 'result') {
        const resultUI = new ResultUI({ scene });
        resultUI.onClickBackButton.add(() => {
          this.gameCore.reset();
          resultUI.destroy();

          const titleUI = new TitleUI({ scene });
          titleUI.onClickStartButton.add(() => {
            this.gameCore.start();
            titleUI.destroy();
          });
          this.append(titleUI);
        });

        this.append(resultUI);
      }
    });
  }

  hopPlayer() {
    if (this.gameCore.state === 'playing') {
      this.gameCore.touched = true;
    }
  }
}
