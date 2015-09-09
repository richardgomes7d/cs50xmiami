/*
The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has
  properties for the title (a string), author (a string),
  and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title
  and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you
  read it yet or not. If you read it, log a string like
  'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string
  like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

// write your solution here...
var books = [
    {titleB : "The Catcher in the Rye", author : "J. D. Salinger", alreadyRead : true},
    {titleB : "Cien Años de Soledad", author : "Gabriel Garcia Marquez", alreadyRead : true},
    {titleB : "A Clash of Kings", author : "George R. R. Martin", alreadyRead : false}
];

for( var i = 0; i < books.length; i++){
  if(books[i].alreadyRead)
    document.write('<p> You already read "' + books[i].titleB + '" by ' + books[i].author + '.</p>');
  else
    document.write('<p> You need to read "' + books[i].titleB + '" by ' + books[i].author + '.</p>');
}
