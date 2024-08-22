let marvel_heroes = ["Ironman", "Spiderman", "Thor"];
let dc_heroes = ["Flash", "Batmat", "Superman"];

// marvel_heroes.push(dc_heroes);       // It will create a nested array
// console.log(marvel_heroes);

let all_heroes = marvel_heroes.concat(dc_heroes);       // It will return a new 1D Array!
console.log(all_heroes);

all_heroes[0] = "Dr.Strange"
console.log(all_heroes);

// Concatenation using Spread Operator!
let new_all_heroes = [...marvel_heroes, ...dc_heroes];
console.log(new_all_heroes);



// flat()
const nums = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(nums);

// const flatArr = nums.flat(3);
const flatArr = nums.flat(Infinity);
console.log(flatArr);


// Hacks!
const id = "GeekyADx";
console.log(Array.isArray(id));
console.log(Array.from(id));

let x = 100, y = 200, z = 300;
console.log(Array.of(x, y, z));
