var Generator = require('yeoman-generator');
var chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'What is the project name?',
      default : this.appname // Default to current folder name
    },{
      type    : 'input',
      name    : 'port',
      message : 'What port would you like the project to run on?',
      default : 3000
    }]).then((answers) => {
      this.name = answers.name;
      this.port = answers.port;
      this.async();
    });
  }

  writing() {
    // copy all unchanged root level files
    this.fs.copy(this.templatePath('.eslintignore'), this.destinationPath('./.eslintignore'));
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('./.gitignore'));
    this.fs.copy(this.templatePath('.yarnclean'), this.destinationPath('./.yarnclean'));
    this.fs.copy(this.templatePath('creds.json'), this.destinationPath('./creds.json'));
    this.fs.copy(this.templatePath('template.sql'), this.destinationPath('./template.sql'));
    this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('./webpack.config.js'));
    this.fs.copy(this.templatePath('yarn.lock'), this.destinationPath('./yarn.lock'));

    // copy all changed root level files
    this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('./index.html'), {title: this.name});
    this.fs.copyTpl(this.templatePath('server.js'), this.destinationPath('./server.js'), {port: this.port});
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('./package.json'), {title: this.name});
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('./README.md'), {title: this.name});

    // copy static folder
    this.fs.copy(
      this.templatePath('static'),
      this.destinationPath('./static/')
    );

    // copy prod folder
    this.fs.copyTpl(
      this.templatePath('prod'),
      this.destinationPath('./prod'),
      { title: this.name }
    );

    // copy src folder
    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath('./src'),
      { title: this.name }
    );
  }

  install() {
    this.installDependencies({
      yarn: true,
      npm: false,
      bower: false
    });
  }

  end() {
    this.log('\n');
    this.log('Finished install. Run ' + chalk.yellow('npm run dev') + ' to start the dev server.');
    this.log('\n');
  }
};
