// タイルの幅
export const TILE_WIDTH = 32;

// タイルの高さ
export const TILE_HEIGHT = 32;

// 重力加速度
export const GRAVITY_ACC = 500;

// ホップ初速度
export const HOPPING_SPD = -Math.sqrt((TILE_HEIGHT * 2) * 2 * GRAVITY_ACC);

// スクロール速度
export const SCROLL_SPD = (TILE_WIDTH * 2) / (Math.abs(HOPPING_SPD) / GRAVITY_ACC * 2);

// フォントサイズ
export const FONT_SIZE = 16;
