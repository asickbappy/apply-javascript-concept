 const year = 3996;
 let remainder = year % 4;
 if(remainder == 0){
    console.log('your year is leapyear');
 }
 else{
    console.log('your year is not leapyear');
 }

 function isLeapYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
 }
  const check = isLeapYear(2000);
  console.log(check);