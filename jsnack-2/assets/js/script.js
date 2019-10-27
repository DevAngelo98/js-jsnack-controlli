var primaParola = prompt("Inserisci la prima parola");
var secondaParola = prompt("Inserisci la seconda parola");

var test = /^[a-z]+$/i;

if(test.test(primaParola) && test.test(secondaParola)){
  if (primaParola > secondaParola) {
    document.getElementById("box").innerHTML = 'La parola più corta è: ' +  secondaParola + "<br>" + ' La parola più lunga è: ' +  primaParola;
  } else if(primaParola < secondaParola) {
    document.getElementById("box").innerHTML = 'La parola più corta è: ' +  primaParola + "<br>" +' La parola più lunga è: ' +  secondaParola;
  } else {
    document.getElementById("box").innerHTML = 'Hanno la stessa dimensione: ' + "<br>" +  "La prima parola inserita è: " + primaParola + "<br>" + "La seconda parola inserita è: " + secondaParola;
  }
} else {
  console.log("NIO");
}

