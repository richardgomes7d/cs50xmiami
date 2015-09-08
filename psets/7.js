/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/


function fixStart(s) {
  // write your solution here...
  var firstChar = s[0].toLowerCase();
  var temp = s[0];

  for(var i = 1, n = s.length; i < n; i++)
    if(s[i].toLowerCase() === firstChar)
      temp += '*';
    else
      temp += s[i];

    return temp;
}

var word = prompt('Word:');

document.write('<h1>' + fixStart(word) + '</h1>');
