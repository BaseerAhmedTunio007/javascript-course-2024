let myDate = new Date()

 console.log(myDate)
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());



 let CurrentDate = new Date(5,0,2024)
 let CurrentDateTime = new Date(5,4,2024,4,5)
 let currentdate = new Date("02-02-2024")


 console.log(CurrentDate.toDateString());
 console.log(CurrentDateTime.toLocaleString());
 console.log(currentdate.toLocaleString())


//  timestamp is vary important using game pol etc 

  let mytimeStemp = Date.now()
  console.log(currentdate.getTime())
  // to chage the seconds  
  console.log(Math.floor(Date.now()/1000));


  // now you can check the only mounth
  
  let currentMounth = new Date ("03-04-2024");
  console.log(currentMounth.getDate());


  const xmas = new Date("2015-12-25");
  xmas.setYear(95);
 const year = xmas.getYear();
 console.log(year);


 const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

 newDate = new Date('default', 
{
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
})

console.log(date.toLocaleString("de-DE",newDate));