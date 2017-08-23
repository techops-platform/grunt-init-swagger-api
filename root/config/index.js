'use strict';
const fs = require('fs');
const _ = require('lodash');
const util = require('../lib/util');
const environment = util.defaultValue(process.env.APP_ENV, 'local');
const environmentalConfig = `${__dirname}/${environment}.js`;
let root = {
  host: 'localhost',
  port: 4000
};

if(fs.existsSync(environmentalConfig)) {
  root = _.merge(root, require(environmentalConfig));
}
module.exports = root;
