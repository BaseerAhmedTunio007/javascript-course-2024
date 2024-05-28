// let a = 60
// const b =55 
// var c = 400    scope to value print var 
var c = 7000      //global scope
 
if(true){     //Block scope
 let a = 60
const b =55 
var c = 400
}
// console.log(a)
// console.log(b)
// console.log(c)



                         // nested using the function 
    function one(){
      const username = 'Baseer'

      function two(){
        const website = "youtube"
        console.log(username)
      }

      // console.log(website)

      // two()
    }
    // one()




    // +++++++++++++++ intesting ++++++++++++++++++++



    function oneadd(num1){
      return num1 +1
    }
     console.log (oneadd(5))


      const addtwo =function(num1){
        return num1 +2
      }
      console.log(addtwo(5))