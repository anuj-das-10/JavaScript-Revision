let val = 5;
let negativeVal = -val;

console.log("val =", val);
console.log("negativeVal =", negativeVal);

// Operations on Number type
let a = 20, b = 5;
console.log(a + b);  // Addition
console.log(a - b);  // Subtraction
console.log(a * b);  // Multiplication
console.log(a / b);  // Division
console.log(a % b);  // Modulo Division (Gives Remainder)
console.log(a ** b); // Exponentiation


// Operation on String type
let str1 = "hello", str2 = "world"
let resStr = str1 + " " +str2;
console.log(resStr);


// Problems
console.log("Problems ---");
console.log(1 + "2");
console.log("1" + 2);


console.log("1" + 2 + 2);
/*
    "1" + 2 + 2    ==>   122 but how ?

    Operator Precedence and its Associativity!
    It is evaluated to from left to right when all the operators are of same priority. So, 
        
                "1" + 2  ==> "12"
        then,
                "12" + 2  ==>  "122" 
*/


console.log(1 + 2 + "2");
/*
    1 + 2 + "2"    ==>   32 but how ?

    Operator Precedence and its Associativity!
    It is evaluated to from left to right when all the operators are of same priority. So, 
        
                1 + 2  ==> 3
        then,
                3 + "2"  ==>  32 
*/



console.log(true);
console.log(+true);
console.log(-true);
console.log(+"");




