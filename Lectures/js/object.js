/* stores complex data */
/* key value pair */
// 2 methods - constructor or by literals

// constructor
// var obj1 = new Object(Value)
// obj1.name = "Shivam"
// console.log(obj1)

const obj = new Object();
obj.name = "Shubham";
console.log(obj.name); 

// literals
// var user = {
//   name: "Yash",
//   class1: "FEE",
//   RollNo: 25
// };
// console.log(user.name);

const users = {
  name: "kanav",
  'full name': 'Kanav Aggarwal',
  age: 25,
  subject: "FEE",
  CGPA: 8.6
};

console.log(users.name);
console.log(users['full name']);

//updating objects value

users.name="Mohit";
console.log(users);

// objects inside a object
const hosts={
    host1:{
        name:"Siddharth",
        age:19
    },
    host2:{
        name:"Shubham",
        age:23
    },
}
console.log(hosts.host1.age);

const array = [
  name1 = {
    greet: "Hello",
    age: 4
  }
,
  name2 = {
    greet: "Hey",
    age: 5
  }
,
  name3 = {
    greet: "What's up",
    age: 6
  }
];