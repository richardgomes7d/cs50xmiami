/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune(job, geo, partner, number){
  var html ="";

  html += 'You will be a ' + job;
  html += " in " + geo;
  html += ', and married to ' + partner;
  html += ' with ' + number + ' kids.';

  // document.write('<h1>' + html + '</h1>');
  console.log(html);
}

var number = 16;
var partner = "Marial Guadalupe";
var geo = "Seattle";
var job = "Loco";

tellFortune(job, geo, partner, number);

number = 25;
partner = "Mrs Soulmate";
geo = "here";
job = "A/C Technician";

tellFortune(job, geo, partner, number);

number = 7;
partner = "nobody";
geo = "Las Vegas";
job = "Artist";

tellFortune(job, geo, partner, number);

number = 'no';
partner = "her";
geo = "your head";
job = "rich person";

tellFortune(job, geo, partner, number);
