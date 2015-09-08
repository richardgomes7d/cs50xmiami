/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...
  var notLoc = -1;
  var badLoc = -1;
  // var order = false;
  for(var i = 0; i < sentence.length; i++){
    // console.log(sentence.substr(i, 3));
    if(sentence.substr(i, 3).toLowerCase() == "not"){
      notLoc = i;
    }
    if(sentence.substr(i, 3).toLowerCase() == "bad"){
      badLoc = i + 3;
    }
  }
  if(notLoc < badLoc && notLoc != -1){
    return sentence.substr(0,notLoc) + ' good ' + sentence.substr(badLoc, sentence.length);
  }

  return sentence;
}

var text = prompt('Text:');

document.write('<h1>' + notBad(text) + '</h1>');
