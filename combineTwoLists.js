function interLeave(array1, array2){

let combinedArray = new Array();


for(i=0;i<array1.length;i++){

combinedArray.push(array1[i]);
combinedArray.push(array2[i]);



}
console.log(`${combinedArray}`);
}

interLeave([1, 2, 3], ['a', 'b', 'c']);