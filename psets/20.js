/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...
var songs = ['Speed of Sound', 'Rocky Racoon', 'Cuando Llega el Momento'];

for(var i = 0; i < 3; i++){
  document.write('<p>My ' + ordinal_suffix_of(i + 1) +' choice is ' + songs[i]);
}

// Taken from http://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
