var body = document.querySelector('body');

var div1 = document.createElement('div');
div1.style.minHeight = "180px";
div1.style.backgroundColor = "#F0F0F0";
div1.style.width = "20%";
div1.style.marginLeft = "40%";
div1.style.marginTop = "40px";
div1.style.borderRadius = "10px";

var tag1 = document.createElement("p");
tag1.innerText = "Monk's";

tag1.style.fontSize = "25px";
tag1.style.fontWeight = "900";
tag1.style.textAlign = "center";
tag1.style.paddingTop = "40px";

var tag2 = document.createElement("p");
tag2.innerText = "Bio";

tag2.style.fontSize = "20px";
tag2.style.fontWeight = "900";
tag2.style.textAlign = "center";
tag2.style.paddingTop = "40px";

var figure = document.createElement("figure");
var img = document.createElement("img");
img.style.width = "60px";
img.style.backgroundColor = "black";
figure.style.paddingLeft = "125px";
var figcaption = document.createElement("figcaption");
figcaption.innerText = "Photo";

div1.prepend(figure);
div1.appendChild(tag1);
div1.appendChild(tag2);

figure.appendChild(img);
figure.appendChild(figcaption);

body.appendChild(div1);

var div2 = document.createElement('div');
div2.style.minHeight = "280px";
div2.style.backgroundColor = "#F0F0F0";
div2.style.width = "20%";
div2.style.marginLeft = "40%";
div2.style.marginTop = "40px";
div2.style.borderRadius = "10px";

var form = document.createElement('form');
div2.appendChild(form);

body.appendChild(div2);

var input1 = document.createElement('input');
form.appendChild(input1);
input1.style.border = "none";
input1.style.width = "80%";
input1.style.borderRadius = "4px";
input1.style.marginTop = "20px";
input1.style.height = "20px";
input1.style.marginLeft = "30px";

var tag3 = document.createElement('p');
tag3.innerText = "Name";
form.appendChild(tag3);
tag3.style.marginTop = "5px";
tag3.style.textAlign = "center";

var input2 = document.createElement('input');
form.appendChild(input2);
input2.style.border = "none";
input2.style.width = "80%";
input2.style.borderRadius = "4px";
input2.style.marginTop = "20px";
input2.style.height = "20px";
input2.style.marginLeft = "30px";

var tag4 = document.createElement('p');
tag4.innerText = "Bio";
form.appendChild(tag4);
tag4.style.marginTop = "5px";
tag4.style.textAlign = "center";

var input3 = document.createElement('input');
form.appendChild(input3);
input3.style.border = "none";
input3.style.width = "80%";
input3.style.borderRadius = "4px";
input3.style.marginTop = "20px";
input3.style.height = "40px";
input3.style.marginLeft = "30px";

var tag5 = document.createElement('p');
tag5.innerText = "Photo URL";
form.appendChild(tag5);
tag5.style.marginTop = "5px";
tag5.style.textAlign = "center";

var button = document.createElement('button');
button.innerText = "Submit";
button.style.border = "none";
button.style.borderRadius = "3px";
form.appendChild(button);
button.style.backgroundColor = "white";
button.style.width = "60px";
button.style.height = "24px";
button.style.marginLeft = "120px";
button.style.marginTop = "20px";

form.addEventListener('submit', function (e) {
  let inp1 = document.querySelector("input:nth-of-type(1)");
  e.preventDefault();
  console.log("Form Submitted");
  tag1.innerText = inp1.value;
  let inp2 = document.querySelector("input:nth-of-type(2)");
  tag2.innerText = inp2.value;
  let inp3 = document.querySelector("input:nth-of-type(3)");
  img.src = inp3.value;
})

