/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';
const util = require('./util');
const SwaggerRestify = require('swagger-restify-mw');
const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function App(config) {
  util.enforceArgs(config, ['host', 'port', 'restifyServer']);
  let self = {};
  self.start = function() {

    var swaggerObject = yaml.safeLoad(fs.readFileSync('./api/swagger/swagger.yaml', 'utf8'));
    swaggerObject.host = `${config.host}:${config.port}`;
    const swaggerConfig = {
      appRoot: path.join(__dirname, '..'),
      swagger: swaggerObject
    };

    SwaggerRestify.create(swaggerConfig, function(err, swaggerRestify) {
      if (err) { throw err; }

      swaggerRestify.register(config.restifyServer);
      config.restifyServer.listen(config.port);
      console.log('Server started');
    });

  };

  return Object.freeze(self);
};
