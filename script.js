console.log("hello this is message for console from script js file");
//alert("hello there!");

/*let name = "john";
console.log(name);

name = "bob";  // the name is manipulated here an the let data type allows this 
console.log(name);*/

const country = "INDIA";
console.log(country);  //constant cannot be changed

var fruit = "apple";
console.log(fruit);

var fruit = "Mango";
console.log(fruit); // we can redeclare but it cannot be recommend now a days

let language = "javascript";
console.log("iam learning "+ language);

language = "react";
console.log("now iam learning" + language);

const pi = 3.14;
console.log("value pf pi is"+ pi);

/*datatypes in javascript
there are two types of javscript one is primitive and another one is non primitive
first lets focus on primitive datatypes*/

//numbers
/*let age = 21;
let price = 99.99;

console.log(typeof age);
console.log(typeof price); */

//strings
//used to store text in single or double brackets.

let name = "raviteja";
let city = "hyderabad";
let message = `hello, ${name}! how its going in ${city}?`;

console.log(typeof name);
console.log(message);

//boolean datatype which used to store true or false
let isloggedin = true;
let isadmin = false;

console.log (typeof isloggedin);

//undefined (a variable declared but not assigned any value)
let data;
console.log(data);
console.log(typeof data);

//null intentional absence of any valur.\
let user = null;
console.log(user);
console.log(typeof user);

//bigint for very large numbers
let bignumber = 123456789012345678901234567890n;
console.log(typeof bignumber);

//javascript operators
//operators are used to perform operations on values and variab;es

//arithmetic operators(used for math)
let x = 10;
console.log(x + 5);
console.log(x % 3);
console.log(2 ** 4);

//assignment operators
let a = 10;
a += 5; // a = a +5
console.log(a);

a *= 2; //a = a * 2
console.log(a);

let score = 75;
console.log(score > 50 && score < 100);
console.log(score === "75");
console.log(score == "75");

//conditonal statements

//if statement
let age = 20;
if(age >= 18){
    console.log("you are an adult");
}

//if else statement
let IsloggedIn = false;

if(IsloggedIn){
    console.log("you are logged in");
}else{
    console.log("you are not logged in");
}

//else if
let marks = 85;

if(marks >= 90){
    console.log("grade A");
}else if(marks >= 80){
    console.log("grade B your marks are "+`${marks}`);
}else if(marks >= 60){
    console.log("grade c")
}else{
    console.log("fail");
}

//nested statements
let userr = "admin";
let isverified = true;

if(userr === "admin"){
    if(isverified){
        console.log("access granted");
    }else{
        console.log("please verify your account first");
    }
}else{
    console.log("access denied");
}

let time = 13;

if(time< 12){
    console.log("good morning");
}else if(time < 18){
    console.log("good afternoon");
} else {
    console.log("good evening");
}

//loops

//for loop
for(let i = 1;i<= 5;i++){
    console.log("number "+ i);
}

//while
let i = 1;

while(i<= 3){
    console.log("hello");
    i++;
}

//do while loop
let j = 1;

do{
    console.log("do while loop runs once! ");
    i++;
}while(i<= 0);

//looping through arrays
let fruits = ["apple","banana","mango"];

for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}

//functions
function greet(){
    console.log("hello, there from function!");
}
greet();

//with parameters
function greetuser(name){
    console.log("hello, " + name + "!");
}

greetuser("alice");
greetuser("bob");

//funtions with return value
function add(a,b){
    return a + b;
}
let result = add(5,3);
console.log(result);

//another way to define functions is function expression
const multiply = function(x,y){
    return x * y;
};
console.log(multiply(4,5));

//arrow functions which is shorter syntax commonly used in modern js
const square = (num) => {
    return num * num;
};
console.log(square(6));

//arrays in javascript
//array is an special variable that can store multiple values in an single varibale
//creating arrays
let games = ["cricket","kabbadi","khokho","carroms","chess"];
let numbers = new Array(1,2,3,4);

//accessing elements
console.log(fruits[0]);
console.log(numbers[1]);

//modifying elements
games[2] = "football";
console.log(games);

//arrays properties
console.log(games.length);
games.push("golf") //adds an element to an end
console.log(games);
games.pop() //removes last element
console.log(games);
games.shift() //removes first element
console.log(games);
games.unshift("baseball") //adds an element to the first
console.log(games);
let c = games.indexOf("football");//returns the index of an element
console.log(c);
let d = games.includes("carroms");//tells that if an charchter is present or not in an given array
console.log(d);
let e = games.join(", ");
console.log(e);

//loop through an array
//using for loop
for(let i = 0;i<=games.length-1;i++){
    console.log(games[i])
}

//for of loop
for(let game of games){
    console.log(game)
}

let colors = ["red","green","blue"];
colors.push("yellow");
colors[0] = "purple";
console.log(colors);
console.log(colors.length);

