const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

inquirer.prompt([
    // array of questions for user
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the name of the project?",
        name: "project name"
    },
    {
        type: "input",
        message: "What is the decription of the project?",
        name: "discription"
    },
    {
        type: "input",
        message: "What licenses does your project require?",
        name: "license"
    },
    {
        type: "input",
        message: "What command do you need to run for dependencies?",
        default: "npm install",
        name: "command"
    },
    {
        type: "input",
        message: "What command do you use to run a test?",
        default: "npm test",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What does the user need to know when using the repo?",
        name: "user"
    },

])


    .then(data => {

        let readMe = generateMarkdown(data);

        fs.writeFile("README.md", readMe, err => {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")
        });

    });

function init() {
}

init();
