/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...
function helloWorld(lang){
  switch(lang){
    case 'es':
      document.write('<h1>Hola, Mundo</h1>');
      break;
    case 'en':
      document.write('<h1>Hello, World</h1>');
      break;
    case 'de':
      document.write('<h1>Hallo, Welt</h1>');
      break;
  }
}

helloWorld(prompt('Give me a language code:'));
