function runningTotal(array){

var sumArray = new Array();
sumArray[0] = array[0]
for(i=1;i<array.length;i++){

sumArray[i] = sumArray[i-1]+array[i]

}
console.log(`[${sumArray}]`);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []