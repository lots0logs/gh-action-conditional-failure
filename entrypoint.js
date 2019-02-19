// External Dependencies
const fs          = require('fs');
const path        = require('path');
const { Toolkit } = require('actions-toolkit');
const mm          = require('micromatch');
const readDirDeep = require('read-dir-deep');


const tools       = new Toolkit;
const { payload } = tools.context;

const {
  _: args,
  not: negate,
  ['file-exists']: file_exists,
} = tools.arguments;

const {
  fail_msg,
  success_msg
} = process.env;

let files;

file_exists && (files = readDirDeep.sync(path.dirname(tools.workspace)));

file_exists
  && ! negate
  && mm.some(files, args)
  && tools.exit.failure(fail_msg || 'Files exist matching provided patterns!');

file_exists
  && negate
  && ! mm.some(files, args)
  && tools.exit.failure(fail_msg || 'No files exist matching provided patterns!');


tools.exit.success(success_msg || 'Success! All conditions were met.');

