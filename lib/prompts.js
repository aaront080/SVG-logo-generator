const validColors = require('is-css3-color')  //the add on that contains a array of pre designated colors

// Prompt array that contains objects that contains the prompt questions
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














