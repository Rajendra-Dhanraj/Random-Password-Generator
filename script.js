var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

function passwordSelections () {
// Obtain Password Length Variable and return message until parameters met.

var length = parseInt(
  prompt('How many characters would you like in the password?')
);
while (isNaN(length) || length < 8 || length > 128) 
length = Number(prompt("Selection must be 8 - 128 characters, how many characters would you like in the password?"));

var includeNumericCharacters = confirm(
  'Would you like to have numeric characters?'
);
var includeLowerCasedCharacters = confirm(
  'Would you like to have lowercase characters?'
);
var includeUpperCasedCharacters = confirm(
  'Would you like to have uppercase characters?'
);
var includeSpecialCharacters = confirm(
  'Would you like to have special characters?'
);

// confirm user has made atleast one character selection or return to password selections

if 
(includeSpecialCharacters === false && includeNumericCharacters === false && 
includeLowerCasedCharacters === false && includeUpperCasedCharacters === false) 
{
  alert('One character type must be selected, please try again!');
  
  passwordSelections();
}

// Save the user selections
var passwordOptions = {

  length: length,
  includeNumericCharacters: includeNumericCharacters,
  includeUpperCasedCharacters: includeUpperCasedCharacters,
  includeLowerCasedCharacters: includeLowerCasedCharacters,
  includeSpecialCharacters: includeSpecialCharacters
};

return passwordOptions;

}

// function to pick random index from applicable array
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}

// function to create password based on user selections
function generatePassword() {
  var options = passwordSelections();
  var final = [];

  // store selected character types 
  var userSelectedCharacters = [];
  // stores character from each array that user selected 
  var assuredCharacters = [];

//add numberic characters to assured characters variable
  if (options.includeNumericCharacters) {
    userSelectedCharacters  = userSelectedCharacters.concat(numericCharacters);
    assuredCharacters.push(getRandom(numericCharacters));
  }

//add lower case characters to assured variabile
  if (options.includeLowerCasedCharacters) {
    userSelectedCharacters = userSelectedCharacters.concat(lowerCasedCharacters);
    assuredCharacters.push(getRandom(lowerCasedCharacters));
  }

//add upper case characters to assured variable
  if (options.includeUpperCasedCharacters) {
    userSelectedCharacters = userSelectedCharacters.concat(upperCasedCharacters);
    assuredCharacters.push(getRandom(upperCasedCharacters));
  }

  //add special characters to assured characters variable
  if (options.includeSpecialCharacters) {
    userSelectedCharacters = userSelectedCharacters.concat(specialCharacters);
    assuredCharacters.push(getRandom(specialCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(userSelectedCharacters);

    final.push(possibleCharacter);
  }

  for (var i = 0; i < assuredCharacters.length; i++) {
    final[i] = assuredCharacters[i];
  }

// final, string includes all random password selections 
  return final.join('');
}

//Output connection to HTML



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
