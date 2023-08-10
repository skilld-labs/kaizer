const cliArgs = process.argv.slice(2);
const themeName = cliArgs ? cliArgs.join(',').split('--theme_name=').pop().split(',')[0] : '';
const hasStorybook = cliArgs ? cliArgs.join(',').split('--has_storybook=').pop().split(',')[0] : '';
const { sync } = require('glob');

const existingComponents = sync(`${process.cwd()}/templates/components/*/*`).map((e) => e.split('/').pop());

module.exports = {
  prompt: ({ inquirer }) => {
    const askForThemeName = themeName ? '' : {
      type: 'input',
      name: 'theme_name',
      message: "Enter theme name",
      required: true,
      result(value) {
        return value.replace(/[.:-]/g, '_');
      },
    };
    const askForStorybook = hasStorybook ? true : {
      type: 'confirm',
      name: 'has_storybook',
      message: "Do you have storybook installed?",
      required: true,
      initial: true,
    };
    let componentType;
    const questions = [
      askForThemeName,
      {
        type: 'select',
        name: 'component_type',
        message: "What's your type of component?",
        choices: ['Atom', 'Helper', 'Molecule', 'Organism', 'Template', 'Page'],
        required: true,
        validate(value) {
          componentType = value.charAt(0).toLowerCase();
          return true;
        }
      },
      {
        type: 'input',
        name: 'name',
        message: "What's your component name?",
        required: true,
        result(value) {
          return value.replace(/[.:_]/g, '-');
        },
        validate(value) {
          if (existingComponents.length && existingComponents.includes(`${componentType}-${value}`)) {
            console.log('\x1b[33m%s\x1b[0m', '\n\n✖ Component with such atomic type and name already exist!\n\n');
            return false;
          }
          return value !== '';
        },
      },
      {
        type: 'select',
        name: 'connection_way',
        message: "How your component will be integrated in Drupal? (Choose 'uncategorized' option if you are not sure yet)",
        choices: ['uncategorized', 'layout', 'suggestion', 'theme', 'ui_patterns'],
        required: true,
      },
      askForStorybook,
      {
        type: 'confirm',
        name: 'css_required',
        message: 'Do you need CSS in your component?',
        required: true,
        initial: true,
      },
      {
        type: 'confirm',
        name: 'js_required',
        message: 'Do you need JS in your component?',
        required: true,
        initial: true,
      },
    ];

    return inquirer.prompt(questions)
  },
}
