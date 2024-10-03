var body = document.querySelector("body");

var h1 = document.createElement("h1");
h1.innerText = "Shubham Jindal";
body.appendChild(h1);

var summary = document.createElement("h3");
summary.innerText = "Summary:";
body.appendChild(summary);
summary.style.display = "inline";

var data = document.createElement("span");
data.innerText = " I am shubham Jindal.";
body.appendChild(data);

var image = document.createElement("img");
image.setAttribute("src", "resume.jpg");
image.style.height = "300px";
image.style.display = "block";
body.appendChild(image);

var education = document.createElement("h1");
education.innerText = " Education ";
body.appendChild(education);

var listOfEducation = document.createElement("ul");
body.appendChild(listOfEducation);

var li1 = document.createElement("li");
li1.innerText = "10th pass";
listOfEducation.appendChild(li1);

var li2 = document.createElement("li");
li2.innerText = "12th pass";
listOfEducation.appendChild(li2);

var li3 = document.createElement("li");
li3.innerText = "1st year pass";
listOfEducation.appendChild(li3);


var skills = document.createElement("h1");
skills.innerText = " Skills ";
body.appendChild(skills);

var listOfSkills = document.createElement("ul");
body.appendChild(listOfSkills);

var li4 = document.createElement("li");
li4.innerText = "FEE";
listOfSkills.appendChild(li4);

var li5 = document.createElement("li");
li5.innerText = "C language";
listOfSkills.appendChild(li5);

var li6 = document.createElement("li");
li6.innerText = "Python";
listOfSkills.appendChild(li6);


var hobby = document.createElement("h1");
hobby.innerText = " Hobbies ";
body.appendChild(hobby);

var listOfHobby = document.createElement("ul");
body.appendChild(listOfHobby);

var li7 = document.createElement("li");
li7.innerText = "Cricket";
listOfHobby.appendChild(li7);

var li8 = document.createElement("li");
li8.innerText = "BasketBall";
listOfHobby.appendChild(li8);

var li9 = document.createElement("li");
li9.innerText = "Sleeping";
listOfHobby.appendChild(li9);


var contacts = document.createElement("h1");
contacts.innerText = " Contacts ";
body.appendChild(contacts);

var listOfContacts = document.createElement("ul");
body.appendChild(listOfContacts);

var li10 = document.createElement("li");
li10.innerText = "Email: sjindal345@gmail.com";
listOfContacts.appendChild(li10);

var li11 = document.createElement("li");
li11.innerText = "LinkedIn";
listOfContacts.appendChild(li11);
