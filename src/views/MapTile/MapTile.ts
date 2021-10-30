import { Tile } from '@akashic-extension/akashic-tile';
import { TILE_WIDTH, TILE_HEIGHT } from '../../constants/settings';
const mapData = require('../../../game/text/map_data.json');

export type MapTileParameter = {
  scene: g.Scene;
  x?: number;
  y?: number;
};

export class MapTile extends Tile {
  constructor({ scene, x, y }: MapTileParameter) {
    super({
      scene,
      x,
      y,
      src: scene.asset.getImageById("map"),
      tileWidth: TILE_WIDTH,
      tileHeight: TILE_HEIGHT,
      tileData: mapData
    })
  }
}
