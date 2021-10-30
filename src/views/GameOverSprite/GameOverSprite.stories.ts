import { Story } from '@kudohamu/storybook-akashic';
import { action } from '@storybook/addon-actions';
import { GameOverSprite, GameOverSpriteParameter } from '.';

export default {
  title: 'HoppingWitch/GameOverSprite',
};

const Template: Story<GameOverSpriteParameter> = (params) => {
  const entity = new GameOverSprite({
    ...params,
    x: 80,
    y: 20,
  });
  entity.onEndAnimation.add(action('onEndAnimation'));

  return entity;
};

export const Default = Template.bind({});
Default.storyName = 'ゲームオーバー文字のスプライト';
