function checkNumber (value) {
  if(isNaN(value) || value === "" || value === null){
    return false;
  } else {
    return true;
  }
}

var sum = 0;
for(var i=0; i<5; i++){
  var numberEntered = prompt("Enter the " + (i+1) + " value: (For)");
  console.log(numberEntered);
  if(checkNumber(numberEntered)){
    var number = parseFloat(numberEntered);
    sum += number;
  }
  else{
    i--;
  }
}

var sum1 = 0;
var j = 0;
while(j<5){
  var numberEntered2 = prompt("Enter the " + (j+1) + " value: (While)");
  if(checkNumber(numberEntered2)){
    var number1 = parseFloat(numberEntered2);
    sum1 += number1;
  }
  else{
    j--;
  }
  j++;
}

document.getElementById("box").innerHTML = "Cycle for: " + sum + "<br>" + " Cycle while: " + sum1;

