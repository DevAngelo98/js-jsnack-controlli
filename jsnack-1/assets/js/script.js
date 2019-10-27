function checkNumber (value) {

  if(isNaN(value) || value === "" ){
    return false;
  } else {
    return true;
  }
}


document.getElementById("check").onclick = function() {
  
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  
  if(checkNumber(number1) && checkNumber(number2)){
    var first = parseFloat(number1);
    var second = parseFloat(number2);
    if (first > second){
      document.getElementById("result").innerHTML = "The largest number is: " + first;
    } else if(first < second){
      document.getElementById("result").innerHTML = "The largest number is: " + second;
    } else {
      document.getElementById("result").innerHTML = "The numbers entered are the same";
    }
  } else {
    document.getElementById("result").innerHTML = "Enter the numbers correctly";
    document.getElementById("number1").value = null;
    document.getElementById("number2").value = null;
  }

}


// var uno = parseFloat(document.getElementById(""));
// var due = parseFloat(prompt("Inserisci il secondo numero: "));
// var maggiore = "Il maggiore è: ";
// if(uno>due){
//   document.getElementById("maggiore").innerHTML = maggiore + uno;
// } else if (due>uno){
//   document.getElementById("maggiore").innerHTML = maggiore + due;
// } else {
//   document.getElementById("maggiore").innerHTML = "Numeri uguali";
// }