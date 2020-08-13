function repeater(word){

let combinedArray = new Array();
let word2 = word

for(i=0;i<word.length;i++){

combinedArray.push(word[i]);
combinedArray.push(word2[i]);

}
let combArray = combinedArray.toString();
console.log(`${combArray}`);
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""