/*
 * grunt-init-swagger-api
 *
 */

'use strict';

// Basic template description.
exports.description = 'Create a node.js api, based on restify and swagger';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ shouldn\'t contain "node" or "js" and should ' +
  'be a unique ID not already in use at search.npmjs.org.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({
    type: 'node'
  }, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version', '>= 8.1.4'),
    init.prompt('main', 'index.js')
  ], function(err, props) {
    props.keywords = [];
    props.dependencies = {
      'restify': '^5.2.0',
      'lodash': '^4.17.4',
      'colors': '^1.1.2',
      'istextorbinary': '^2.1.0',
      'swagger-restify-mw': '^0.7.0',
      'js-yaml': '^3.9.1'
    };
    props.devDependencies = {
      'grunt': '^1.0.1',
      'grunt-contrib-jshint': '^1.1.0',
      'grunt-contrib-watch': '^1.0.0',
      'grunt-mocha-istanbul': '^5.0.2',
      'grunt-mocha-test': '^0.13.2',
      'grunt-notify': '0.4.5',
      'istanbul': '^0.4.5',
      'mocha': '^3.5.0',
      'mocha-jenkins-reporter': '^0.3.8',
      'should': '^11.2.1',
      'supertest': '^3.0.0',
      'deride': '^1.1.0'
    };

    /* jshint camelcase: false */
    props.npm_test = './node_modules/grunt/bin/grunt mochaTest';

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props, function(json) {
      // grunt-init is a bit out of date, we need to mutate the license
      var licenses = json.licenses.map(function(item) {
        return item.type;
      });
      if(licenses.length === 1) {
        json.license = licenses[0];
      } else {
        // SPDX license expression syntax version 2.0
        json.license = '(' + licenses.join(' OR ') + ')';
      }
      delete json.licenses;
      return json;
    });

    // All done!
    done();
  });

};
