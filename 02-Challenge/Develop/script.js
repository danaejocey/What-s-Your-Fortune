function generatePassword() {

  // Characters
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Numbers = "0123456789";
var Symbols = "!@#$%^&*_-+=";
var possibleCharacter = [];

 // get input and validate
 numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
 if (numberOfCharacters < 8 || numberOfCharacters > 128) {
   return "Please choose between 8 and 128 only.";
 }
 else {
   alert("Your password will be " + numberOfCharacters + " characters long.");
   
 }

 hasLowercase = confirm("Do you want lowercase characters?");
 if (hasLowercase) {
   var turnToLowercase = alert("You have chosen Yes.");
 }
 else {
   alert("You have chosen No.");
 }

 hasUppercase = confirm("Do you want uppercase characters?");
 if (hasUppercase) {
   alert("You have chosen Yes.");
 }
 else {
   alert("You have chosen No");
 }

 hasNumbers = confirm("Do you want to use numbers?");
 if (hasNumbers) {
   alert("You have chosen Yes");
 }
 else {
   alert("You have chosen No.");
 }

 hasSymbols = confirm("Do you want special characters?");
 if (hasSymbols) {
   alert("You have chosen Yes.");
 }
 else {
   alert("You have chosen No.");
 }

 // combine special characters with `characters`

 if(Lowercase) {
  possibleCharacter = possibleCharacter.concat(Lowercase)
 }
 if(Uppercase) {
  possibleCharacter = possibleCharacter.concat(Uppercase)
 }
 if(Numbers) {
  possibleCharacter = possibleCharacter.concat(Numbers)
 }
 if(Symbols) {
  possibleCharacter = possibleCharacter.concat(Symbols)
 }
}
 // Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

