// Array!

// Shallow Copy (Same reference) and Deep Copy!

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);


//  0-Based Indexing
console.log(arr[0]);


const newArr = new Array(1, 2, 3, 4, 5, 6);
console.log(newArr);



// Array Methods!

const nums = [23, 43, 12, 65, 88];
console.log(nums);
nums.push(100);         // Add element at the end!
console.log(nums);

nums.pop();             // Remove last element of the list!
console.log(nums);


nums.unshift(100);      // Insert element at the start
console.log(nums);


nums.shift();           // Remove element from the start
console.log(nums);
nums.shift();           // Remove element from the start
console.log(nums);


// Other methods
console.log(nums.includes(12));
console.log(nums.indexOf(65));
console.log(nums.toString());
console.log(nums.join(" - "));


// Traversing
nums.forEach(element => {
    if(element % 2 == 0) {
        console.log(element);
    }
});





