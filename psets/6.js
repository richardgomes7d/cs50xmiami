/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/
function replaceAt(place, char){

}
function mixUp(a, b) {
  // write your solution here...
  var temp = a.substr(0,2);
  a = b.substr(0,2) + a.substr(2, a.length);
  b = temp + b.substr(2, b.length);
  return a + ' ' + b;
}

var word0 = prompt('A word:');
var word1 = prompt('Another word:');

document.write('<h1>' + mixUp(word0, word1) + '</h1>');
