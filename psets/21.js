/*
The Recipe Card

Never forget another recipe!

- Create an object to hold information on your favorite recipe. It should have
  properties for title (a string), servings (a number),
  and ingredients (an array of strings).

- On separate lines (one console.log statement for each), log the recipe
  information so it looks like:
    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa
*/

// write your solution here...
var recipe = {
  Title : "Spaghetti Aglio e Olio",
  Serves : 4,
  Ingredients : [
    "Spaghetti",
    "Garlic",
    "Tomato",
    "Olive Oil"
  ]

}

console.log(recipe.Title);
console.log('Serves: ' + recipe.Serves);

for(ingredient in recipe.Ingredients)
  console.log(recipe.Ingredients[ingredient]);
