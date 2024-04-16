#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.green.italic("Write Your Sentence To Count The Word")
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellowBright.bold(`\n Your Sentence Word Count Is ${words.length} \n `));
