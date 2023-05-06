// Assignment Code

var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericalChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var possiblePassword = [];

// Function to determine the length and complexity of the password
function generatePassword () {
  // prompts user for password criteria and if wrong input is entered, user has to start again
    var passwordLength = prompt("The password must be between 8 and 128 characters long, how long would you like it to be?");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
      alert("Please enter a number between 8 and 128 characters.");
      generatePassword()
    }
    hasLowercase = confirm("Do you want your password to have lowercase characters?")
    
    hasUppercase = confirm("Do you want your password to have uppercase characters?")
  
    hasNumeric = confirm("Do you want your password to have numerical characters?");

    hasSpecial = confirm("Do you want your password to have special characters?");
   
    if(
      hasLowercase === false &&
      hasUppercase === false &&
      hasNumeric === false &&
      hasSpecial === false
    ) {
      alert("Please select at minimum one character type!")
      generatePassword();
    }
    // concatenating contents of the char variables into possiblePassword
    if(hasLowercase) {
      possiblePassword = possiblePassword.concat(lowercaseChar);
    }
    if(hasUppercase) {
      possiblePassword = possiblePassword.concat(uppercaseChar);
    }
    if(hasNumeric) {
      possiblePassword = possiblePassword.concat(numericalChar);
    }
    if(hasSpecial) {
      possiblePassword = possiblePassword.concat(specialChar);
    }

     // for loop which randomizes passwords
     var finalPassword = ""
     for(let i = 0; i < passwordLength; i++) {
       let ranPassGen = [Math.floor(Math.random() * possiblePassword.length)];
       finalPassword = finalPassword + possiblePassword[ranPassGen];
     }
     return finalPassword
}

// Generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);
