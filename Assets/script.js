
//Password arrays
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var generateBtn = document.querySelector("#generate");

function generatePassword() {
 // 1. Prompt user for the password criteria 
 var userInput = window.prompt("Password character length? (Choose between 8 -128 characters)");

 //converts string into integer
 var passwordLength = parseInt(userInput);

//returns boolean for userInput if the return value is not an integer
 if (isNaN(passwordLength)) {
  window.alert("That's not a number!");
  return generatePassword();
 } 

 // a. password length 8 < 128
 else if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password length must be between 8 and 128 characters");
  return generatePassword();
 } 

 // 2. validate the input.  
 var userNumbers = window.confirm("Click Ok if you would like to use numbers in your password");
 var userSymbols = window.confirm("Click Ok if you would like to use special characters in your password");
 var userUpperCase = window.confirm("Click Ok if you would like to use uppercase letters in your password");
 var userLowerCase = window.confirm("Click Ok if you would like to use lowercase letters in your password");

 //while loop for password parameters. If no parameters are chosen, it returns a false with prompt.
 while(userNumbers === false && userSymbols === false && userUpperCase === false && userLowerCase === false) {
  window.alert ("Please choose at least one parameter");
  return generatePassword();
 }

 //creates array for password inputs
 var passwordPrompts = []

 if (userNumbers) {
  passwordPrompts = passwordPrompts.concat(numbers);
 }
 if (userSymbols) {
  passwordPrompts = passwordPrompts.concat(symbols);
 }
 if (userUpperCase) {
  passwordPrompts = passwordPrompts.concat(alphaUp);
 }
 if (userLowerCase) {
  passwordPrompts = passwordPrompts.concat(alphaLow);
 }

// 3. Generate password.
// reference an empty variable
var passwordOutput = "";

// math.floor(math.random) use to create random password.
// create comment for below
for (let i = 0; i < passwordLength; i++) {
passwordOutput = passwordOutput + passwordPrompts[Math.floor(Math.random() * passwordPrompts.length)]; 
} 
// 4. display the generated password on the page 
 return passwordOutput;
}

// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
