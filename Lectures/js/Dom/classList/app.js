//Set attribute can't be assigned to multiple classes at once, classList can be used in its place for multiple classes.

var newh1 = document.querySelector("h1");
console.dir(newh1.classList);//It tells how many classes are there for the particular element.

//To give any property(class) to the element
newh1.classList.add('green');

//Check class - according to array
console.dir(newh1.classList[0]);

//To remove class
newh1.classList.remove("green");

//To check if there is any class present in the element
console.log(newh1.classList.contains("green"));

//Toggle - if there is class present of that name it removes , if not present it adds
newh1.classList.toggle("Black");//Adds class black as it is not present
newh1.classList.toggle("Iron");//Removes class iron as it is present