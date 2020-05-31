//Variable that defines inquirer module
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const axios = require("axios");

//Variable that defines input questions
const questions = [
  {
    type: "input",
    message: "What is your GitHub email?",
    name: "questions",
  },
  {
    type: "input",
    message: "Write your badges here if applicable",
    name: "badges",
  },
    {
    type: "input",
    message: "What is the title of your application?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project.",
    name: "describe",
  },
  {
    type: "input",
    message: "Enter the table of Contents",
    name: "table",
  },
  {
    type: "input",
    message: "Describe the installation process",
    name: "installation",
  },
  {
    type: "input",
    message: "What are the instructions for usage? Provide screenshots here.",
    name: "usage",
  },
  {
    type: "input",
    message: "List the license you used",
    name: "license",
  },
  {
    type: "input",
    message: "Write any guidelines for contributing files here.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Write any tests for your application.",
    name: "tests",
  },

];

//Function that writes to a new file 
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, function (err) {
    if (err) {
      } else {
        console.log("success!");
      }
});

}

function init() {
    inquirer.prompt(questions).then((data) => {
  {
    writeToFile("newREADME.md",JSON.stringify(data));
    }
  })
}

init();