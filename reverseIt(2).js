function reverseWords(words){

let theWordsArray = new Array();
theWordsArray = words.split(' ');

for(i=0;i<theWordsArray.length;i++){
if ( theWordsArray[i].length < 5){
theWordsArray.push[(i)];

} else {
let useThis = theWordsArray[i]
useThis = useThis.split('').reverse().join("")
theWordsArray[i] = useThis
}
}
console.log(`${theWordsArray}`)
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"