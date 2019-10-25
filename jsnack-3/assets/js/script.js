var somma = 0;
for(var i=0; i<5; i++){
  var numeroInserito = parseInt(prompt("Inserisci il " + (i+1) + " valore: (For)"));
  somma = somma + numeroInserito;
}

var somma1 = 0;
var i = 0;
while(i<5){
  var numeroInserito2 = parseInt(prompt("Inserisci il " + (i+1) + " valore: (While)"));
  somma1 = somma1 + numeroInserito2;
  i++;
}

document.getElementById("box").innerHTML = "Ciclo for: " + somma + "<br>" + " Ciclo while: " + somma1;

