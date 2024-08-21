// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// This type of conversion may sometimes produce unpredictable result.
// console.log("2" > 1);
// console.log("02" > 1);



/*
The reason is that an equality check == and 
comparisons >, <, >=, <= work differently.

Comparisons convert "null" to a number, treating "null" as 0.
That's why - 
            1. null  > 0  ==> False, as it evaluates as (0 > 0).
            2. null >= 0  ==> True, as it evaluates as (0 >= 0).
*/
console.log(null > 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0);   // works different



// Comparing undefined with 0 always results in False.
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);
console.log(undefined != 0);  // Except for this




// Strict Checking!
console.log(`Strict Checking: "2" === 2 is`,"2" === 2);











