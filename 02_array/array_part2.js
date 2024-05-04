const heros = ['salman khan ' , 'skr' , 'amir khan'];
const dc_heros = ['superman' , 'flash' , 'batman'];
  console.log(heros[1]);

  // console.log(heros.push(dc_heros))
  // console.log(heros.concat(dc_heros))

      //  marge the two values using the .concat
  const all_heros = (heros.concat(dc_heros));
   console.log(all_heros);

  //  spearde 

  const all_new_heros = [...heros , ...dc_heros];
    console.log(all_new_heros);


    // one array combine to all other array are using the flat 

    const another_array = [1,2,3 , [1,2,3,4],6,7,8,[1,2,3,4,[1,2,3,4]]];
    const real_another_array = another_array.flat(Infinity);
      console.log(real_another_array);


      // is_array,array_from_array_of 

      console.log(Array.isArray('Baseer'));
      console.log(Array.from("Baseer"));

      let score1 = 100;
      let score2 = 200;
      let score3 = 300;

      console.log(Array.of(score1,score2, score3));