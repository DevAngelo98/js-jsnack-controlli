
document.getElementById("check").onclick = function(){
  var nomi = ["Angelo", "Giuseppe", "Filippo", "Chiara"];
  var found = false;
  var test = /^[a-z]+$/i;
  var name = document.getElementById("name").value;
  var result = document.getElementById("result");

  if(test.test(name)){
    for(var i=0; i<nomi.length && found==false; i++){
      if(name === nomi[i]){
        result.innerHTML = "You have been invited";
        found = true;
      } else {
        document.getElementById("name").value = null;
        result.innerHTML = "You have not been invited";
      }
    }
  } else {
    result.innerHTML = "Incorrect values, try again!";
    document.getElementById("name").value = null;
  }  
}
