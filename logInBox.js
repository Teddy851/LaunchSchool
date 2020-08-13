function logInBox(sentence){

let sentenceLength = sentence.length;
let dash = '-'
let space = ' ' 
console.log(`+ ${dash.repeat(sentenceLength)} +`);
console.log(`${space.repeat(sentenceLength)}`);
console.log(`| ${sentence} |`);
console.log(`${space.repeat(sentenceLength)}`);
console.log(`+ ${dash.repeat(sentenceLength)} +`);
}

logInBox('To boldly go where no one has gone before.');