import { Story } from '@kudohamu/storybook-akashic';
import { action } from '@storybook/addon-actions';
import { ResultUI, ResultUIParameter } from '.';

export default {
  title: 'HoppingWitch/ResultUI',
};

const Template: Story<ResultUIParameter> = (params) => {
  const entity = new ResultUI(params);
  entity.onClickBackButton.add(action('onClickBackButton'));

  return entity;
};

export const Default = Template.bind({});
Default.storyName = 'リザルト画面のUI';
