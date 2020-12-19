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

// var finalArraySelection = [];


// Function Start User input for password options 

function generatePassword () {

  var finalPassword = '';

  var length = parseInt(
    prompt('How many characters do you want the password to have?')
  );


    /*
    
    if(containsNumber) {
      finalArraySelection.concat(numericCharacters)
    }
    if(containsLowerCase) {
      finalArraySelection.concat(lowerCasedCharacters)
    }
  */

  for(var i = 0; i < length; i++){

    var randomNumber = Math.floor(Math.random()*lowerCasedCharacters.length);

    var randomPickedCharacter = lowerCasedCharacters[randomNumber];

    finalPassword = finalPassword + randomPickedCharacter;
  }



   return finalPassword;
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
