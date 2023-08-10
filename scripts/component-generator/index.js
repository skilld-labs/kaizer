#! /usr/bin/env node
const hygen = require("hygen");
const path = require("path");

const cliArgs = process.argv.slice(2);
const theme_name = cliArgs ? cliArgs.join(',').split('--theme_name=').pop().split(',')[0] : '';
const has_storybook = cliArgs ? cliArgs.join(',').split('--has_storybook=').pop().split(',')[0] : '';

const config = {
  templates: `${__dirname}/_templates`,
  cwd: __dirname,
  exec: (action, body) => {
    const opts = body && body.length > 0 ? { input: body } : {};
    return require("execa").shell(action, opts);
  },
  logger: { ...console, ok: (text) => console.log(text) },
  createPrompter: () => require("enquirer"),
  helpers: {
    relative: (from, to) => path.relative(from, to),
    src: () => process.cwd(),
    theme_name,
    has_storybook,
  },
};

hygen.runner("component new", config);
