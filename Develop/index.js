// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer= require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"what is the title of this project?",
        name:"title",
    },
    {
        type:"input",
        message:"describe this project",
        name:"description",
    },
    {
        type:"list",
        message:"what is the license",
        name:"license",
        choices:["MIT", "GPL3.0", "unlicense"]
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers=>{
        console.log(answers)
        writeToFile("myName.md",generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
