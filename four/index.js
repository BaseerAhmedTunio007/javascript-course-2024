const temp = 41 
 if (temp  < 50 ){

  console.log("temp is less than 50")

 }else{
   console.log("tem greater than 50")

 }

    // cheack variable with datatype 

 const num1 = 50
 const num2 = "50"

 if ( num1 === num2) {
  console.log(" variable with datatype check  ")
 }else{
  console.log("variable are same and data type or not same");
 }


//  ++++++++++++++++++++++++++end +++++++++++++++++++++++++



//  if else statement use 

const balance = 1000

 if (balance < 500) {
   console.log("balance is less than 500")
 } else if (balance < 750) {
  console.log("balance is less than 500")
 } else if(balance < 750) {
  console.log("balance is less than 750")

 } else if (balance < 900) {
  console.log("balance is less than 900")
   
 }else {
  console.log("balance is less than 1200")
   
 }

  // if else statement end statement 


  //  ++++++++++++++++Logical opeartor +++++++++++++++++++++

const userloggedIn = true
const dabitCard = true
const loggedInFromGoogle = false
const logedInEmail = true

if (userloggedIn && dabitCard) {
   console.log("you can by webdevelopment course")
}


if (loggedInFromGoogle || logedInEmail) {
  console.log("your are logged in this website through email or goole id")
}



  // +++++++++++++++ end logical opeartor +++++++++++++++++++