//objects in javascript
//creating an object
let person = {
    name : "ram",
    age: 25,
    isstudent: true
};
//accessing object properties
console.log(person.name);
console.log(person.age);

//modifying the object
person.age = 22;
person.name = "teja";
console.log(person);

//adding new properties
person.city = "hyderabad";

//deleting a property
delete person.isstudent;
console.log(person);

//objects with functions(methods)
let users = {
    username: "john",
    greet: function(){
        console.log("hello, "+ this.username);
    }
};
users.greet();

/* //taking input from the user
let username = prompt("Please enter your name:");
let userage = prompt("please enter your age:");
if (username !== null && userage !== null) {
    console.log("Hello, " + username + "!" + " your age is: "+ userage);
} else {
    console.log("User cancelled the prompt.");
}*/

//Looping Through an Object
for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
  
car.color = "red";
console.log(car.brand);
console.log(car["year"]);  
  
//array of objects
let students = [
    {name: "ram", age:22},
    {name: "laxman",age:21},
    {name: "bharath",age: 20}
];
console.log(students[0].name);
console.log(students[1].age);

for(let i = 0; i< students.length; i++){
    console.log(students[i].name + " is "+ students[i].age + " years old. ");
}

//adding new object to an array
students.push({name: "david",age: 23});
console.log(students);

//updating a property
students[0].age = 23;
console.log(students);

let phones = [
    {name: "mi",cost: 20000},
    {name: "iphone",cost: 30000},
    {name: "realme",cost: 25000}
];

for (let phone of phones) {
    console.log(`${phone.name}`);
}

//condtional statements switch statement which is alternative to many if , elseif statements
let day = "tuesday";

switch (day){
    case "monday":
        console.log("start of the week");
        break;
    case "tuesday":
        console.log("second day");
        break;
    case "wednesday":
        console.log("third day");
        break;
    default:
        console.log("some other day");
}

/*let num = prompt("please enter any number: ");
num = Number(num);
if(num % 2 === 0){
    console.log("the entered number is even");
}else{
    console.log("the entered number is an odd");
}*/

/*let num1 = prompt("please enter the first number: ");
let num2 = prompt("please enter the second number: ");
let num3 = prompt("please enter the third number: ");
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
if(num1 > num2 && num1 > num3){
    console.log(`${num1}` + " is maximum number among them given numbers!")
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2}` + " is maximum number among them given numbers!")
}else{
    console.log(`${num3}` + " is maximum number among them given numbers!")
}*/

/*let num = prompt("please enter any number: ");
num = Number(num);
if(num > 0){
    console.log("the entered number is positive");
}else if(num < 0){
    console.log("the entered number is negative");
}else{
    console.log("the entered number is zero");
}*/


let num = 2025;
isleap = true;

if(num / 4 && !num / 400 && !num / 100){
    console.log("it is an leap year")
}else{
    console.log("its not an leap year")
}

let nu = 23
let isprime = true;

if(num<= 1){
    isprime = true;
}else if(num >=2){
    //isprime = true;
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num % i === 0)
            isprime = false;
        break;
    }
}
if(isprime){
    console.log("the entered number is an prime number");
}else{
    console.log("the entered number is not an prime number");
}

//let propmt = prompt("please enter your number that has to calculated");
let n1 = 2;
let n2 = 3;

function add(n1,n2){
    return n1 + n2;
}

adding = add(n1,n2);
console.log("the addition of "+ n1 + " and " + n2 + " is "+ adding);

//divisible by 3 and 5

let a1 = 34;

if(a1 % 3 === 0 && a1 % 5 === 0){
    console.log("it is divisible by both numbers 3 and 5");
}else{
    console.log("it is not divisible by both numbers 3 and 5");
}

//printing all evens from 1 to n
let N = 20;

for(let i = 1;i <= N; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//vowels or consonant
// let letter = prompt("enter any letter bro: ");
// letter = letter.toLowerCase();
// if(letter === 'a' ||letter === 'e' || letter === 'i' ||letter === 'o' ||letter === 'u'){
//     console.log(letter + " is an vowel");
// }else{
//     console.log(letter + " is an consonant");
// }

//simple calculator
// let num1 = prompt("enter num1: ");
// let num2 = prompt("enter num2: ");
// num1 = Number(num1);
// num2 = Number(num2);
// let operation = prompt("which operation do you want me to perform? enter any one of this symbols: +,-,*,/  ");
// if(operation === '+'){
//     console.log(num1 + num2);
// }
// else if(operation === '-'){
//     console.log(num1 - num2);
// }
// else if(operation === '*'){
//     console.log(num1 * num2);
// }
// else if(operation === '/'){
//     console.log(num1 / num2);
// }else{
//     alert("please enter a valid operator ")
// }




