
import inquirer from 'inquirer'
import fs from "fs"


console.log("Welcome to our Banking Application")
inquirer
  .prompt([
    /* Pass your questions in here */
   
   {
    type:"rawlist",
    message:"Please Select an Operation",
    name:"opeartion",
    choices:["CREATE","DEPOSIT","WITHDRAW","BALANCE"]
   },
   {
    type:"input",
    message:"Enter Your Account Details ",
    name:"opration_details"
   },
   {
    type:"confirm",
    message:"Please select if you wish to Proceed with the selected operation ",
    name:"Proceed",
   }

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

    console.log("answers are",answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



