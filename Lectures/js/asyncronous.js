//Normally JS is syncronous language.

// console.log("Started Execution");

// function myFunc() {
//   console.log("This is a function");
// }

// myFunc();

// console.log("Execution ends here");


//Example of Call Back Functions (call back Hell)
// function myProduct() {
//   //product
// }
// myProduct(payment);

// function payment() {
//   //payment
// }

// payment(message);

// function message() {
//   //some message
// }

//call back function example
// function myFunc() {
//   console.log("My func called");
// }

// function hello(call) {
//   console.log("hello func called");
//   call();
// }

// hello(myFunc);

//Js also has asyncronous capabilities.

//Js is an asyncronous language but it's execution is done in syncronous way.

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// var myFunc = () => {
//   console.log("Function");
// };

// myFunc();

//Js executes in syncronous way, but settimeout and settimeinterval are terms of asyncronous programming stored in web api(browser), if these functions are called web api throws the function in js stack, after completing the execution in js leaving settimeout and settimeinterval undone, a unique id is given to the settimeout result and there exists a mediator named event loop which checks if raw code in js is executed or not , and if it is executed , event loop jumps to call stack and take the output from settimeout func and executes that.

//the time out set in settimeout doesn't matter if the whole js code is not executed, web api data will only pass if js code is executed completely.

//set time out =>

// console.log("Start");
// var a = setTimeout(() => {
//   console.log("Settimeout");
// }, 1000);
// clearTimeout(a);//it clears the functioning of settimeout
// console.log("Ends");

//set interval

// console.log("Start");
// var a = setInterval(() => {
//   console.log("SetInterval");
// });
// clearInterval(a);//it clears the functioning of setInterval
// console.log("Ends");
// let count = 0;
// var message = setInterval(() => {
//   console.log(`count => ${count}`);
//   count++;
//   if (count == 3) {
//     clearInterval(message);
//   }
// }, 1000);


