import { Story } from '@kudohamu/storybook-akashic';
import { TitleSprite, TitleSpriteParameter } from '.';

export default {
  title: 'HoppingWitch/TitleSprite',
};

const Template: Story<TitleSpriteParameter> = (params) =>
  new TitleSprite({
    ...params,
    x: 10,
    y: 30,
  });

export const Default = Template.bind({});
Default.storyName = 'タイトル文字のスプライト';
