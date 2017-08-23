# grunt-init-node-mocha
This project is a grunt-init project containing istanbul code coverage, html reporting, jshint etc.  This is our standard starting point for all projects.

[grunt-init]: http://gruntjs.com/project-scaffolding
Based on: https://github.com/gruntjs/grunt-init-node

## What it is
This is a scaffold project which will create an npm module.
It supports the following:
  - Travis
  - Coveralls
  - Dependency Status

Tests use:
  - Mocha
  - Should

Coverage reports:
  - Locally - istanbul
  - Travis - coveralls

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone https://github.com/Stono/grunt-init-node-mocha ~/.grunt-init/node-mocha
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init node-mocha
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._
