const jsUser = {
  name: 'baseer',
  fathername: 'parvez',
  email: 'baseertunio4@gmail.com'
};

console.log(jsUser.email); // Accessing email property directly
console.log(jsUser['email']); // Accessing email property using bracket notation

let greeting = function() {
  console.log("you are best friends");
};

let greetingTwo = function() {
  console.log(`You are best friends, ${this.email}`);
};

greeting(); // Calling the greeting function
greetingTwo.call(jsUser); // Calling the greetingTwo function with the context of jsUser
