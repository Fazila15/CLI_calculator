#! /usr/bin/env node
import chalk from "chalk";
import inquirer from 'inquirer';
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        {
            name: "firstNumber",
            message: `${chalk.cyanBright("Enter First Number: ")}`,
            type: "number",
        },
        {
            name: "secondNumber",
            message: `${chalk.cyanBright("Enter Second Number: ")}`,
            type: "number",
        },
        {
            name: "operator",
            message: `${chalk.cyan("Operation: ")}`,
            type: "list",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        }
    ]);
    if (answer.operator === "Addition") {
        console.log(answer.firstNumber + answer.secondNumber);
    }
    else if (answer.operator === "Subtraction") {
        console.log(answer.firstNumber - answer.secondNumber);
    }
    else if (answer.operator === "Multiplication") {
        console.log(answer.firstNumber * answer.secondNumber);
    }
    else if (answer.operator === "Division") {
        console.log(answer.firstNumber / answer.secondNumber);
    }
    ;
    let usrchoice = await inquirer.prompt({
        name: "option",
        type: "list",
        message: `${chalk.yellow.bold("Select an option: ")}`,
        choices: ["Calculate Again", "Exit"]
    });
    if (usrchoice.option === "Exit") {
        condition = false;
    }
    ;
}
;
