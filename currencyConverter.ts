#! /usr/bin/env node

import inquirer from "inquirer";

let usdRate=288 //$1 = 288pkr
let riyalRate=74 //1Riyal = 74pkr
let oneUsdEqualRiyal=3.75 //$1=3.75 RIYALS
let looop=true

while(looop){
let urAnswer= await inquirer.prompt([
    {
    type:"list",
    name:"urCurrency",
    message:"Select the currency of your amount:",
    choices:["USD","PKR","RIYAL"]
        },

    {
    type:"input",
    name:"myAomunt",
    message:"Please Enter your Amount:"
                
        },

    {
    type:"list",
    name:"currencyConversion",
    message:"Select the currency you want to convert your amount:",
    choices:["USD","PKR","RIYAL"]
        }
       
         ])
    let {urCurrency,myAomunt,currencyConversion}  = urAnswer 

   
    if(urCurrency=="PKR" && currencyConversion=="USD"){
    console.log (`Your amount in USD is $ ${myAomunt/usdRate}`)
    }
    if(urCurrency=="PKR"&& currencyConversion=="RIYAL"){
    console.log (`Your amount in RIYAL is ${myAomunt/riyalRate}`)
    }

    if(urCurrency=="USD" && currencyConversion=="PKR"){
    console.log (`Your amount in USD is $ ${myAomunt*usdRate}`)
    }
      
    if(urCurrency=="USD" && currencyConversion=="RIYAL"){
    console.log (`Your amount in RIYAL is ${myAomunt*oneUsdEqualRiyal}`)
    }


    if(urCurrency=="RIYAL" && currencyConversion=="USD"){
    console.log(`Your amount in USD is $ ${myAomunt/oneUsdEqualRiyal}`)
    }
    if(urCurrency=="RIYAL" && currencyConversion=="PKR"){
    console.log (`Your amount in RIYAL is ${myAomunt*riyalRate}`)
     }  
     

let Answer2= await inquirer.prompt([{
    type:"list",
    name:"CorE",
    message:"Do you want to Continue or Exit the Application?",
    choices:["Continue","Exit"]
    }])
let {CorE}=Answer2
if(CorE=="Exit") {
    console.log("Thankyou for using the Currency Exchange!")
    looop=false 
} 

   
}
    
     


