//  singletone 
  // define single tone  user 
  // const baseer = new Object()

  let regular = {
    fullname :{
       email : "baseerahmedtunio4@gmail.com",
      UserName:{
          name :"baseer Ahmed",
          fathername : "parvez"
          
      }
    }
  }

  console.log(regular.fullname.UserName)


  // object assign to use the marge objects

  const object = {1 : "a" , 2 : "b"}
  const object2 = {3 : "a" , 4 : "b"}
  const object3 = {5 : "a" , 6 : "b"}

  // console.log(object)
 const Object4 = Object.assign({},object,object2,object3);
  console.log(Object4);   



  const user = [
    {
      id:1,
      email : "baseertunio4@gmail.com"
    },

    {
      id:1,
      email : "baseertunio4@gmail.com"
    },

    {
      id:1,
      email : "baseertunio4@gmail.com"
    }
  ]
console.log(user[1].email)
console.log(Object.keys(regular.fullname))
console.log(Object.values(regular.fullname))
