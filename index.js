//Variable that defines inquirer module
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const axios = require("axios");

//Variable that defines input questions
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "name",
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

async function init() {
    inquirer.prompt(questions).then((data) => {

      const { name, badges, title, describe, table, installation, usage, license, licenseURL, contributing, tests } = data;

      if (name === "") {
        return init();
      }


      axios.get(`https://api.github.com/users/${name}`)
            .then( gitHubInfo => {
              const badgeVar = `![GitHub repo size](https://img.shields.io/github/repo-size/${name}/${title}?logo=github)`;
              const licenseVar = `\n[${license}](${licenseURL})\n`;
              const { data: {avatar_url, html_url, location, email} } = gitHubInfo
              const contributingVar = contributing.split("");
              let contributingURL = "" ;
              contributingVar.forEach(element => {
                  let url = `http://github.com/${element}`;
                  const mdString = `\n[${element}](${url})\n`;
                  contributingURL += mdString;
              });
              const markdown = generateMarkdown({ name, badges, title, describe, table, installation, usage, license, licenseURL, licenseURL, contributing, contributingVar, contributingURL, tests, avatar_url, html_url,});
        
              writeToFile("newestREADME.md", markdown)
            })
      
  // {
  //   writeToFile("newREADME.md",JSON.stringify(data));
  //   }
  })
}

init();