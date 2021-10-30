import { StorybookConfig } from '@storybook/core-common';

module.exports = <StorybookConfig>{
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|ts|jsx|tsx)"
  ],
  "addons": [{
    name: '@storybook/addon-essentials',
    options: {
      actions: true,
      backgrounds: false,
      controls: true,
      docs: false,
      viewport: false,
      toolbars: false
    }
  }]
};
