// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var upperCaseCheck;
var numericalCheck;
var specialCharCheck;

// Function to determine the length of the password
function determineLength() {
  passwordLength = prompt("How many characters would you like your password to be? Choose a number between 8 and 128: ");

    if (passwordLength < 8) {
      alert("Password must be between 8 and 128 characters");
      determineLength()
    } else if (passwordLength > 128) {
      alert("Password must be between 8 and 128 characters");
      determineLength()
    } else if (isNaN(passwordLength)) {
      alert("Password must be between 8 and 128 characters");
      determineLength()
    } 
    return passwordLength();
}





















// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
