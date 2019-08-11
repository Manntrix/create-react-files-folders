const colors = require('colors');
const values = require('../lib/value');
const inquirer = require('inquirer');
const fs = require('fs');
const pad = require('pad');

const questions = [
    { type: 'list', name: 'componentType', message: 'Class or Functional Component ?', choices: values.typesPlain },
    { type: 'list', name: 'styleOption', message: 'CSS or SASS', choices: values.stylePlain },
];

var args = process.argv.slice(3).toString();


module.exports = function () {
    inquirer
        .prompt(questions)
        .then(function (answers) {

         if(answers.componentType == 'Class' && answers.styleOption == 'CSS'){

            fs.mkdir(args, { recursive: true }, (err) => {
                if (err) throw err;
              });
            fs.open(`${args}/${args}.js`, 'w', (err) => {});
            fs.open(`${args}/${args}.css`, 'w', (err) => {});
            fs.writeFile(`${args}/${args}.js`, 
`import React, { Component } from 'react'
import './${args}.css'

class ${args} extends Component {
    render() {
        return (
            <div className='${args}'>
                           
            </div>
        )
    }
}
           
export default ${args}
`, function (err) {}); 
            fs.writeFile(`${args}/${args}.css`, '', function (err) {}); 

            console.log(pad(colors.yellow(`Successfully created ${args} directory`), 30))


         }
         else if(answers.componentType == 'Class' && answers.styleOption == 'SASS'){
            fs.mkdir(args, { recursive: true }, (err) => {
                if (err) throw err;
              });
            fs.open(`${args}/${args}.js`, 'w', (err) => {});
            fs.open(`${args}/${args}.scss`, 'w', (err) => {});
            fs.writeFile(`${args}/${args}.js`, 
`import React, { Component } from 'react'
import './${args}.scss'

class ${args} extends Component {
    render() {
        return (
            <div className='${args}'>
                           
            </div>
        )
    }
}
           
export default ${args}
`, function (err) {}); 
            fs.writeFile(`${args}/${args}.scss`, '', function (err) {}); 
            console.log(pad(colors.yellow(`Successfully created ${args} directory`), 30))
         }
         else if(answers.componentType == 'Functional' && answers.styleOption == 'CSS'){
            fs.mkdir(args, { recursive: true }, (err) => {
                if (err) throw err;
              });
            fs.open(`${args}/${args}.js`, 'w', (err) => {});
            fs.open(`${args}/${args}.css`, 'w', (err) => {});
            fs.writeFile(`${args}/${args}.js`,
`import React from 'react'
import './${args}.css'

 function ${args}() {
    return (
        <div className='${args}'>
            
        </div>
    )
}

export default ${args}
`, function (err) {}); 
            fs.writeFile(`${args}/${args}.css`, '', function (err) {}); 
            console.log(pad(colors.yellow(`Successfully created ${args} directory`), 30))
         }
         else if(answers.componentType == 'Functional' && answers.styleOption == 'SASS'){
            fs.mkdir(args, { recursive: true }, (err) => {
                if (err) throw err;
              });
            fs.open(`${args}/${args}.js`, 'w', (err) => {});
            fs.open(`${args}/${args}.scss`, 'w', (err) => {});
            fs.writeFile(`${args}/${args}.js`, 
`import React from 'react'
import './${args}.scss'

 function ${args}() {
    return (
        <div className='${args}'>
            
        </div>
    )
}

export default ${args}
`, function (err) {}); 
            fs.writeFile(`${args}/${args}.scss`, '', function (err) {}); 
            console.log(pad(colors.yellow(`Successfully created ${args} directory`), 30))
         }
        });
};