const inquirer = require('inquirer');
const fs = require('fs')
const prompts = require('./lib/prompts.js');
const createShape = require('./lib/createShape.js');
const filePath = "./examples/logo.svg";

//function that will generate logo and write file to logo.svg
function generateLogo(response) {
    const userLogo = createShape(response);
    fs.writeFile(filePath, userLogo, () => console.log('logo.svg has been generated'));
}

//function that initializes the prompts and generate logo function

function run() {
    inquirer
    .prompt(prompts)
    .then((response) => {
        generateLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

run()














