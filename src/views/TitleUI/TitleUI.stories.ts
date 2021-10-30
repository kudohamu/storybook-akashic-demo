import { Story } from '@kudohamu/storybook-akashic';
import { action } from '@storybook/addon-actions';
import { TitleUI, TitleUIParameter } from '.';

export default {
  title: 'HoppingWitch/TitleUI',
};

const Template: Story<TitleUIParameter> = (params) => {
  const entity = new TitleUI(params);
  entity.onClickStartButton.add(action('onClickStartButton'));

  return entity;
};

export const Default = Template.bind({});
Default.storyName = 'タイトル画面のUI';
