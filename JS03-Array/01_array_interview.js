// What is the difference between:
// arr.slice()  v/s  arr.splice()

/* 

slice(start, end) returns a new subarray of the given range 
including the "start" index and excluding the "end" index value.
It does not modify the original array!
 
*/
const arr = [0, 1, 2, 3, 4, 5, 6];
console.log(`A = [${arr}]`);

let slicedArr = arr.slice(1, 3);
console.log(slicedArr);
console.log(`B = [${arr}]`);



/* 

splice(start, end) returns a new subarray of the given range 
including both the "start" index and the "end" index value.
It also modifies the original array, i.e., it removes the subarray from the original array.
 
*/

let splicedArr = arr.splice(1, 3);
console.log(splicedArr);
console.log(`C = [${arr}]`);

