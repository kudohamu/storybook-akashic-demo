import { Story } from '@kudohamu/storybook-akashic';
import { action } from '@storybook/addon-actions';
import { BackButton, BackButtonParameter } from '.';

export default {
  title: 'HoppingWitch/BackButton',
};

const Template: Story<BackButtonParameter> = (params) => {
  const element = new BackButton(params);
  element.onPointUp.add(action('clicked!'));

  return element;
};

export const Default = Template.bind({});
Default.storyName = 'タイトルに戻るボタン';
