// Date

let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toTimeString());


let newDate = new Date(2024, 8, 10);
console.log(newDate.toDateString());

let timeStamp = Date.now();
console.log(timeStamp);

// Retrieving Information!
const dt = new Date();
console.log(`Today is ${dt.getDate()} ${dt.toLocaleString('default', { month: "long"})}, ${dt.getFullYear()}!`);

console.log(dt.toLocaleString('default', {
    weekday: "long",
    month: "long",
    year: "numeric"
}));





// Converting to Seconds!
console.log(Math.floor(Date.now()/1000), "s");
