function multiplyList(array1, array2){

let multipliedArray = new Array();

for (i=0; i<array1.length; i++){
multipliedArray[i] = array1[i]*array2[i]
}

console.log(`${multipliedArray}`);
}


multiplyList([3, 5, 7], [9, 10, 11]);