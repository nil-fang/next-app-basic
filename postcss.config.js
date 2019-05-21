const postcssEasyImport = require('postcss-easy-import');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssEasyImport({ prefix: '_' }), // 文件名引入加前缀
    autoprefixer({ /* ...options */ }), // 自动添加兼容浏览器的前缀
  ],
};
