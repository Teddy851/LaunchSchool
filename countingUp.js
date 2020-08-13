function sequence(number){

let sequenceArray = new Array();
 
for(i=1;i<=number;i++){
sequenceArray.push([i]); 

}
console.log(`${sequenceArray}`);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]