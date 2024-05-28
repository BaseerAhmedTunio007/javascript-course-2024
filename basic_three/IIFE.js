// Immeditiately Invoked Function Expression (IIFE)

(function chia(){
  console.log(`connected DB`)
})();


  // arrow function using iife
(() => {
  console.log(`Connection database two`)

}) ()

// end arrow function iife 



  // arrow function using iife using arrgument pass
  ((name) => {
    console.log(`Connection database two ${name}`)
  
  }) ('Baseer')
  
  // end arrow function iife 