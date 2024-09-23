// map,reduce,filter,sort

//1.) map - returns a new array

let num = [1,2,3,4];

let cube = function (num) {
  return num ** 3;
}

let newArray = cube(num.map);
console.log(newArray);