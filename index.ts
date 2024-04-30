#! /usr/bin/env node

import chalk from "chalk";
import inquirer from 'inquirer';
let condition = true;

while (condition){
const answerOperator = await inquirer.prompt(
    {
        name: "operator",
        message: `${chalk.cyan("Choose an operator: ")}`,
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division" , "Modulus", "Exponentiation", "Percentage"],
        
   
    }
);
if (answerOperator.operator === "Addition"){
    const answerAddition = await inquirer.prompt(
        [
            {
                name: "firstNumber",
                message: `${chalk.cyanBright("Enter First Number: ")}`, 
                type: "number",
                
            },
            {
                name: "secondNumber",
                message: `${chalk.cyanBright("Enter Second Number: ")}`, 
                type: "number", 
            }
        ]
    )
    console.log( console.log (answerAddition.firstNumber + answerAddition.secondNumber))
    }else if (answerOperator.operator === "Subtraction"){
        const answer = await inquirer.prompt(
            [
                {
                    name: "firstNumber",
                    message: `${chalk.cyanBright("Enter First Number: ")}`, 
                    type: "number",
                    
                },
                {
                    name: "secondNumber",
                    message: `${chalk.cyanBright("Enter Second Number: ")}`, 
                    type: "number", 
                }
            ]
        )
        console.log (answer.firstNumber - answer.secondNumber)
    }else if (answerOperator.operator === "Multiplication"){
        const answerMultiplication = await inquirer.prompt(
            [
                {
                    name: "firstNumber",
                    message: `${chalk.cyanBright("Enter First Number: ")}`, 
                    type: "number",
                    
                },
                {
                    name: "secondNumber",
                    message: `${chalk.cyanBright("Enter Second Number: ")}`, 
                    type: "number", 
                }
            ]
        )
        console.log(answerMultiplication.firstNumber * answerMultiplication.secondNumber)
    }else if (answerOperator.operator === "Division"){
        const answerDivision = await inquirer.prompt(
            [
                {
                    name: "firstNumber",
                    message: `${chalk.cyanBright("Enter First Number: ")}`, 
                    type: "number",
                    
                },
                {
                    name: "secondNumber",
                    message: `${chalk.cyanBright("Enter Second Number: ")}`, 
                    type: "number", 
                }
            ]
        )
        console.log(answerDivision.firstNumber / answerDivision.secondNumber)        
    }else if (answerOperator.operator === "Modulus"){
        const answerModulus = await inquirer.prompt(
            [
                {
                    name: "firstNumber",
                    message: `${chalk.cyanBright("Enter First Number: ")}`, 
                    type: "number",
                    
                },
                {
                    name: "secondNumber",
                    message: `${chalk.cyanBright("Enter Second Number: ")}`, 
                    type: "number", 
                }
            ]
        )
        console.log(answerModulus.firstNumber % answerModulus.secondNumber)        
    }else if (answerOperator.operator === "Exponentiation"){
        const answerExpo = await inquirer.prompt(
            [
                {
                    name: "firstNumber",
                    message: `${chalk.cyanBright("Enter First Number: ")}`, 
                    type: "number",
                    
                },
                {
                    name: "secondNumber",
                    message: `${chalk.cyanBright("Enter Second Number: ")}`, 
                    type: "number", 
                }
            ]
        )
        let expoAnswer = answerExpo.firstNumber ** answerExpo.secondNumber
         console.log(expoAnswer.toFixed(2)) 
    }else if (answerOperator.operator === "Percentage"){
        let Percent = await inquirer.prompt(
            [
              {
               name: "fullMarks",
               type: "number",
               message: "Enter Full Marks: "
              },
              {
                name: "obtainedMarks",
                type: "number",
                message: "Enter Obtained Marks: "
              }
        ]
    )
    console.log((Percent.obtainedMarks / Percent.fullMarks)* 100)
    }
    let usrchoice = await inquirer.prompt(
        {
            name: "option",
            type: "list",
            message: `${chalk.yellow.bold("Select an option: ")}`,
            choices: ["Calculate Again","Exit"]
        }
    ); 
    if (usrchoice.option === "Exit")
        {
           condition = false
        };
};