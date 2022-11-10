// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Brings up an alert giving us menu options
   var input = window.prompt("How many characters would you like your password? Min:8 Max:128");
   console.log(input);

   var passLength = parseInt(input);
  //Gives user an alert if the input is not a number
   if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    window.alert("Please use a number between 8 and 128!");
    return
   }
  //Set a variable that is a confirmation window storing a boolean value for including numbers
   var numbers = window.confirm("Should the password include numbers?")
   console.log(numbers);
  //Set a variable that is a confirmation window storing a boolean value for including uppercase
   var uppercase = window.confirm("Should the password include uppercase?");
   console.log(uppercase);
  //Set a variable that is a confirmation window storing a boolean value for including lowercase
   var lowercase = window.confirm("should the password include lowercase?");
   console.log(lowercase);
  //Set a variable that is a confirmation window storing a boolean value for including special characters
   var specialCharacters = window.confirm("Should the password include special characters?");
   console.log(specialCharacters);
  //If all of the character options are false, exit function
   if (numbers === false && uppercase === false && lowercase === false && specialCharacters === false){
    window.alert("Must select 'OK' for at least one option!")
    return
   }

   var listNum = ["0","1","2","3","4","5","6","7","8","9"];
   var listSym = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","[","}","]",":",";","<",">",".","?","/","|"];
   var listLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var listUpper = [];

   for (var i = 0;i < listLower.length;i++) {
    listUpper[i] = listLower[i].toUpperCase();
   }

   var includedCharList = [];

   if (numbers === true) {
    includedCharList.push(listNum);
   }

   if (uppercase === true) {
    includedCharList.push(listUpper);
   }

   if (lowercase === true) {
    includedCharList.push(listLower);
   }

   if (specialCharacters === true) {
    includedCharList.push(listSym);
   }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);