#! /usr/bin/env node 
import inquirer from "inquirer" ;

import chalk from "chalk" ;
  
console.log(chalk.cyan.bold.underline(`\t\n "Welcome To CodeWithSheza - Word Counter" \n`));


const answers : {
    sentence : string
} = await inquirer.prompt ([
    {
     name : "sentence",
     type : "input",
     message : chalk.green.italic("Write Your Sentence To Count The Word")
    }
])

let words = answers.sentence.trim().split(" ")

console.log(words);
 
console.log (chalk.yellowBright.bold(`\n Your Sentence Word Count Is ${words.length} \n `));