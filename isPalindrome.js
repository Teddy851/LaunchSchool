function isPalindrome(word){

if(word === word.split('').reverse().join('')){
console.log("True");

}  else {
console.log("False");
}
}



isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true