const validColors = require('./validColors.js')



const prompts = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 letters for your logo.",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter preferred color name or hexadecimal # for the text color."
    },
    {
        type: "list",
        name: "shape",
        message: "Select your logo shape.",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "logoColor",
        message: "Enter preferred color or hex# for the logo color."
    },     
]



module.exports = prompts;
















/*const prompts = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo.',
        validate: (input) => {
            if (input.length > 3) {
                return console.log("Must be no more then three characters")
            }
        }
    },
    {
        type: 'list',
        name: 'textColorInput',
        message: 'Choose text color input format',
        choices: ['color name', 'hexadecimal']
    }
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text color.',
        when: (input) => {
            if (input.textColorInput==='color name') {
                return true;
            }
            return false;
        },
        validate: (input) => {
            let lowercaseInput = input.toLowerCase();
            for (var i=0, i < validColors.length, i++) {
                if (lowercaseInput.indexOf(validColors[i]) != -1){
                    return true;
                }
            }
            return console.log('Enter a valid color name.')
        }

    }

]*/