import { Story } from '@kudohamu/storybook-akashic';
import { HoppingWitch, HoppingWitchParameter } from '.';

export default {
  title: 'HoppingWitch/HOPPING WITCH',
};

const Template: Story<HoppingWitchParameter> = (params) => {
  const entity = new HoppingWitch(params);
  params.scene.onPointUpCapture.add(() => entity.hopPlayer());

  return entity;
};

export const Default = Template.bind({});
Default.storyName = 'ゲーム画面';
