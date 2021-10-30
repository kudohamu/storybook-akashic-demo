import { GameConfiguration } from '@akashic/game-configuration';
const gameJson: GameConfiguration = require('../../game/game.json');

export const assetIds = Object.keys(gameJson.assets);
