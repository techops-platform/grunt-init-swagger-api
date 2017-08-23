'use strict';
var App    = require('../lib/{%= name %}');

describe('{%= name %}', () => {

  before(() => {
  });

  after(() => {
  });

  beforeEach(() => {
  });

  afterEach(() => {
  });

  it('Should be awesome', () => {
    let app = new App();
    let result = app.execute();
    result.should.eql('awesome');
  });

});
