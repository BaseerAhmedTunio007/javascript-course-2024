// for loops 

 for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
      // console.log("5 number is best number")

  }
  // console.log(element)
  
 }


   for (let i = 0; i <=2; i++) {
    // console.log(`outer loop  value${i}`)

    for (let j = 1; j <=10; j++) {
    //  console.log(`Inner loops value ${j}`)
    // console.log( i + ' * ' + j + ' = ' + i*j );
      
    }
    
   }

   let myArray = ['Baseer ' , 'Ahmed' , 'tunio'];
    for (let index = 0; index < myArray.length; index++) {
      const element = myArray[index];
      // console.log(element)
      
    }

        // break and continue  stement 


    for (let index = 0; index < 20; index++) {
      const element = index;
      if (element == 5) {
        console.log( '5 is detected' )
        break
      }
      console.log(element)
      
    }