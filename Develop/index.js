const generateMarkdown = require("./utils/generateMarkdown");
const jsonPkg = require(".//package.json")
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const choices = ['Installation', 'Usage', 'License', 'Contributors', 'Tests', 'Questions']

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
      message: "Installation",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },
    {
      type: "list",
      message: "What License badge would you like?",
      name: "license",
      choice: ['apache', 'boost', 'mozilla', 'MIT'],
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
        

        ###Installation
        ${installation}

        ###Usage
        ${usage}

        ###License
        ${license}

        ###Contributors
        ${contributing}

        ###Tests
        ${tests}

        ###Questions
        ${quest}`;

const init = () => {
  promptUser()
   
    .then((answers) => writeFile("README.md", generateReadme(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

init();

