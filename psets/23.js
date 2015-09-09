/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
var movie = {
  title : "Gattaca",
  duration : 106,
  stars : [
    "Ethan Hawke",
    "Uma Thurman"
  ]
}

function printMovie(movie){
  document.write('<h1>' + movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ');
  for(var i = 0; i < movie.stars.length; i++){

    if( i === (movie.stars.length - 1))
      document.write(movie.stars[i] + '.');
    else {
      document.write(movie.stars[i] + ', ');
    }
  }
}

printMovie(movie);
