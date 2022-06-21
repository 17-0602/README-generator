// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
const questions = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Insert name of your project:',
        validate: (value)=>{if (value){return true} else {return "Please insert a title."}}
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project. (What was your motivation?)',
        validate: (value)=>{if (value){return true} else {return "Please insert a description."}}
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Write instructions to install the app.',
        validate: (value)=>{if (value){return true} else {return "Please insert instructions."}}
      },
      {
        type: 'input',
        name: 'use',
        message: 'Briefly explain how to use the app.',
        validate: (value)=>{if (value){return true} else {return "Please insert a brief explanation."}}
      },
      {
        type: 'input',
        name: 'guidelines',
        message: 'Determine the guidelines for users to contribute on your app.',
        validate: (value)=>{if (value){return true} else {return "Please insert guidelines."}}
      },
      {
        type: 'input',
        name: 'test',
        message: 'Write instructions to test the app.',
        validate: (value)=>{if (value){return true} else {return "Please insert test instructions."}}
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: (value)=>{if (value){return true} else {return "Please insert a username."}}
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address.',
        validate: (value)=>{if (value){return true} else {return "Please insert an email."}}
      },
      {
        type: 'list',
        message: 'Choose a license.',
        name: 'license',
        choices:['Apache license 2.0', 'MIT', 'GNU General Public License v3.0'],
        validate: (value)=>{if (value){return true} else {return "Please choose an option."}} 
      }
    ]).then(({
      title,
      description,
      installation,
      use,
      guidelines,
      test,
      github,
      email,
      license
    })=>{
const template =`# ${title}
## Table of Contents:
- ## [Description:](#description)
- ## [Instructions to install the app:](#installation)
- ## [How to use the app:](#use)
- ## [Do you want to contribute?](#guidelines)
- ## [How to test the app:](#test)
- ## [GitHub profile:](#github)
- ## [Email:](#email)
## Description:
${description}
## Instructions to intall the app:
${installation}
## How to use the app:
${use}
### Do you want to contribute? Follow these guidelines:
${guidelines}
## How to test the app:
${test}
## Should you have questions, contact me!:
*GitHub profile: ${github}
*Email: ${email}
## License:
This project is licensed under the terms of the ${license}`;

writeToFile(title, template);
    });
function writeToFile(fileName,data){
  fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (err)=>{
    if(err){
      console.log(err)
    }
    console.log('Successfully wrote to README.md');
  })
}
  };
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
//function init() {}
const init = () => {
  questions()
    .then((answers) => fs.writeFileSync('readme.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();
