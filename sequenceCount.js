function sequence(count, startingNumber){

let sequenceArray = new Array();
while(count > 0){

sequenceArray.unshift(count*startingNumber);
count--

}
console.log(`[${sequenceArray}]`);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []