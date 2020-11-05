const path = require('path');
const debug = require('debug')('build:backpack');

const dir = process.env.DIR;

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = [`./${dir}/index.js`];

    config.output.path = path.join(process.cwd(), `build-${dir}`);
      
    return config;
  },
};