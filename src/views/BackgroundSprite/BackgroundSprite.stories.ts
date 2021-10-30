import { Story } from '@kudohamu/storybook-akashic';
import { BackgroundSprite, BackgroundSpriteParameter } from '.';

export default {
  title: 'HoppingWitch/BackgroundSprite',
};

const Template: Story<BackgroundSpriteParameter> = (params) => new BackgroundSprite(params);

export const Default = Template.bind({});
Default.storyName = '背景画像のスプライト';
