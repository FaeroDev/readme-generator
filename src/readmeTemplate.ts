import {Answers} from "./interfaces"

export const readmeTemplate: Function =  (answers: Answers, badge: string): string =>
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