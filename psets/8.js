/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

function verbing(word) {
  // write your solution here...
  var size = word.length;
  if(size > 3){
    // console.log(word.substr(size - 3, size));
    if(word.substr(size - 3, size).toLowerCase() === "ing" ){
      return word.toLowerCase() + 'ly';
    }
    else {
      return word.toLowerCase() + 'ing';
    }
  }
  return word;

}

var word = prompt('Word:');
// var size = word.length;
// console.log(word.substr(size - 3, size));
document.write('<h1>' + verbing(word) + '</h1>');
