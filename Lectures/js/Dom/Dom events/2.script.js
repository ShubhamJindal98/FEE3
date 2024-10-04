var form = document.querySelector("form");

form.addEventListener('submit', function (e) {
  //inp is the input given by the user
  let inp = document.querySelector("input");
  console.dir(inp);
  //inp becomes an object in dir , to get value in log use inp.value.
  console.log(inp.value);
  //prevent default - prevents the default behaviour of the form
  e.preventDefault();//e or event both can be used 
  console.log("Form submitted");
  //passing input data to paragraph
  var p = document.querySelector("p");
  p.innerText = inp.value;
});

