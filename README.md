# grunt-init-swagger-api
This is a [grunt-init](http://gruntjs.com/project-scaffolding) project for getting started with a swagger api, really fast.

## What it is
This is a scaffold project which will create an nodejs API application based on [restify](https://github.com/restify/node-restify) and documented using [swagger](https://swagger.io/).

It will create you a test driven `hello_world` api, which returns the value of the query string parameter `?name`.

## Installation
If you haven't already done so, install grunt-init with `npm install -g grunt-init`

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone https://github.com/techops-platform/grunt-init-swagger-api.git ~/.grunt-init/swagger-api
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Getting Started

At the command line:
```
mkdir your-application
cd your-application
grunt-init swagger-api
npm install
```

### Starting the API
Simply do `npm run start`. If all is well, you should see:

```
10:20:24 $ npm run start

> test2@0.1.0 start /private/tmp/test2
> node index.js

Server started
```

And you should be able to curl it like so:

```
10:20:47 $ curl http://127.0.0.1:4000/hello?name=Karl
"Hello, Karl!"%
```

You can view the swagger documentation at `http://127.0.0.1:4000/swagger`

### Running tests
Simply do `npm run test`.  If all is well, you should see the tests run:

```
10:11:23 $ npm run test

> test2@0.1.0 test
> ./node_modules/grunt/bin/grunt mochaTest

Running "mochaTest:stdout" (mochaTest) task


Server started
  controllers
    hello_world
      GET /hello
        ✓ should return a default string
        ✓ should accept a name parameter

  Util
    Args
      ✓ should enforce an arg
      ✓ should enforce args
      ✓ not throw if its ok
      ✓ should validate nested keys
      ✓ should throw nested keys
    Default Value
      ✓ should set a default value from a value
      ✓ should set a default value from a function
      ✓ default values from a function should not be evaluated unless needed
    Null or Undefined
      ✓ should detect null
      ✓ should detect undefined
      ✓ should not false detect
      ✓ should throw if you pass it
      ✓ should enforce not empty on single argument
      ✓ should allow custom errors
      ✓ should enforce not empty on multiple arguments


  17 passing (156ms)


Done.
```

For more information, read the README.md that gets generated from the template.  Or view [root/README.md](root/README.md)

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._
