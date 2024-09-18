console.log(1 + 2); //output-->3

console.log(1 + "2"); //output--> 12 
//Explanation--> number 1 is converted into string type before conact with string 2
console.log(1 + "2");

console.log(5 - "2") //output--> 3
//Explanation--> string 2 is converted into number type to perfrom subtraction with number 5

console.log(10 + 'A') //output-->10A

console.log(10 - "A") //output--> NaN

console.log(10 + "2" - "A") //output--> NaN

console.log(10 + "0" + "1") //output--> NaN




//string to number
let a ="20";
console.log(typeof a);
let c = Number(a);
console.log(typeof c);
let d = parseInt(a);
console.log(typeof c);