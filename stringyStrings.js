function stringy(number){

let dividedBy = (number/2);
let oddDivided = Math.floor(number/2)
let pattern = '10'.repeat(dividedBy);


if (number/2 % 1 !== 0){
let uno = '1'
let zero = '0'
let pattern2 = '10'.repeat(oddDivided);
console.log(`${pattern2}${uno}`);

} else {
console.log(`${pattern}`);
}
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"