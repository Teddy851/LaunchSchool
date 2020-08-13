function negative(number) {

if(Math.sign(number) === 1){
   console.log(`${-number}`);

} else if (Math.sign(number) === -1){
   console.log(`${number}`);

} else if(number === 0){
console.log("-0");

} else {
   console.log("Enter a valid number");
}
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0