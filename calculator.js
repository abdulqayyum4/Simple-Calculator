#! /usr/bin/env node
// SHABANG # ko SHA khata ha aur ! ko BANG khata ha 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "please select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent"]
    },
]);
// conditional statement
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
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Exponent") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
// Package.json ki file ma line 3 par version 1.0.0 set hoa wa hota ha us ka matlab
// sab sa 1st number likha hota ha wo major changes ka lia hota ha aur 2nd word koi choti sa update ya phir koi action add karna parh barhta ha aur 3rd word bohat hi choti si bug ya phir mistake sahi karna par hota ha
