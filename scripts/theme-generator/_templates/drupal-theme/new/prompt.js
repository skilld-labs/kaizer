module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's your theme name? Use _ symbol to split words",
    required: true,
  },
  {
    type: "confirm",
    name: "has_storybook",
    message: "Do you need storybook installed on the project?",
    required: true,
    initial: true,
  },
];
