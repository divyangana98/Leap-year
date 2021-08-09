var readlineSync = require("readline-sync");
var moment = require("moment");
var chalk = require("chalk");
const error = chalk.bold.red;
const correct = chalk.bold.green;
const notALeapyear = chalk.bold.yellow;

var dob = readlineSync.question(chalk.bold.blue("Enter your date of birth in the format DD/MM/YYYY: "));

if(moment(dob,'DD/MM/YYYY',true).isValid())
{
  console.log("Correct Format!Let's check if it's a leap year...");
  var db = new Date(dob);
  var year = db.getFullYear();
  checkLeapYear(year);


}
else
{
  console.log(error("Please enter valid date format"));
  
}

  function checkLeapYear(year){
    if(year%4 == 0){ 
      if(year%100 == 0){ 
        if(year%400 == 0){ 
          console.log(correct("It is a leap year"));
        }else{ 
          console.log(notALeapyear("It is not a leap year"));
        }
      }else{ 
        console.log(correct("It is leap year"));
        }
    }else{ 
      console.log(notALeapyear("It is not a leap year"));
    }
  }
