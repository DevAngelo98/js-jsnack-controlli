/* Create an empty array. Ask the user 6 times to enter
a number, if it is odd enter it in the array. */

// New empty array
var myArray = [];

function checkNumber (value) {

  if(isNaN(value) || value === "" || value === null){
    return false;
  } else {
    return true;
  }
}

for(var i=0; i<6; i++){
  var number = prompt("Enter a number, if it is odd enter it in the array. " + (i+1));
  if(checkNumber(number)){
    if(number%2 != 0){
      myArray.push(number);
    }
  } else{
    i--;
  }
}

if(myArray.length!=0){
  document.getElementById("box").innerHTML = myArray;
} else {
  document.getElementById("box").innerHTML = "Array is empty, you have entered positive numbers";
}

