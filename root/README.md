# {%= name %} [![Dependency Status](https://david-dm.org/{%= git_user %}/{%= git_repo %}.svg)](https://david-dm.org/{%= git_user %}/{%= git_repo %})

{%= description %}

## Getting Started
To run the application, do `npm install` and then `npm run start`

To run the tests, do `npm run test`.

## Documentation
### Swagger
This API uses Swagger documentation, which is defined in [api/swagger](api/swagger).  Add your API documentation there and implement the controllers in [lib/controllers](lib/controllers).

Tests are found in [test](test).

### Util
[lib/util.js](lib/util.js) is just a collection of handy utilities.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
