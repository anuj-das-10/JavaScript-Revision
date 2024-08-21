// Two types of Memory in JS: Stack & Heap

// 1. Primitive datatypes use Stack Memomry.
// 2. Reference or Non-Primititve datatypes use Heap Memory.


// It will use Stack Memory
let myChannelName = "adx tried coding";

let mySecondChannel = myChannelName;        // "mySecondChannel" holds copy of the value of "myChannelName"
console.log("My First  Channel: ", myChannelName);
console.log("My Second Channel: ", mySecondChannel);

mySecondChannel = "ADxDev";
console.log("My First  Channel: ", myChannelName);
console.log("My Second Channel: ", mySecondChannel);





// It will use Heap Memory
const userOne = {
    email: "anujdas@gmail.com",
    password: "anuj@123"
}

const userTwo = userOne      // "userTwo" holds reference of the value of "userOne"

console.log(userOne);
console.log(userTwo);


userTwo.email = "matrixadx@gmail.com";
console.log(userOne);
console.log(userTwo);
