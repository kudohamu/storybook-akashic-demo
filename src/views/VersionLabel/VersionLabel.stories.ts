import { Story } from '@kudohamu/storybook-akashic';
import { VersionLabel, VersionLabelParameter } from '.';

export default {
  title: 'HoppingWitch/VersionLabel',
};

const Template: Story<VersionLabelParameter> = (params) => new VersionLabel(params);

export const Default = Template.bind({});
Default.storyName = 'ゲームのバージョン表示用ラベル';
