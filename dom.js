//the below are used for accessing by id
const heading = document.getElementById("main-heading");
console.log(heading);

//accessing by class
const paragraphs = document.getElementsByClassName("info");
console.log(paragraphs);

//accessing the elements by using tags
const allparas = document.getElementsByTagName("p");
console.log(allparas);

// querySelector - first match
const firstPara = document.querySelector(".info");
console.log(firstPara);

// querySelectorAll - all matches
const allInfoParas = document.querySelectorAll(".info");
console.log(allInfoParas);

//so in simple way that dom is used to access and modufy the html elements and its content

//changing text content
//const headin = document.getElementById("main-heading");
heading.textContent = "hello javascript learner!";
console.log(heading);

//changing html content
paragraphs.innerHtml = "<strong>this is bold text now </strong>";
console.log(paragraphs);

//changing attributes using .getAttribue and .setAttribute
const image = document.getElementById("myimage");
image.setAttribute("src", "new.jpg");  // changes the image source
image.setAttribute("alt", "New Image");  // changes alt text

//changing css classes
/*element.classlist.add("new-class");
element.classList.remove("old-class");
element.classList.toggle("active");*/

const box = document.getElementById("box");
box.classList.add("red");      // now box has both "blue red"
box.classList.remove("blue");  // removes "blue"
box.classList.toggle("round"); // adds "round" if not there, removes if already there

