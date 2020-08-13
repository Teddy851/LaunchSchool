const readlineSync = require("readline-sync");

console.log('Enter a number greater than 1');
let number = readlineSync.prompt();
number = Number(number);

let sumorproduct = 1

if (number > 1) {
console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let AorS = readlineSync.prompt();

if (AorS === "s") { 
while (number > 1) {
sumorproduct = sumorproduct + number;
number = number - 1;
}
console.log(`The sum is ${sumorproduct}`);
} else if (AorS === "p") {
while (number > 1) { 
sumorproduct = sumorproduct * number;
number = number - 1;
}
console.log(`The product is ${sumorproduct}`);
} else {
console.log('Please enter either the letter "s" or "p" and nothing else');
}


} else { 
console.log(`Please enter an integer greater than 1, yours was ${number}`);
}
