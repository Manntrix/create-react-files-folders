const colors = require('colors');
const values = require('../lib/value');
const inquirer = require('inquirer');
const fs = require('fs');
const pad = require('pad');

const questions = [
    { type: 'list', name: 'fileType', message: 'Select file you want to create', choices: values.filesPlain },
   
];

var args = process.argv.slice(3).toString();


module.exports = function () {
    inquirer
        .prompt(questions)
        .then(function (answers) {

         if(answers.fileType == 'js'){
            fs.open(`${args}.js`, 'w', (err) => {});
            console.log(pad(colors.yellow(`Successfully created ${args}.js file`), 30))


         }
         else if(answers.fileType == 'css'){
           
            fs.open(`${args}.css`, 'w', (err) => {});
           
            console.log(pad(colors.yellow(`Successfully created ${args}.css file`), 30))
         }
         else if(answers.fileType == 'scss'){
           
          fs.open(`${args}.scss`, 'w', (err) => {});
         
          console.log(pad(colors.yellow(`Successfully created ${args}.scss file`), 30))
       }
       else if(answers.fileType == 'ts'){
           
        fs.open(`${args}.ts`, 'w', (err) => {});
       
        console.log(pad(colors.yellow(`Successfully created ${args}.ts file`), 30))
     }
     else if(answers.fileType == 'json'){
           
      fs.open(`${args}.json`, 'w', (err) => {});
     
      console.log(pad(colors.yellow(`Successfully created ${args}.json file`), 30))
   }
   else if(answers.fileType == 'jsx'){
           
    fs.open(`${args}.jsx`, 'w', (err) => {});
   
    console.log(pad(colors.yellow(`Successfully created ${args}.jsx file`), 30))
 }
 else if(answers.fileType == 'README'){
           
  fs.open(`README.md`, 'w', (err) => {});
 
  console.log(pad(colors.yellow(`Successfully created README.md file`), 30))
}
 else if(answers.fileType == 'config'){
           
  fs.open(`${args}.config`, 'w', (err) => {});
 
  console.log(pad(colors.yellow(`Successfully created ${args}.config file`), 30))
}
 else if(answers.fileType == 'gitignore'){
           
  fs.open(`.gitignore`, 'w', (err) => {});
 
  console.log(pad(colors.yellow(`Successfully created .gitignore file`), 30))
}
 else if(answers.fileType == 'npmignore'){
           
  fs.open(`.npmignore`, 'w', (err) => {});
 
  console.log(pad(colors.yellow(`Successfully created .npmignore file`), 30))
}
        });
};