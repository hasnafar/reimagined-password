// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;


function makeid(passwordLength, uc, lc, nc, sc) {
  
  var result= '';

  var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var numericCharacters = '0123456789';
  var specialCharacters = '!#$%&()*+,-./:;<=>?@[^_`{|}~';
  var allOptions = [upperCharacters, lowerCharacters, numericCharacters, specialCharacters];

  var selector = [uc,lc,nc,sc];
  
  var copyAllOptions= [];
  
  for (var i=0;i<selector.length;i++) {
  	
    if(selector[i]==true) {
    copyAllOptions.push(allOptions[i]);
    }
  }


  for(var i=0;i<passwordLength;i++){
  
  var stringSelector = Math.floor(Math.random()*copyAllOptions.length)+1;

  if(stringSelector===1){

    var charToAdd = copyAllOptions[0].charAt(Math.floor(Math.random() * copyAllOptions[0].length));
    result=result+charToAdd; //result+=chartoAdd

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
 console.log(result);
 return result;
}



function generatePassword() {
length = prompt("How long do you want your password to be? Choose between 8 and 128 characters.");

while (length < 8) {
 length = prompt("Please choose between 8 and 128 characters in length");
}
while (length > 128) {
 length = prompt("Please choose between 8 and 128 characters in length");
}



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


return makeid(length,selectUppercase,selectLowercase,selectNumeric,selectSpecial);

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword)

