// singleton 
// Object literalis 

 const symb = Symbol('keyone')

 const jsUser = {
       name     : "Baseer", 
      fathername: "parvez",
       cast     : 'tunio',
       location : "khanwahan ",
       ['symb'] :"keyone",
       login    : false,
       lastSeen :  ['Monday']
  }

  console.log(jsUser.name);
  console.log(jsUser['cast']);
  console.log(jsUser['lastSeen'])
  console.log(jsUser['symb'])   //calling the key way 
  jsUser.name = 'Arshad';       // change the value using the way
  console.log(jsUser);  

//   Object.freeze(jsUser);      // do not changing in this object freeze statement
//   jsUser.name ="Uzair";          
//   console.log(jsUser);


//    function 

 jsUser.greeting = function(){
      console.log("hello ")
 }
 jsUser.greetingTwo = function(){
      console.log(`hello user , ${this.name}`)
 }

 console.log(jsUser.greeting()); // function are use greeting 
 console.log(jsUser.greetingTwo())
