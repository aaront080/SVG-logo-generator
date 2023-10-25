const inquirer = require('inquirer');
const fs = require('fs')
const prompts = require('./lib/prompts.js');
const createShape = require('./lib/createShape.js');
const createLogo = ("./examples/logo.svg");


function generateLogo(response) {
    const finalLogo = createShape(response);
    fs.writeFile(createLogo, finalLogo, () => console.log('logo.svg has been generated'));
}

function init() {
    inquirer
    .prompt(prompts)
    .then((response) => {
        generateLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

init()








/*inquirer
    .prompt([
        {
            type: "input",
            name: "letter",
            message: "Enter up to 3 letters for your logo.",
        },
        {
            type: "input",
            name: "text",
            message: "Enter preferred color or hex# for the text color."
        },
        {
            type: "list",
            name: "shape",
            message: "Select your logo shape.",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: "input",
            name: "logo",
            message: "Enter preferred color or hex# for the logo color."
        },     
    ])
    .then((data) => {
        const logoFile = "./examples/logo.svg";
        const generatedLogo = createShape(data);

        fs.writeFile(logoFile,createShape(generatedLogo), (err) =>
        err ? console.log(err) : console.log("Logo.svg has been generated")
        );
    });
    .catch((err) => console.error(err)); */