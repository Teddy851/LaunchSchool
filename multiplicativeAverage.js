function multiplicativeAverage(array){

let product = array[0]

for(i=1;i<array.length;i++){

product = product * array[i]

}

product = product/(array.length)
product = product.toFixed(3);
console.log(`${product}`);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"