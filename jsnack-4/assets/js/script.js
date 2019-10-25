var nomi = ["Angelo", "Giuseppe", "Filippo", "Chiara"];
var nomeInserito = prompt("Inserisci il tuo nome per sapere se sei stato invitato: ");
var trovato = false;

for(var i=0; i<nomi.length && trovato==false; i++){
  if(nomeInserito === nomi[i]){
    document.getElementById("box").innerHTML = "Sei stato/a invitato/a";
    trovato = true;
  } else {
    document.getElementById("box").innerHTML = "Mi dispiace non sei stato/a invitato/a";
  }
}

// if(trovato == true){
//   document.getElementById("box").innerHTML = "Sei stato/a invitato/a";
// } else {
//   document.getElementById("box").innerHTML = "Mi dispiace non sei stato/a invitato/a";
// }
