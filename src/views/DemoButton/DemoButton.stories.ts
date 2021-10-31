import { Story } from '@kudohamu/storybook-akashic';
import { DemoButton, DemoButtonParameter } from '.';

export default {
  title: 'DemoButton/DemoButton',
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

const Template: Story<DemoButtonParameter> = (params) => {
  return new DemoButton({
    width: 200,
    height: 56,
    ...params,
  });
};

export const Default = Template.bind({});
Default.storyName = 'デモ用のボタン';
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.storyName = '無効化状態';
Disabled.args = {
  disabled: true,
};
