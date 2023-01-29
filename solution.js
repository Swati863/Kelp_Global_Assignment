import fs from "fs"


const solution = (answers) => {
// console.log(answers)

   // create operation
   if(answers.opeartion === "CREATE" && answers.Proceed === true ){

    let data = fs.readFileSync("./db.json",{encoding:"utf-8"}) 
    let dataParsed = JSON.parse(data)
    let allData = dataParsed.accounts ;
    // console.log(allData)
 
    const acc_details =answers.operation_details.split(" ")
    //  console.log(acc_details)
    let required_account = allData.find((elem)=>elem.account_number === acc_details[1])
   if(required_account){
      console.log("Oops Account already exist with the account number",required_account.account_number,"Kindly select another opearation to perform on this account")
   }
   else{
    const payload = {
      account_number:acc_details[1],
      account_name:acc_details[2],
      balance:0
  }
  // console.log("payload",payload)
  
  const newData = [...allData,payload]
  // console.log(newData)
  dataParsed.accounts = newData
  fs.writeFileSync("./db.json",JSON.stringify(dataParsed),{encoding:"utf-8"})
  console.log("New Account created Successfully")
   }


}
  // deposit operation
else if (answers.opeartion === "DEPOSIT" && answers.Proceed === true ) {
    let data = fs.readFileSync("./db.json",{encoding:"utf-8"}) 
    let dataParsed = JSON.parse(data)
    let allData = dataParsed.accounts ;
    const acc_details =answers.operation_details.split(" ")
    let required_account = allData.map((elem)=>
    elem.account_number === acc_details[1] ?
      {
        ...elem, balance : elem.balance + Number(acc_details[2])
      } : elem
    )
    dataParsed.accounts = required_account
    fs.writeFileSync("./db.json",JSON.stringify(dataParsed),{encoding:"utf-8"})
    console.log("Amount Deposited Successfully")

}
// Withdraw operation
else if (answers.opeartion === "WITHDRAW" && answers.Proceed === true) {
    let data = fs.readFileSync("./db.json",{encoding:"utf-8"}) 
    let dataParsed = JSON.parse(data)
    let allData = dataParsed.accounts ;
    const acc_details =answers.operation_details.split(" ")
    let required_account = allData.find((elem)=>elem.account_number === acc_details[1])
    // console.log(required_account,required_account.balance)
    if(required_account.balance >= acc_details[2]){
        let req_account = allData.map((elem)=>
        elem.account_number === acc_details[1] ?
          {
            ...elem, balance : elem.balance - Number(acc_details[2])
          } : elem
        )
        dataParsed.accounts = req_account
        fs.writeFileSync("./db.json",JSON.stringify(dataParsed),{encoding:"utf-8"})
        console.log("Amount withdrawn Successfully")
    }
    else{
        console.log("Sorry!",account_number ,"The Current Balance is lesser that the amount entered")
    }


}


// Balance operation
else if(answers.opeartion === "BALANCE" && answers.Proceed === true){
    let data = fs.readFileSync("./db.json",{encoding:"utf-8"}) 
    let dataParsed = JSON.parse(data)
    let allData = dataParsed.accounts ;
    // console.log(allData)

    const acc_details =answers.operation_details.split(" ")
    // console.log(acc_details)

    let required_account = allData.find((elem)=>elem.account_number === acc_details[1])
    console.log("Dear",required_account.account_name,"Your Account balance is Rs.",required_account.balance) 
} 

}

export default solution