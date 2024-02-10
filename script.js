// Array of special characters to be included in password
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

// Function to prompt user for password options
function getPasswordOptions() {
  // determine the number of characters and it is stored in the variable passwordLength
  var passwordLength = prompt("How many characters would you like in your password? (8-128)");
  
// variable error is set to true to indicate that an error has occurred
  var error = true;
  //while loop will continue until the user provides a valid password length
  while (error) {
    if (passwordLength < 8 || passwordLength > 128) {
//alert is displayed to the user asking them to input a number between 8 and 128. 
//The prompt() function is called again to get a new input from the user.
      alert("Please input a number between 8 and 128.");
      passwordLength = prompt("How many characters would you like in your password? (8-128)");
    } 
    //if the error is false it exits the loop and creates prompt for characters types by calling on the arrays above 
    else {
      error = false;
      //variables uses a boolean set to false indicating the user has not selected it yet 
      var charType = [{
        type: "special characters",
        character: specialCharacters,
        incl_char_type: false
      },
      {
        type: "numeric characters",
        character: numericCharacters,
        incl_char_type: false
      },
      {
        type: "lowercase characters",
        character: lowerCasedCharacters,
        incl_char_type: false
      },
      {
        type: "uppercase characters",
        character: upperCasedCharacters,
        incl_char_type: false
      }];
      var charCheck = false;
      while (!charCheck) {
        for (let i = 0; i < charType.length; i++) { // asks the questions to include different character types 
          charType[i].incl_char_type = confirm("Would you like your password to include " + charType[i].type + "?");
        };
        for (let i = 0; i < charType.length; i++) { // checks if any are selected as true
          if (charType[i].incl_char_type === true) {
            charCheck = true;
          }
        };
        // if none are selected then an alert occurs to ask for characters to be selected.
        if (!charCheck) {
          alert("Please select at least one type of character.");
        }
      } 
      //CharType logged for debugging 
      console.log(charType);
        // function returns the object containing the password_length and char_types 
      return {
        password_length: passwordLength,
        char_types: charType
      };
      // generate password with user input

    }}};

// console.log("is this the options", getPasswordOptions)
// console.log("i think this is the prompt?", passwordLength)


// Function for getting a random element from an array
function getRandom(arr) {
    var randomIndex= Math.floor (Math.random () * arr.length)
    var randomArray= arr[randomIndex]
  return randomArray
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var passwordLength = passwordOptions.password_length;
  var charType = passwordOptions.char_types;
  var generatePassword = [];

if (charType [0] ["incl_char_type"]) {
  generatePassword= generatePassword.concat (specialCharacters)
} 

if (charType [1] ["incl_char_type"])
{generatePassword = generatePassword.concat (numericCharacters)}

if (charType [2] ["incl_char_type"]) {
  generatePassword = generatePassword.concat (lowerCasedCharacters)
}
if (charType [3] ["incl_char_type"]) {
  generatePassword =generatePassword.concat (upperCasedCharacters)
}
  // var passwordCharacters = [passwordLength];
  console.log (generatePassword)
  var finalPassword = [] 
  for (var i=0; i<passwordLength; i++) {
    var character= getRandom( generatePassword)
    finalPassword.push (character)
  }
  return finalPassword.join ("")


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);