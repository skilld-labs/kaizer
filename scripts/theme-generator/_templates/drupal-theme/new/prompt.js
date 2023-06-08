// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

const { Select } = require('enquirer');

module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's your theme name? Use underscore symbol to split words",
    required: true,
  },
];
