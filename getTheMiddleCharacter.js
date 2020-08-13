function centerOf(string){

let stringInArray = new Array();
stringInArray = string.split("");


if (string.length % 2 === 0){
  let dividend1 = Math.floor(string.length/2)
  console.log(`${stringInArray[dividend1-1]}${stringInArray[dividend1]}`);
} else if (string.length === 1){
  console.log(`${string}`);

} else {
  let dividend = Math.ceil(string.length/2)
  console.log(`${stringInArray[dividend-1]}`);
}
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"