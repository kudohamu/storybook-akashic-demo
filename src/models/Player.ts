import { HOPPING_SPD, GRAVITY_ACC } from '../constants/settings';

export type PlayerParameter = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * プレイヤークラス
 */
export class Player {
  x: { x: number; y: number };
  v: { x: number; y: number };
  width: number;
  height: number;

  constructor({ x, y, width, height }: PlayerParameter) {
    this.width = width;
    this.height = height;
    this.x = { x, y };
    this.v = { x: 0, y: 0 };
  }

  /**
   * プレイヤー状態更新
   */
  update(fps: number, hopping: boolean) {
    var dt = 1 / fps;

    if (hopping) {
        this.v.y = HOPPING_SPD;
    } else {
        var a = { x: 0, y: GRAVITY_ACC };
        this.v.x += a.x * dt;
        this.v.y += a.y * dt;
    }
    this.x.x += this.v.x * dt;
    this.x.y += this.v.y * dt;
  }
}
