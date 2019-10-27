

var test = /^[a-z]+$/i;

document.getElementById("check").onclick = function(){

  var firstWord = document.getElementById("word1").value;
  var secondWord = document.getElementById("word2").value;
  var result = document.getElementById("result");

  if(test.test(firstWord) && test.test(secondWord)){
    if (firstWord.length > secondWord.length) {
       result.innerHTML = 'The shortest word is: ' +  secondWord + "<br>" + ' The longest word is: ' +  firstWord;
    } else if(firstWord.length < secondWord.length) {
      result.innerHTML = 'The shortest word is: ' +  firstWord + "<br>" +' The longest word is: ' +  secondWord;
    } else {
      result.innerHTML = 'They have the same size: ' + "<br>" + "<br>" +  "The first word entered is: " + firstWord + "<br>" + "The second word entered is: " + secondWord;
    }
  } else {
    result.innerHTML = "Incorrect values, try again!";
    document.getElementById("word1").value = null;
    document.getElementById("word2").value = null;
  }  
}


