function secondToLastWord(String) {

let wordsArray = String.split(" ");
return wordsArray[wordsArray.length- 2];

};

console.log(secondToLastWord("last word") === "last"); // logs true
console.log(secondToLastWord("Launch School is great!") === "is"); // logs true