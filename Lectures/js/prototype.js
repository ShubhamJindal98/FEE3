var person1 = {
  name: "Shubham",
  id: "123",
  subject: "FEE",
};
console.log(person1);

const person2 = Object.create(person1);
//by defaukt ekm prototypal object create hora ha jiske andr reference hota ha == _proto_
//Person1 ke reference ko store kr rha ha proto mai
person2.name = "Siddharth";
console.log(person2);


//directly object ni uski key values ko access kr skte ha
console.log(person2.name);

// console.log(person2._proto_ == person1);

const person3 = Object.create(person2);
console.log(person3);

console.log(person2._proto_ == person1);
console.log(person3._proto_ == person1);
console.log(person3._proto_ == person2);

//first class objects ki value null hoti ha
console.log(Object.prototype._proto_); //null



let num = 20;
console.log(Object.prototype._proto_ == Number);