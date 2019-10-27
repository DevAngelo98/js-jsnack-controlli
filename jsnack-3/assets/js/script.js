function checkNumber (value) {
  if(isNaN(value) || value === "" || value === null){
    return false;
  } else {
    return true;
  }
}

var sum = 0;
for(var i=0; i<5; i++){
  var numeroInserito = prompt("Inserisci il " + (i+1) + " valore: (For)");
  console.log(numeroInserito);
  if(checkNumber(numeroInserito)){
    var number = parseFloat(numeroInserito);
    sum += number;
  }
  else{
    i--;
  }
}

var sum1 = 0;
var j = 0;
while(j<5){
  var numeroInserito2 = prompt("Inserisci il " + (j+1) + " valore: (While)");
  if(checkNumber(numeroInserito2)){
    var number1 = parseFloat(numeroInserito2);
    sum1 += number1;
  }
  else{
    j--;
  }
  j++;
}

document.getElementById("box").innerHTML = "Ciclo for: " + sum + "<br>" + " Ciclo while: " + sum1;

