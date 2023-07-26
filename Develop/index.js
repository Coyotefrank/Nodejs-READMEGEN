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
        choices:["MIT", "GPL3.0", "none"]
    },
    {
        type:"Input",
        message:"what is your Git Hub user name?",
        name:"github",
        

    },
    
    {
        type:"Input",
        message:"what is your email address?",
        name:"email",
        

    },
    {
       type:"input",
       message:"what does the user need to know about this readme?",
       name:"usage"



    },
    {
        type:"input",
        message:"What command should be ran to run test?",
        name:"test",
        default:"npm test"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
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
        console.log(answers.title)
        writeToFile("myName.md",generateMarkdown(answers))
    })
}
   
// Function call to initialize app
init();



// let myArray = []
// let myArray2 = [1 , 2 , 3 , "string" , {key: "value"}]
// myArray2.push(4)
// let arrayLength = myArray2.length

// let myObject = {
//     color:"blue",
//     year: 2020 ,

//      drive() {
//     console.log("drive")
//     }
// }

// console.log(myObject.color)
// console.log(myObject.drive())