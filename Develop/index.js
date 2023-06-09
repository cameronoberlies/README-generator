const generateMarkdown = require("./utils/generateMarkdown");
const jsonPkg = require(".//package.json");
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the Project Title",
      name: "title",
    },
    {
      type: "input",
      message: "Project Description",
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
      choices: ["apache", "boost", "IBM", "MIT"],
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
      message: "What is your GitHub Username?",
      name: "GitHub",
    },

    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    }
  ]);
};

const init = () => {
  promptUser()
    .then((answers) => writeFile("README.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

init();
