// const inquirer = require("inquirer");
import * as inquirer from "inquirer";
import * as fs from "fs"
// const fs = require("fs");

// let license: string;

interface Answers {
    title: string,
    description: string,
    clone: string,
    dependencies: string,
    install: string,
    usage: string,
    github: string,
    email: string,
    contribute: string,
    test: string,
    license: string
  }


const readmeTemplate: Function =  (answers: Answers, badge: string): string =>
  `#  ${answers.title}   ${badge}

  ##  Description

***

  ${answers.description}
  
  ## Table Of Contents  

***
  * [Description](#Description)
  * [Table Of Contents](#table-of-contents)
  * [Installation](#Installation)
  * [Usage Instructions](#usage-instructions)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Testing Instructions](#testing-instructions)
  * [License](#License)
  * [Questions?](#questions)

  ##  Installation

***

  ### Clone the repository: 
    git clone ${answers.clone}  
      
  ### Dependencies:  
  The following dependencies are required for use:  
 * ${answers.dependencies}  
  
  ### Additional Installation Instructions:

    
  ${answers.install}  

  ##  Usage instructions  

***
    
  ${answers.usage}  
    
  ##  Contribution Guidelines  

***
    
  ${answers.contribute}
    
  ##  Testing Instructions  

  ***
    
  ${answers.test}  
    
  ##  License

  ***
      
  This project is covered under the ${badge} license.  
    
  See attached [LICENSE](./LICENSE) file for details.  
    
  ##  Questions?  

  ***
  
  If you have any questions regarding this application you can reach me using the below contact information:  
  ### Contact Info  
    
  GitHub: [${answers.github}](https://github.com/${answers.github})

  Email:  ${answers.email}`;

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
      type: "input",
      name: "license",
      message:
        "Choose a license for your project from the following list: MIT - ISC - GPLv3 (MIT is default):",
    },
  ])

  .then((answers: Answers) => {
    const license: string = answers.license.toLowerCase();
    // switchFunction();
    // const readmeFill = readmeTemplate(answers, licenseBadge);
    const readmeFill: string = readmeTemplate(answers, switchFunction(license));


    fs.writeFile("README.md", readmeFill, () =>
      console.log(`---------README.md generated in current directory with the following content----------------
  ${readmeFill}`)
    );
    console.log("RECIEVED INPUT");
    console.log(answers);
    console.log("OUTPUTTING TO MD FILE");

    function switchFunction(input: string): string {
      let licenseBadge: string;

      switch (input) {
        case "mit":
          licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
          console.log(licenseBadge);
          // return licenseBadge;
          break;

        case "isc":
          licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
          console.log(licenseBadge);
          // return licenseBadge;

          break;

        case "gplv3":
          licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
          console.log(licenseBadge);
          // return licenseBadge;

          break;

        default:
          licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
          // return licenseBadge;

          break;
      }
      return licenseBadge;
    }
  });
