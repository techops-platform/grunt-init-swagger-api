'use strict';
const util = require('util');

module.exports = {
  hello: hello
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function hello(req, res) {
  const name = req.swagger.params.name.value || 'stranger';
  const hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}
