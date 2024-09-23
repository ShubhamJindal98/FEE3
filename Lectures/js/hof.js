// higher order function
// print name 10 times
function printName(func,num) {
  for(let i=1;i<=num;i++){
    func();
  }
}

let myName = function () {
  console.log("Yash");
}
myName();
printName(myName,10);

let arr = [4,5,6,8,9]

function evenOrNot(func,arr) {
  for(let i=0;i<5;i++)
  {
    func(arr[i]);
  }
}

let even = function(num) {
  if(num%2==0)
  {
    console.log(num);
  }
  else {
    console.log("Not even");
  }
}

evenOrNot(even,arr);