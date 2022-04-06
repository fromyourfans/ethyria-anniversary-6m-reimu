const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/ethyria-anniversary-6m-reimu',
  outputDir: path.resolve(__dirname, 'docs'),
  transpileDependencies: [
    'vuetify',
  ],
  lintOnSave: false,
  chainWebpack: (config) => {
    // HTML Title used for OpenGraph linters (social media links)
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Reimu 6-Month Anniversary';
      // eslint-disable-next-line no-param-reassign
      args[0].meta = {
        description: 'Happy 6th Month Anniversary Reimu!',
        'og:title': 'Reimu 6-Month Anniversary',
        'og:type': 'website',
        'og:description': 'Happy 6th Month Anniversary Reimu!',
        // 'og:image': 'https://birthday.ennaalouette.com/ogimage.png',
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Reimu 6-Month Anniversary',
        'twitter:description': 'Happy 6th Month Anniversary Reimu!',
        // 'twitter:image': 'https://birthday.ennaalouette.com/ogimage.png',
      };
      return args;
    });
  },
  pwa: {
    name: 'Reimu 6-Month Anniversary',
    themeColor: '#102471',
    workboxOptions: {
      skipWaiting: true,
      exclude: [
        'CNAME',
        /(.*).css.map/g,
        /(.*).js.map/g,
      ],
    },
    assetsVersion: '2022_04_06_00_00',
    manifestOptions: {
      name: 'Reimu 6 Months',
      short_name: 'Reimu 6M',
      description: 'Happy 6th Month Anniversary Reimu!',
      display: 'standalone',
      orientation: 'landscape',
      background_color: '#ffffff',
      start_url: './',
    },
  },
});
