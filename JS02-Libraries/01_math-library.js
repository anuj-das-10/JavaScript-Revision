console.log(Math);

// Absolute Value: Negative will be converted to Positive values.
console.log(Math.abs(-5));

// Round off: It rounds off to the nearest integer value of the floating value.
console.log(Math.round(2.4));
console.log(Math.round(2.8));

// Controlling round off values: using ceil() and floor()

// 1. Ceiling Value!
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.8));

// 2. Floor Value!
console.log(Math.floor(2.4));
console.log(Math.floor(2.8));



// Square root
console.log(Math.sqrt(25));
console.log(25 ** (1/2));




// Random Values
console.log(Math.random());
console.log((Math.random() * 10) + 1);


// Generate Random numbers between given range: [min, max]
function randomNumRange(min, max) {
    let random_number = Math.floor((Math.random() * (max - min + 1)) + min);
    return random_number;
}

console.log(randomNumRange(0, 10));
console.log(randomNumRange(10, 30));

