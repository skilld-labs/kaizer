const cliArgs = process.argv.slice(2);
const themeName = cliArgs ? cliArgs.join(',').split('--theme_name=').pop().split(',')[0] : '';
const hasStorybook = cliArgs ? cliArgs.join(',').split('--has_storybook=').pop().split(',')[0] : '';

module.exports = {
  prompt: ({ inquirer }) => {
    const askForThemeName = themeName ? '' : {
      type: 'input',
      name: 'theme_name',
      message: "What's your theme name?",
      required: true,
    };
    const askForStorybook = hasStorybook ? true : {
      type: 'confirm',
      name: 'has_storybook',
      message: "Do you have storybook installed?",
      required: true,
      initial: true,
    };
    const questions = [
      askForThemeName,
      {
        type: 'input',
        name: 'name',
        message: "What's your component name? (Use dash symbol to split words)",
        required: true,
      },
      {
        type: 'select',
        name: 'component_type',
        message: "What's your type of component?",
        choices: ['Atom', 'Helper', 'Molecule', 'Organism', 'Template', 'Page'],
        required: true,
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
        name: 'js_required',
        message: 'Do you need JS in your component?',
        required: true,
        initial: true,
      },
      {
        type: 'confirm',
        name: 'css_required',
        message: 'Do you need CSS in your component?',
        required: true,
        initial: true,
      },
    ];

    return inquirer.prompt(questions)
  },
}
