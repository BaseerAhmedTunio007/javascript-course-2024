const user = {
   username : "Baseer",
   price    : 5000,

   LoginMessage : function(){
    console.log(`Welcome ${this.username} , new user`);
   }


 }
 user.LoginMessage()
 user.username= "Faraz";
 console.log(user.username)



 //+++++++++++++++ARROW FUNCTIONS +++++++++++++++++++++++++++++

   const one = (num1 , num2) => {
     return num1 + num2
   }
   console.log(one(34 , 6))




 //+++++++++++++++ARROW FUNCTIONS another exmaple one line  printing code +++++++++++++++++++++++++++++

 const two =(num1 , num2 ) => num1 + num2 
   console.log(two(54 , 7))

   ///++++++++++++++++Arrow function end syntax example +++++++++++++++++


    

