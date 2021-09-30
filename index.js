#!/usr/bin/env node

const prog = require('caporal');
const create = require('./lib/create');

prog
  .version('1.0.0')
  .command('gallop', '🐎 Create a new express application with Jazeera 🐎')
  .action(create);

prog.parse(process.argv);