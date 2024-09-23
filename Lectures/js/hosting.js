myFunc();
console.log(a);
var a = 10;
console.log(a);
function myFunc() {
  var b = 20;
  console.log(b);
} 
/* IMPORTANT */
// var can let the variable used even before initialization
// const and let don't let this thing -- according to them , there is nothing above them, and variable can only be accessed after declaration creating temporary death zone.
//if variable is log before declaring in var , it results in undefined , meaning MCP(Memory Creation Phase) has created memory for a , but value is undefined.
//Code execution Phase helps in assigning the values to variables and function stored in MCP.
