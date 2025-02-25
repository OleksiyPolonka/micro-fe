const { merge } = require('webpack-merge');
const ModularFederation = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

packageJson.dependency

const domain = process.env.PRODUCTION_DOMAIN

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },

  plugins: [
    new ModularFederation({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
