// Global variables are declared here.
var generateBtn = document.querySelector("#generate");
var length;

// Takes arguments from generatePassword function to make the password.

function makepwd(passwordLength, uc, lc, nc, sc) {
  
  var result= '';

  var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var numericCharacters = '0123456789';
  var specialCharacters = '!#$%&()*+,-./:;<=>?@[^_`{|}~';
  var allOptions = [upperCharacters, lowerCharacters, numericCharacters, specialCharacters];

  var selector = [uc,lc,nc,sc];
  
  var copyAllOptions= [];

  //Creates a copy of allOptions array based on user choices.
  
  for (var i=0;i<selector.length;i++) {
  	
    if(selector[i]==true) {
    copyAllOptions.push(allOptions[i]);
    }
  }

  //Selects randomly from the user defined options then randomly selects a character from that option
  //and adds it to the result string

  for(var i=0;i<passwordLength;i++){
  
  var stringSelector = Math.floor(Math.random()*copyAllOptions.length)+1;

  if(stringSelector===1){

    var charToAdd = copyAllOptions[0].charAt(Math.floor(Math.random() * copyAllOptions[0].length));
    result=result+charToAdd; 

  }

  else if (stringSelector==2) {
    var charToAdd = copyAllOptions[1].charAt(Math.floor(Math.random() * copyAllOptions[1].length));
    result=result+charToAdd;
  }

  else if (stringSelector==3) {
    var charToAdd = copyAllOptions[2].charAt(Math.floor(Math.random() * copyAllOptions[2].length));
    result=result+charToAdd;
  }
  else if (stringSelector==4) {
    var charToAdd = copyAllOptions[3].charAt(Math.floor(Math.random() * copyAllOptions[3].length));
    result=result+charToAdd;
  }
 
 }

 //returns the result string

 console.log(result);
 return result;
}


// The user will first be prompted to pick a password length between 8-128 characters. 
// They will only move on once a length between 8-128 characters is selected.

function generatePassword() {
length = prompt("How long do you want your password to be? Choose between 8 and 128 characters.");


//While loop to confirm that user has picked a viable option for length

while (length < 8) {
 length = prompt("Please choose between 8 and 128 characters in length");
}
while (length > 128) {
 length = prompt("Please choose between 8 and 128 characters in length");
}

// Prompts to confirm character choices. At least one criteria must be chosen. Otherwise keeps looping
while(true) {

  var selectUppercase = confirm ("Click OK to include uppercase characters.");
  var selectLowercase = confirm("Click OK to include lowercase characters.");
  var selectNumeric = confirm ("Click OK want to include numeric characters.");
  var selectSpecial = confirm ("Click OK  want to include special characters.");

if (!selectLowercase && !selectUppercase && !selectNumeric && !selectSpecial) {
  alert("You must choose a criteria.");
}
else
 break;
}

//Calls makepwd function with the user choices passed on

return makepwd(length,selectUppercase,selectLowercase,selectNumeric,selectSpecial);

}


// The password will be written on the page.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Once the generate button is clicked, the writePassword function will be called.
document.getElementById("generate").addEventListener("click", writePassword)

