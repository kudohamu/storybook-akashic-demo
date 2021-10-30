import { assetIds } from './constants/assets';
import { HoppingWitch } from './views/HoppingWitch';

export function main() {
  const scene = new g.Scene({ game: g.game, assetIds: assetIds });

  scene.onLoad.addOnce(() => {
    const hw = new HoppingWitch({ scene });
    scene.onPointUpCapture.add(() => hw.hopPlayer());
    scene.append(hw);
  });

  g.game.pushScene(scene);
}
