//Creating element using javascript

var h1 = document.createElement("h1");

h1.innerText = "Dom elements";

var body = document.querySelector('body');

//appending h1 in body
body.appendChild(h1);

//appending extra text in h1
h1.append(" learning js");

//Appending button
var button = document.createElement("button");

button.innerText = "Submit";

button.setAttribute("class", "hello");

body.appendChild(button);

//By default append function adds element at last
//for element to come first
body.prepend(h1);

//To remove
h1.remove();