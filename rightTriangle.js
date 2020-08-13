function triangle(number){

for (i=1;i<number;i++){

console.log(`${' '.repeat(number-i)}${'*'.repeat(i)}`);

}
console.log(`${'*'.repeat(number)}`);
}

triangle(5);
triangle(9);