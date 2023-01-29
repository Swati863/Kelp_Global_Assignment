

const user_interface = [
    {
        type:"rawlist",
        message:"Please Select an Operation",
        name:"opeartion",
        choices:["CREATE","DEPOSIT","WITHDRAW","BALANCE"]
       },
       {
        type:"input",
        message:"Enter Your Account Details ",
        name:"operation_details"
       },
       {
        type:"confirm",
        message:"Please select if you wish to Proceed with the selected operation ",
        name:"Proceed",
       }
]

export { user_interface}