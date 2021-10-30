import { GameConfiguration } from '@akashic/game-configuration';
import { StorybookAkashicParameters } from '@kudohamu/storybook-akashic';
import { assetIds } from '../src/constants/assets';
const gameJson: GameConfiguration = require('../game/game.json');

export const parameters: StorybookAkashicParameters = {
  akashic: {
    assetIds: assetIds,
    configuration: gameJson,
  },
  options: {
    storySort: {
      order: ['DemoButton', 'HoppingWitch', ['HOPPING WITCH', '*']],
    },
  },
};
