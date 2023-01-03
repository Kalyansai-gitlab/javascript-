let num = 8;
let result

if (num%2===0)
  result ="even"
  else 
     result ="odd"

     console.log(result);

   //Switch Statement

// mon -7am
//tue -thurs - 4am
//fri - 9am
//sat - sun - 8am

let day ="wednesday"

switch(day){
    case 'Monday':
        console.log("7am");
        break;
        case 'Tuesday':
        case 'wednesday':
        case 'Thursday':
        console.log("4am");
        break;
        case 'Friday':
        console.log("9am");
        break;
        case 'Saturday':
        case 'Sunday':
        console.log("8am");


}