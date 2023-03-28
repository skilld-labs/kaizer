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
        choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Helper'],
        required: true,
      },
      {
        type: 'select',
        name: 'connection_way',
        message: "How your component will be connected to Drupal?",
        choices: ['UI Patterns', 'Base hook', 'My component is custom'],
        required: true,
      },
    ];

    return inquirer.prompt(questions)
  },
}
