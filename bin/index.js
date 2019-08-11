#!/usr/bin/env node

const program = require('commander');
const folder = require('../lib/folder');
const file = require('../lib/files');


program
    .command('dir')
    .alias('d') 
    .description('This will create the directory') 

    .action(function () {
        folder();
    });

program
    .command('file')
    .alias('f')
    .description('This will create the file') 

    .action(function () {
        file();
    });

program.parse(process.argv);