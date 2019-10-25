/* Create an empty array. Ask the user 6 times to enter
a number, if it is odd enter it in the array. */

// New empty array
var myArray = [];
for(var i=0; i<6; i++){
  var number = parseInt(prompt("Enter a number, if it is odd enter it in the array."));
  if(number%2 != 0){
    myArray.push(number);
  }
}

document.getElementById("box").innerHTML = myArray;