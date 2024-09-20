//scope --> 1. global
//          2. functional
//          3. block scope
//          4. lexical scope-->outer func ka koi variable inner function mai access krna ha to kr skte ha

// 1.) GLOBAL SCOPE--> By default all values are globally accessible throughout the code base
// let a =5;
// var b = 10;
// const c = 15;

// function myfunc(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// myfunc();

// console.log(a);
// console.log(b);
// console.log(c);


//2.) FUNCTIONAL SCOPE--> 
let c = 25; //global scope
function myfunc(a,b){
    let c = a + b; //functional scope
    console.log(c);
}
myfunc(2,5);
console.log(c);