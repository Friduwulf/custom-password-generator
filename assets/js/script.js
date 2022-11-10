// Assignment Code
var generateBtn = document.querySelector("#generate");

//Gives a random integer between a range
function random(min, max) {
  return Math.floor(Math.random()*(max-min) + min);
}

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
  //Creates arrays that contain all of the valid characters in their character catagories
    var listNum = ["0","1","2","3","4","5","6","7","8","9"];
    var listSym = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","[","}","]",":",";","<",">",".","?","/","|"];
    var listLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var listUpper = [];
  //Takes the listLower and turns each character into an uppercase version, and stores it in listUpper.
    for (var i = 0;i < listLower.length;i++) {
      listUpper[i] = listLower[i].toUpperCase();
    }
  //Creates an empty array to store selected character types arrays as one array
    var includedCharList = [];
  //Adds the numbers array to the selected array
    if (numbers === true) {
      includedCharList = includedCharList.concat(listNum);
    }
  //Adds the uppercase array to the selected array
    if (uppercase === true) {
      includedCharList = includedCharList.concat(listUpper);
    }
  //Adds the lowercase array to the selected array
    if (lowercase === true) {
      includedCharList = includedCharList.concat(listLower);
    }
  //Adds the special characters array to the selected array
    if (specialCharacters === true) {
      includedCharList = includedCharList.concat(listSym);
    }
  //logs the selected array
    console.log(includedCharList);
  //Creates a blank array to store the generated password
    var password = "";
  //A function to be called that randomly generates a new password using the selected variables
    function passwordGeneration() {
  //Selects a random character from the list of selected characters for each position for the password length
      for (var i = 0;i < passLength;i++) {
        var randomGen = includedCharList[random(0, includedCharList.length - 1)];
        console.log(randomGen);
  //Adds each of the randomly selected values to the password string  
        password = password.concat(randomGen);
        console.log(password);
      }
    }
  //Calls the function to generate a password
    passwordGeneration();
  //Creates variables used to check if the password contains at least one of each requested character type
    var numCheck = false;
    var upperCheck = false;
    var lowerCheck = false;
    var symCheck = false;
  //Function to check each the password for each character type that was requested
    function validationCheck() {
  //If numbers were requested, ensures that the password contains at least one number, if not, it calls the passowrdGeneration function to make a new password
      if(numbers === true) {
        if (listNum.some(v => password.includes(v))) {
          numCheck = true;
          console.log("Password contains a number");
        } 
        else {
          numCheck = false;
          password = "";
          passwordGeneration();
          console.log("Next password attempt: " + password);
        }
      } 
    //If numbers were not requested, validate numbers
      else if (numbers === false) { 
        numCheck = true;
        console.log("No number needed")
      }
    //If uppercase were requested, ensures that the password contains at least one uppercase, if not, it calls the passowrdGeneration function to make a new password
      if(uppercase === true) {
        if (listUpper.some(v => password.includes(v))) {
          upperCheck = true;
          console.log("Password contains an uppercase");
        } 
        else {
          upperCheck = false;
          password = "";
          passwordGeneration();
          console.log("Next password attempt: " + password);
          }
      }
    //If uppercase were not requested, validate uppercase
      else if (uppercase === false) {
        upperCheck = true;
        console.log("No uppercase needed")
      }
    //If lowercase were requested, ensures that the password contains at least one lowercase, if not, it calls the passowrdGeneration function to make a new password
      if(lowercase === true) {
        if (listLower.some(v => password.includes(v))) {
          lowerCheck = true;
          console.log("Password contains a lowercase");
        } 
        else {
          lowerCheck = false;
          password = "";
          passwordGeneration();
          console.log("Next password attempt: " + password);
          }
      }
    //If lowercase were not requested, validate lowercase
      else if (lowercase === false) {
        lowerCheck = true;
        console.log("No lowercase needed")
      }
    //If symbols were requested, ensures that the password contains at least one symbol, if not, it calls the passowrdGeneration function to make a new password
      if(specialCharacters === true) {
        if (listSym.some(v => password.includes(v))) {
          symCheck = true;
          console.log("Password contains a special character");
        } 
        else {
          symCheck = false;
          password = "";
          passwordGeneration();
          console.log("Next password attempt: " + password);
          }
      }
    //If symbols were not requested, validate symbols
      else if (specialCharacters === false) {
        symCheck = true;
        console.log("No symbol needed")
      }
    }
  //Runs the function which validates that the password contains at least one of each requested character type
    validationCheck();
  //If all of the validation checks for each character type are true, return. If any are false, run validation check again which will create a new password
    if (numCheck === true && upperCheck === true && lowerCheck === true && symCheck === true) {
      return password;
    }
    else {
      validationCheck();
    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);