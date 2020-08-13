function yourGrade (grade1, grade2, grade3){

let mean = (grade1+grade2+grade3)/3 

if (mean <= 100 && mean >=90){
console.log("A");
} else if (mean < 90 && mean >= 80){
console.log("B");
} else if (mean < 80 && mean >= 70){
console.log("C");
} else if (mean < 70 && mean >= 60){
console.log("D");
} else { 
console.log("F");
}

}


yourGrade(95, 90, 93);    // "A"
yourGrade(50, 50, 95);    // "D"