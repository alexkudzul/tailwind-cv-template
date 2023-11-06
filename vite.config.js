const { resolve } = require('path');
module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),

        // Add more pages here

        // name_page: resolve(__dirname, 'name_page.html'),
        // name_page: resolve(__dirname, 'name_page.html'),
        // name_page: resolve(__dirname, 'name_page.html'),
        // name_page: resolve(__dirname, 'name_page.html'),
      },
    },
  },
};
