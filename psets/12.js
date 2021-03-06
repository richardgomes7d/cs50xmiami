/*
The Lifetime Supply Calculator part 2

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

// write your solution here...
function calculateSupply(age, samba){
  document.write('<h1>You will need ' + ((115 - age)*Math.round(samba)*365) + ' to last you until the ripe old age of ' + 115 + '.</h1>');
}

calculateSupply(23, 2);
calculateSupply(25, 3);
calculateSupply(34, 7);
