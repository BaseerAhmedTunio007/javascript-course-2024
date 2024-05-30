// falsy values 
 
// 0 , null , '' , -0 , BigInt , undefined , NaN , 0n

// truthy value 
// '0' , 'false' , [] , {} ,function(){}
const useremail = []
if (useremail.length === 0){
  console.log("object is empty")
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0){
  console.log("object is empty ")
}

// Nullish   Coalescing Opeartor (??) : null undefined

let val1 ;
val1 = 5 ?? 10 

// ternairy opeartor 
//  condition  ? true : false \

const IcePrice = 100
 IcePrice >= 50 ? console.log("this is stement is true") : console.log("this is stement is false");