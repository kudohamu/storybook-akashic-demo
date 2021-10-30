import { Story } from '@kudohamu/storybook-akashic';
import { ScoreLabel, ScoreLabelParameter } from '.';

export default {
  title: 'HoppingWitch/ScoreLabel',
};

const Template: Story<ScoreLabelParameter> = (params) => new ScoreLabel(params);

export const Default = Template.bind({});
Default.storyName = 'スコア表示用ラベル';
Default.args = {
  score: 2525,
  prefix: 'SCORE',
};
