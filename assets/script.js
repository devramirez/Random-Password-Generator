// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var allCharacters = "";

// Function to determine the length and complexity of the password
function generatePassword () {
  console.log("Button was clicked")
  var passwordLength = prompt(
    "The password must be between 8 and 128 characters long, how long would you like it to be?"
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    alert("Please enter a number between 8 and 128 characters.");
  } else {
    var lowercaseChar = confirm("Would you like to include lower case characters?");
    if(lowercaseChar) {
      allCharacters += lowercaseChar
    };
    var uppercase = confirm("Would you like to include upper case characters?");
    if(uppercase) {
      allCharacters += uppercase
    };
    var specialChar = confirm("Would you like to include special characters?");
    if(specialChar) {
      allCharacters += specialChar
    };
    var numberChar = confirm("Would you like to include numbers?");
    if(numberChar) {
      allCharacters += numberChar
    };

    if (
      lowercaseChar === false && 
      uppercase === false && 
      specialChar === false && 
      numberChar === false
    ) {
      alert("Please select at minumum one character type.")
      generatePassword()
    }
  }
  var password = "";
  for(let i = 0; i < passwordLength; i++) {
    password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);
