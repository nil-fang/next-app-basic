
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(withSass({
  webpack: (config) => {
    /*
    * 修复依赖于'fs'模块的NPM包
    * 比如：找不到'fs'模块
    */
    const newConfig = {...config};
    newConfig.node = {
      fs: 'empty',
    };
    return config;
  },
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'my-build-id'
  },
  pageExtensions: ['jsx', 'js'],
  
}));
