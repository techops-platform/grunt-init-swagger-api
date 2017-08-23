'use strict';
const config = require('./config');
const restify = require('restify');

config.restifyServer = restify.createServer();
const app = new require('./lib/app')(config);
module.exports = config.restifyServer;

app.start();
