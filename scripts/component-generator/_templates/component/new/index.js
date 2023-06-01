const cliArgs = process.argv.slice(2);
const themeName = cliArgs ? cliArgs.join(',').split('--theme_name=').pop().split(',')[0] : '';

module.exports = {
  prompt: ({ inquirer, args }) => {
    const askForThemeName = themeName ? '' : {
      type: 'input',
      name: 'theme_name',
      message: "What's your theme name?",
      required: true,
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
        message: "How your component will be connected to Drupal? (Choose 'storybook' option if you are not sure yet)",
        choices: ['storybook', 'layout', 'suggestion', 'theme', 'ui_patterns'],
        required: true,
      },
    ];

    return inquirer.prompt(questions)
  },
}
