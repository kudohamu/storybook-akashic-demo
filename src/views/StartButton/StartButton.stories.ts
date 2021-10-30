import { Story } from '@kudohamu/storybook-akashic';
import { action } from '@storybook/addon-actions';
import { StartButton, StartButtonParameter } from '.';

export default {
  title: 'HoppingWitch/StartButton',
};

const Template: Story<StartButtonParameter> = (params) => {
  const entity = new StartButton(params);
  entity.onPointUp.add(action('clicked!'));

  return entity;
};

export const Default = Template.bind({});
Default.storyName = 'スタートボタン';
