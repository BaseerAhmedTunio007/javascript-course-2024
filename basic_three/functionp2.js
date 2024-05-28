  function CalculateCardPrice (...num1){     /// ... is a rest or sprearte opreator
    return num1;
  }
  // console.log(CalculateCardPrice(2, 3, 3 , 4));


  const user = {
    Username : "Baseer",
    Price    : 3000
  }

  // console.log(user.Username)
  function handleObject(anyobject){
    console.log(`Username is ${anyobject.Username} , the price is  ${anyobject.Price}`)
  }
  // handleObject(user);
  handleObject({
    Username:"Arshad",
    Price   : 3000
  })             // direct use of object Pass 



  MynewArray = [400 , 500 , 500]
  function Secondvalue(getarray){
    return getarray[0];
  }
  console.log(Secondvalue(MynewArray))  
  console.log(Secondvalue([200, 400 , 500]))  
