import { Story } from '@kudohamu/storybook-akashic';
import { TILE_WIDTH } from '../../constants/settings';
const mapData = require('../../../game/text/map_data.json');
import { MapTile, MapTileParameter } from '.';

export default {
  title: 'HoppingWitch/MapTile',
  argTypes: {
    x: {
      control: { type: 'range', min: -1 * mapData.length * TILE_WIDTH, max: 0, step: TILE_WIDTH },
    },
  },
};

const Template: Story<MapTileParameter> = (params) => new MapTile(params);

export const Default = Template.bind({});
Default.storyName = 'マップタイル';
Default.args = {
  x: -1 * mapData.length * TILE_WIDTH,
};
