var uno = parseInt(prompt("Inserisci il primo numero: "));
var due = parseInt(prompt("Inserisci il secondo numero: "));
var maggiore = "Il maggiore è: ";
if(uno>due){
  document.getElementById("maggiore").innerHTML = maggiore + uno;
} else if (due>uno){
  document.getElementById("maggiore").innerHTML = maggiore + due;
} else {
  document.getElementById("maggiore").innerHTML = "Numeri uguali";
}