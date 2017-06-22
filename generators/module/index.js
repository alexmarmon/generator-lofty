var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // prompting() {
  //   // return this.prompt([{
  //   //   type    : 'input',
  //   //   name    : 'name',
  //   //   message : 'Your project name',
  //   //   default : this.appname // Default to current folder name
  //   // }, {
  //   //   type    : 'confirm',
  //   //   name    : 'cool',
  //   //   message : 'Would you like to enable the Cool feature?'
  //   // }]).then((answers) => {
  //   //   this.log('app name', answers.name);
  //   //   this.log('cool feature', answers.cool);
  //   // });
  //
  //   return this.prompt([{
  //     type: 'list',
  //     name: 'project',
  //     message: 'What would you like to do?',
  //     choices: [
  //       "Create a new Lofty project",
  //       "Create a new Lofty module"
  //     ]
  //   }]).then((answers) => {
  //     if (answers.project === 'Create a new Lofty project') {
  //       this.composeWith("lofty:project", {}, {
  //         local: require.resolve("./../project")
  //       });
  //     } else if (answers.project === 'Create a new Lofty module') {
  //       this.composeWith("lofty:module", {}, {
  //         local: require.resolve("./../lofty")
  //       });
  //     }
  //   });
  // }

  method2() {
    this.log('lofty module creation');
  }
};
