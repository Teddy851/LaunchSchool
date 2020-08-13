let readlineSync = require("readline-sync");

console.log('What is the bill');
let bill = readlineSync.prompt();
bill = Number(bill);

console.log('What is the tip percentage');
let tippercen = readlineSync.prompt();
tippercen = Number(tippercen);


let tip = (tippercen/100)*bill
console.log(`The tip is ${+tip}`);
console.log(`The total is ${bill+tip}`);