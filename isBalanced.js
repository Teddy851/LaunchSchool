function isBalanced(string){

let firstKind = 0
let secondKind = 0
arrayOfChar = string.split('');

for(i=0;i<arrayOfChar.length;i++){

if (arrayOfChar[i] === "("){
firstKind++

} else if (arrayOfChar[i] === ")"){

secondKind++
}

}
if (firstKind === secondKind){
return true;

} else {
return false;
}
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);