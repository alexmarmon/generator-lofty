var Generator = require('yeoman-generator');
var chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    // welcome message
    this.log(chalk.blue('Welcome to the Lofty Generator. Make sure you are in the folder you want to generate into!'));

    // begin prompt
    return this.prompt([{
      type: 'list',
      name: 'project',
      message: 'What would you like to do?',
      choices: [
        "Create a new project",
        "Create a new page in an existing project",
        "Create a new module in an existing project",
        "Exit"
      ]
    }]).then((answers) => {
      if (answers.project === 'Create a new project') {
        // create a new lofty project
        this.composeWith("lofty:project", {}, {
          local: require.resolve("./../project")
        });
      } else if (answers.project === 'Create a new page in an existing project') {
        // create a new lofty module
        this.composeWith("lofty:page", {}, {
          local: require.resolve("./../page")
        });
      } else if (answers.project === 'Create a new page in an existing project') {
        // create a new lofty module
        this.composeWith("lofty:module", {}, {
          local: require.resolve("./../module")
        });
      } else {
        // close generator
        this.async();
      }
    });
  }
};
