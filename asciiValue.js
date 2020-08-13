let ASCIIsum = 0

function asciiValue(string) {

var splitup = string.split("")

for(i=0;i<string.length;i++) {

ASCIIsum = ASCIIsum + splitup[i].charCodeAt();

}
console.log(`${ASCIIsum}`);
ASCIIsum = 0
}


asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0