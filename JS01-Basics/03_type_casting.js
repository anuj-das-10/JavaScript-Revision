// Datatype conversion

let score = "33a";

console.log(typeof score);   //  Both syntax are valid.
console.log(typeof(score));


let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);   //  Both syntax are valid.
console.log(typeof(valueInNumber));
// NaN -->  Not a Number




let variable = null;
console.log(typeof variable);

let numVariable = Number(variable);
console.log(typeof numVariable);




let bool = true;
console.log(typeof bool);
let numericBool = Number(bool);
console.log(numericBool);
console.log(typeof numericBool);


let testVals = [];
let boolVal = Boolean(testVals);
console.log(boolVal);
// 0 => false
// "" => false
// null => false
// undefined => false
// [] => true



let num = 2000;
let strNum = String(num);
console.log(strNum);
console.log(typeof strNum);


