import { Story } from '@kudohamu/storybook-akashic';
import { PlayerSprite, PlayerSpriteParameter } from '.';

export default {
  title: 'HoppingWitch/PlayerSprite',
};

const Template: Story<PlayerSpriteParameter> = (params) => new PlayerSprite(params);

export const Default = Template.bind({});
Default.storyName = 'プレイヤーのスプライト';
