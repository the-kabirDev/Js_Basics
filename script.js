// Unary Operators
/*
let a = 5;
let b = 2;

//a++; //increment
//b--; //decrement
console.log("a++ =", a++);
console.log(a);
*/

//Assignment Operators
/*
let a = 5;
let b = 2;

a += 4; // a = a + 4;
console.log("a =", a); //9
*/

// Comparison Operators
/*
let a = 5;
let b = "5"; //string -> number

console.log("a == b", a == b);
console.log("a > b", a > b);
*/

//logical Operators
//( && , ||, ! ) || -> pipe symble
/*
let a = 5;
let b = 2;

let cond1 = a > b; //true
let cond2 = a === 5; //true

console.log("cond1 && cond2 =", cond1 && cond2);
*/

// Conditional statements
/*
let age = 25;

if (age > 18) {
  console.log("You can Vote");
}
*/

// odd or even ?
/*
let num = 13;
if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}
*/

// else if statements
/*
let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === blue) {
  color = "blue";
} else if (mode === pink) {
  color = "pink";
} else {
  color = "white";
}
console.log(color);
*/

// Ternary operator
//-> a ? b : c;
//alternative of if else operator
/*
let age = 25;
let result = age >= 18 ? "Adult" : "not adult";
console.log(result);
*/

/*
let num = prompt("enter a number");
if (num % 5 === 0) {
  console.log(num, "is multiple of 5");
} else {
  console.log(num, "is not a multiple of 5");
}
*/

/*
let score = prompt("enter a number");
let grade;
if (score >= 80 && score <= 100) {
  grade = "A+";
} else {
  grade = "F";
}

console.log(grade);
*/

//Loops in js

//for loop
/* for (let i = 1; i <= 5; i++) {
  console.log("Sk");
}


for (let count = 1; count <= 5; count++) {
  console.log("SK");
}



// while loop
 while (condition){
  //do some work
 }

let i = 1;
while (i <= 10) {
  console.log("Sk");
  i++;
}
 

//do while loop
let i = 20;
do {
  console.log("SK");
  i++;
} while (i <= 20);
*/

// let str = "Kabir";
// console.log(str[3]);

//Template literals
// let sentence = `This is a template literals`;
// console.log(typeof sentence);

// Template Literal -> String Interpolation
// let obj = {
//   item: "pen",
//   price: 10,
// };

// let output = `The cost of ${obj.item} is \n ${obj.price} taka`;
// console.log(output);

//String method in Js
// let str = "shahria kabir";
// let str2 = "Love you";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.slice(0, 4));
// console.log(str.concat(str2));
// let res = str.concat(str2);

// console.log(res);

// console.log(str.replace("kabir", "Kabir"));
// console.log(str.charAt(3));

//Lets Practise

// let fullName = prompt("Enter your full name without spaces");
// console.log(fullName);
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

//Learning Arrays
// let heros = ["ironman", "superman", "hulk", "Batman", "Spiderman"];
//looping over an Array
//for loop
// for (let i = 0; i < heros.length; i++) {
//   console.log(heros[i]);
// }

//best - for of loop
// for (hero of heros) {
//   console.log(hero);
// }

//Aray Method
// let foodItems = ["potato", "apples", "banana", "orange"];
// foodItems.push("burger"); //add item in the end
// foodItems.pop(); //del from last one
// console.log(foodItems.toString()); //no change in main one
// console.log(foodItems);

//concat => add two arrays
//unshift => add items in start
//shift => del items in start
//slice => returns a piece of the array: (no change in original array.),
//***splice => change in original array.
// spice(startIdx, delCount, newEl)

//Functions => block of code that performs specific task ,can be invoked whenever needed.

//=> function definition
// function functionName(){
//do some work}

// function myFunction() { //parameter -> input
//   console.log("Welcome");
//   console.log("We are learning Js");
// }

//Function call => functionName()

//myFunction();  //argument

//Function -> 2 numbers, sum
// function sum(x, y) {
//   console.log(x + y);
// }
// sum(2, 5);

//Array Function => It is modern Js, short version of Function, for short work
// const functionName =(param1,param2)=>{
//   //do some work
// }

//Practise => vowelsCount

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "A" ||
//       char === "e" ||
//       char === "E" ||
//       char === "i" ||
//       char === "I" ||
//       char === "o" ||
//       char === "O" ||
//       char === "u" ||
//       char === "U"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("aeiou");

//Aray Map methods ******
// Creates a new array with the results of some opearation. The value its callback returns are used to form new array.
//=> arr.map(callbackFnx(value, index, array))

// let nums = [76, 38, 93];
// nums.map((val) => {
//   console.log(val ** 2);
// });
// let calcSquare = (num) => {
//   console.log(num * num);
// };

//Filter method in array => creates a new array of elements that give true for a condition/ filter.

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenArr);

// Reduce method in Array Method => performs some operatuon & reduces the array to single value. it returns that single value.

//DOM Part
//console.log(window);
//console.dir -> prop method

//DOM manupulation
