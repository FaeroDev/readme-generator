import * as inquirer from "inquirer";
import * as fs from "fs"
import {Answers} from "./src/interfaces"
import {readmeTemplate} from "./src/readmeTemplate"
import {licenseSwitch} from "./src/licenseSwitch"



inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a description of your project:",
    },
    {
      type: "input",
      name: "clone",
      message: "Enter the GitHub repo clone address:",
    },
    {
      type: "input",
      name: "dependencies",
      message: "Enter required dependencies:",
    },
    {
      type: "input",
      name: "install",
      message: "Add any additional installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Explain how one would use your project after installation:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email address:",
    },
    {
      type: "input",
      name: "contribute",
      message: "Enter contribution guidelines:",
    },
    {
      type: "input",
      name: "test",
      message: "Enter Testing instructions:",
    },
    {
      type: "list",
      name: "license",
      message:
        "Choose a license for your project from the following list: MIT - ISC - GPLv3 (MIT is default):",
      choices: ['MIT', 'ISC', 'GPLv3'],
    },
  ])

  .then((answers: Answers) => {
    const readmeFill: string = readmeTemplate(answers, licenseSwitch(answers.license.toLowerCase()));


    fs.writeFile("README.md", readmeFill, () =>
      console.log(`---------README.md generated in current directory with the following content----------------
  ${readmeFill}`)
    );
    console.log("RECIEVED INPUT");
    console.log(answers);
    console.log("OUTPUTTING TO MD FILE");
  });
