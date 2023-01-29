
import inquirer from 'inquirer'
import fs from "fs"
import { user_interface } from "./user_interface.js"
import solution from './solution.js';


console.log("Welcome to our Banking Application")
inquirer
.prompt(user_interface)
  .then((answers) => {
  
    
   solution(answers)
   
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



