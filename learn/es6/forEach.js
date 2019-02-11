/**
 * Array Helper Method: forEach
 */

// Old for loop
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ES6 use forEach: pass in anonymous function
colors.forEach(function (color) {
    console.log(color);
});

// Example 2: No use of anynomous function
var numbers = [1, 2, 3, 4, 5]
var sum = 0

function adder(number) { // Define a function instead of using anonymous function
    sum += number;
}

numbers.forEach(adder); // No parens after adder because we don't want it to immediately call the adder function
console.log(sum);

// Example 3: Calculate areas of images and add to arrays of areas
var images = [
    {height: 10, width: 30},
    {height: 20, width: 90},
    {height: 54, width: 32}
];
var areas = [];

function calArea(image) {
    return image.height * image.width;
}

function addToAreas(area) {
    areas.push(area);
}

images.forEach(function (image) {
    addToAreas(calArea(image));
});

console.log(areas);
