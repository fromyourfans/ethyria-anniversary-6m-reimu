const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, 'docs'),
  transpileDependencies: [
    'vuetify',
  ],
  lintOnSave: false,
  chainWebpack: (config) => {
    // HTML Title used for OpenGraph linters (social media links)
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = 'Millie 6-Months';
      // eslint-disable-next-line no-param-reassign
      args[0].meta = {
        description: 'Happy 6-Month Anniversary Millie!',
        'og:title': 'Millie 6-Months',
        'og:type': 'website',
        'og:description': 'Happy 6-Month Anniversary Millie!',
        // 'og:image': 'https://birthday.ennaalouette.com/ogimage.png',
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Millie 6-Months',
        'twitter:description': 'Happy 6-Month Anniversary Millie!',
        // 'twitter:image': 'https://birthday.ennaalouette.com/ogimage.png',
      };
      return args;
    });
  },
  pwa: {
    name: 'Millie 6-Months',
    themeColor: '#102471',
    workboxOptions: {
      skipWaiting: true,
      exclude: [
        'CNAME',
        /(.*).css.map/g,
        /(.*).js.map/g,
      ],
    },
    assetsVersion: '2022_03_08_00_00',
    manifestOptions: {
      name: 'Millie 6-Months',
      short_name: 'Millie 6-Months',
      description: 'Happy 6-Month Anniversary Millie!',
      display: 'standalone',
      orientation: 'landscape',
      background_color: '#ffffff',
      start_url: './',
    },
  },
});
