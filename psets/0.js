/*
The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

- Store the following into variables:
  number of children, partner's name, geographic location, job title.

- Output your fortune to the screen like so:
  "You will be a X in Y, and married to Z with N kids."
*/

// write your solution here...
var number = 16;
var partner = "Marial Guadalupe";
var geo = "Seattle";
var job = "Loco";

var html ="";

html += 'You will be a ' + job;
html += " in " + geo;
html += ', and married to ' + partner;
html += ' with ' + number + ' kids.';

document.write('<h1>' + html + '</h1>');
