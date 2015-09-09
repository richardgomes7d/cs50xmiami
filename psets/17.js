/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize( noun, number){
  if(number === 1){
    document.write('<h1>' + number + ' ' + noun + '.</h1>');
  }
  else if (number > 1) {
    if( noun.toLowerCase() === 'goose'){
      document.write('<h1>' + '<h1>' + number + ' geese.</h1>');
    }
    else if (noun.toLowerCase() === 'sheep'){
      document.write('<h1>' + number + ' ' + noun + '.</h1>');
    }
    else{
      document.write('<h1>' + number + ' ' + noun + 's.</h1>');
    }
  }
}

pluralize(
  prompt('Give me a noun:'),
  parseInt(prompt('How many of those?'))
);
