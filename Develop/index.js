// TODO: Include packages needed for this application
//update

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
const generateMarkdown = require("./utils/generateMarkdown");
const jsonPkg = require(".//package.json")
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Project Title",
      name: "title",
    },
    {
      type: "input",
      message: "Description",
      name: "description",
    },
    {
      type: "input",
      message: "Table of Contents",
      name: "tableofcontents",
    },
    {
      type: "input",
      message: "Installation",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },
    {
      type: "input",
      message: "License",
      name: "license",
    },
    {
      type: "input",
      message: "Contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests",
      name: "tests",
    },
    {
      type: "input",
      message: "Questions",
      name: "quest",
    },
  ]);
};

const generateReadme = ({
  title,
  description,
  tableofcontents,
  installation,
  usage,
  license,
  contributing,
  tests,
  quest,
}) =>
  `#${title}

        ##${description}

        ##Table of Contents
        ${tableofcontents}

        ##Installation
        ${installation}

        ##Usage
        ${usage}

        ##License
        ${license}

        ##Contributors
        ${contributing}

        ##Tests
        ${tests}

        ##Questions
        ${quest}`;

const init = () => {
  promptUser()
   
    .then((answers) => writeFile("README.md", generateReadme(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

init();

