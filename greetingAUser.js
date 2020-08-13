const readlineSync = require("readline-sync");

console.log("What is your name, enter an exclamation mark at the end for a suprise");
let name = readlineSync.prompt();


let splitUpName = name.split("");
let uppercaseName = name.toUpperCase();


if (splitUpName[name.length-1] === "!"){

console.log(`HI ${uppercaseName},  WHY ARE WE SCREAMING?`);

} else {

console.log(`Hi ${name}`);

}