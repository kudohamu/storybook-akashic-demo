import { SCROLL_SPD, TILE_WIDTH, TILE_HEIGHT } from '../constants/settings';
import { Player } from './Player';

export type GameCoreParameter = {
  fps: number;
  gameData: {
    width: number;
    height: number;
  };
  mapData: number[][];
  playerData: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

export class GameCore {
  readonly fps: number;
  readonly gameData: {
    width: number;
    height: number;
  };
  readonly mapData: number[][];
  readonly playerData: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  state: 'title' | 'playing' | 'result' = 'title';
  scroll = 0;
  scrollSpeed = SCROLL_SPD;
  touched = false;
  pc: Player | null = null;
  score = 0;

  constructor({ fps, gameData, mapData, playerData }: GameCoreParameter) {
    this.gameData = gameData;
    this.fps = fps;
    this.mapData = mapData;
    this.playerData = playerData;

    this.reset();
  }

  /**
   * 初期化
   */
  reset() {
    this.state = "title";
    this.scroll = 0;
    this.scrollSpeed = SCROLL_SPD;
    this.touched = false;
    this.pc = null;
    this.score = 0;
  }

  /**
   * ゲーム開始
   */
  start() {
    this.state = "playing";
    this.scroll = 0;
    this.scrollSpeed = SCROLL_SPD;
    this.touched = false;
    this.pc = new Player(this.playerData);
    this.score = 0;
  }

  /**
   * ゲーム状態更新
   */
  update() {
    const dt = 1 / this.fps;

    if (this.state !== "result") {
        this.scroll += this.scrollSpeed * dt;
        if (this.scroll <= 0 || this.scroll >= this.mapData[0].length * TILE_WIDTH - this.gameData.width) {
            this.scrollSpeed *= -1;
        }

        if (this.pc) {
            this.pc.update(this.fps, this.touched);
            if (this.checkCollision()) {
                this.state = "result";
            } else {
                ++this.score;
            }
        }
    }

    this.touched = false;
  }

  /**
   * 当たり判定
   */
   checkCollision(): boolean {
    if (!this.pc) return false;

    const top = Math.floor(this.pc.x.y / TILE_HEIGHT);
    const bottom = Math.floor((this.pc.x.y + this.pc.width) / TILE_HEIGHT);
    const left = Math.floor((this.pc.x.x + this.scroll) / TILE_WIDTH);
    const right = Math.floor((this.pc.x.x + this.scroll + this.pc.width) / TILE_WIDTH);

    for (let y = top; y <= bottom; y++) {
        for (let x = left; x <= right; x++) {
            if (this.mapData[y][x] !== -1) {
                return true;
            }
        }
    }

    return false;
   }
}
