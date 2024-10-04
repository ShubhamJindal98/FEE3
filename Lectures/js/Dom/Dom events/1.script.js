// //for multiple buttons a for loop is used.
// var btns = document.querySelectorAll('button');

// // console.dir(btn);

// for (btn of btns) {
//   btn.onclick = myfunc;
//   btn.onmouseenter = cursor;
// }

// function myfunc() {
//   console.log('Button was pressed');
// }

// function cursor() {
//   console.log("You are over me");
// }

//a single event can't take multiple events at once , for example there can't be 2 onclick events at once.
//to over come that we use event Listener.
//event listener is a kind of an object which takes 2 things - event and call back function.
/* ||Remainder - It is not an event , it is an object.|| */

var btns = document.querySelectorAll('button');

for (btn of btns) {
  btn.addEventListener('click', myfunc);
  btn.addEventListener('click', hello);
}

function myfunc() {
  console.log('Button was pressed');
}

function hello() {
  console.log('Hello');
}

/* Practice */

var pg = document.querySelector("p");
pg.addEventListener('mouseenter', paragraph);

function paragraph() {
  console.log('Paragraph is visited');
}