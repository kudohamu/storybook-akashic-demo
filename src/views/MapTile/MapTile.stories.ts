import { Story } from '@kudohamu/storybook-akashic';
import { GameConfiguration } from '@akashic/game-configuration';
const gameJson: GameConfiguration = require('../../../game/game.json');
import { MapTile, MapTileParameter } from '.';

export default {
  title: 'HoppingWitch/MapTile',
  parameters: {
    akashic: {
      configuration: {
        ...gameJson,
        width: 1200 // GameConfigurationの内容は各storyファイルから上書き可能
      }
    }
  }
};

const Template: Story<MapTileParameter> = (params) => new MapTile(params);

export const Default = Template.bind({});
Default.storyName = 'マップタイル';
Default.args = {
  x: -320
};
