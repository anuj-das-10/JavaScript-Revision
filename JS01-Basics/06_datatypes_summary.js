// Primitive datatypes - 
// 7 types: Number, String, Boolean, null, undefined, Symbol, BigInt
let score = 100;
let average = 10.5;

let username = "@anuj-das-10"
let isAdmin = true;

let useremail = undefined;

let id1 = Symbol("12345");
let id2 = Symbol("12345");
console.log(id1 == id2);   // False


let bigNum = 8745676534567645678n;
console.log(bigNum);
console.log(typeof bigNum);


// Non-Primitive or Reference types -
// Array, Objects, Functions


// Array
const heroes = ["ironman", "hulk", "batman", "spiderman"];    

// Object
let user = {
    username: "@anuj-das-10",
    fullname: "Anuj das",
    age: 15,
    city: "Silchar"
}


// Function
const greetUser = function(uname) {
    console.log(`Welcome, ${uname}!`);
}

greetUser("Anuj");


// Is JavaScript dynamically typed or statically typed language ?
// Ans: JS is dynamically typed language.