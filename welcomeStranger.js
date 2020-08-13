const readlineSync = require("readline-sync");

console.log('Enter your first name');
let firstName = readlineSync.prompt();

console.log('Enter your last name');
let lastName = readlineSync.prompt();

let arrayOfFullName = [firstName, lastName]

console.log('Enter your tittle');
let tittle = readlineSync.prompt();
console.log('Enter your occupation');
let occupation = readlineSync.prompt();

let objectOfTwo = {tittle:tittle , occupation:occupation}

console.log(arrayOfFullName , objectOfTwo);


