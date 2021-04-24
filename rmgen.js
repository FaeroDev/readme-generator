// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];



const readmeTemplate = (answers) => 
  `#  ${answers.title}

  ## Description
  ${answers.description}
  
  ## Installation

  Clone the repository: 
    git clone ${answers.clone}  
      
  Dependencies:  
    ${answers.dependencies}  
    
  ${answers.install}  

  ## Usage instructions  
    
  ${answers.usage}  
    
  ## Contribution Guidelines  
    
  ${answers.contribute}
    
  ## Testing Instructions  
    
  ${answers.test}  
    
  ## Contact Info  
    
  GitHub: [${answers.github}](https://github.com/${answers.github})

  Email:  ${answers.email}  
    
 <!--  ## Result
  
  
  ![Final Result - hw5-js](./assets/images/final-weather-dashboard-html.png) -->`


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your project:',
    },
    {
      type: 'input',
      name: 'clone',
      message: 'Enter the GitHub repo clone address:',
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'Enter required dependencies:',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Add any additional installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how one would use your project after installation:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email address.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter Testing instructions:',
      },
  ])

.then((answers) => {
  const readmeFill = readmeTemplate(answers);
  fs.writeFile('README.md', readmeFill, () => console.log(`---------README.md generated with the following content----------------
  ${readmeFill}`)
  );
  console.log('RECIEVED INPUT') 
  console.log(answers)
  console.log('OUTPUTTING TO MD FILE');
  // console.log(readmeFill);


});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {  
// }

// Function call to initialize app
// init();


