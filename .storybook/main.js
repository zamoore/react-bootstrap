const path = require('path');

module.exports = {
  stories: [
    '../src/**/story.mdx',
    '../src/**/story.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        '@app': path.resolve(__dirname, '..', './src'),
        '@components': path.resolve(__dirname, '..', './src/components'),
        '@pages': path.resolve(__dirname, '..', './src/pages'),
      },
    };

    return config;
  },
};
