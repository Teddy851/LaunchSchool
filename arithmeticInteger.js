const readlineSync = require("readline-sync");

console.log("Enter a positive integer");
let firstNumber = readlineSync.prompt();
firstNumber = Number(firstNumber);

console.log("Enter another postive integer");
let secondNumber = readlineSync.prompt();
secondNumber = Number(secondNumber);

console.log(`${firstNumber}+${secondNumber}=${firstNumber + secondNumber}`);
console.log(`${firstNumber}-${secondNumber}=${firstNumber - secondNumber}`);
console.log(`${firstNumber}*${secondNumber}=${firstNumber * secondNumber}`);
console.log(`${firstNumber}/${secondNumber}=${firstNumber / secondNumber}`);
console.log(`${firstNumber}%${secondNumber}=${firstNumber % secondNumber}`);
console.log(`${firstNumber}**${secondNumber}=${firstNumber ** secondNumber}`);
