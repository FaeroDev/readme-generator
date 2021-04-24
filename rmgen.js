// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];



const readmeTemplate = (answers) => 
  `#  ${answers.title}
  
  ${answers.description}
  
  
  ## Installation
  
  Link to working site: 
   <https://pharaohnof.github.io/weather-dashboard-h6>
  
  Clone the repository: 
   git clone https://github.com/pharaohnof/weather-dashboard-h6.git
  
  
  
  
  
  
  ## Result
  
  I created an html file with basic layout. I then created a javascript file with logic to call apis to get weather data for entered cities. The searched cities were saved to local storaage, which was used to create an array to create functioning history search buttons. The api weather data was used to fill dynamically created containers. All criteria were met. See below screenshots for final product and code.
  
  ![Final Result - hw5-load](./assets/images/final-weather-dashboard-load.png)
  ![Final Result - hw5-persist](./assets/images/final-weather-dashboard-search.png)
  ![Final Result - hw5-storage](./assets/images/final-weather-dashboard-js.png)
  ![Final Result - hw5-js](./assets/images/final-weather-dashboard-html.png)`


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
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project',
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
        name: 'contributions',
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
  fs.writeFile('README.md', readmeFill, () => console.log('README.md Generated')
  );
  console.log(answers);
  console.log(readmeFill);


});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {  
// }

// Function call to initialize app
// init();


