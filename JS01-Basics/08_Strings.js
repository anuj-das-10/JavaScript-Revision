// fetch("https://api.github.com/users/anuj-das-10")
// .then(
//     response => response.json()
// ).then(
//     data => {
//         console.log(data);
//         console.log("Name: ", data.name);
//         console.log(`Followers: ${data.followers}  |  Followings: ${data.following}`);
//         console.log("Public Repository count: ", data.public_repos);
//         console.log("Repos: ", data.repos_url);
//     }
// ).catch(error => console.error('Error:', error));





// String Interpolation! (Template Literals)
let fullname = "Anuj Das";
console.log(`Hello my name is ${fullname}`);


const email = new String("anujdas10.personal@gmail.com")
console.log(email);
console.log(email.length);
console.log(email.toUpperCase());
console.log(email.__proto__.toLowerCase);

console.log(email.indexOf('@'));
console.log(email.charAt(5));

let parsedEmail = email.substring(0, email.indexOf('@'));
let domainOfEmail = email.substring(email.indexOf('@') + 1, email.length)
console.log(`Email ID: ${parsedEmail}\nDomain: ${domainOfEmail}`);



let msg = 'I like my yeobo!';
let mainMsg = msg.slice(0, 7);
console.log(mainMsg);

let newMsg = msg.slice(7, msg.length);
console.log(newMsg);


const response = "    anuj-das-10    ";
console.log(response);
console.log(response.trim());



const url = "https://campuswhisper.com/Anuj%20Das";
console.log(url.replace("%20", " "));
console.log(url.includes("campuswhisper.com"));


// String to Array
const message = "Hello I will be converted to Array of words";
console.log(message);

const msgArr = message.split(" ");
console.table(msgArr);





