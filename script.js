// Assignment Code

//Password arrays
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var generateBtn = document.querySelector("#generate");

function generatePassword() {
 // 1. Prompt user for the password criteria 
 var userInput = window.prompt("Password character length?")

 //converts string into integer
 var passwordLength = parseInt(userInput)

//returns boolean for userInput
 if (isNaN(passwordLength)) {
  window.alert("That's not a number!")
  return
 } 

 // a. password length 8 < 128
 if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password length must be between 8 and 128 characters")
  return
 } 

 var userNumbers = window.confirm("Would you like to use numbers in your password?")
 var userSymbols = window.confirm("Would you like to use symbols in your password?")
 var userUpperCase = window.confirm("Would you like to use uppercase letters in your password?")
 var userLowerCase = window.confirm("Would you like to use lowercase letters in your password?")

 git 
 // 2. validate the input. 
 // 3. Generate password.
 console.log (userNumbers);
// 4. display the generated password on the page 
 return "new password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
