/**
 * Array Helper Method: Map
 */

// Old for loop
var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

// ES6 use Map
var doubled = numbers.map(function (number) {
    return numbers * 2;
});

// Example 2
var cars = [
    {model: 'Buick', price: 'cheap'},
    {model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);

// Example 3
var trips = [
    {distance: 34, time: 10},
    {distance: 90, time: 50},
    {distance: 59, time: 25}
];

function speedCal(distance, time) {
    return distance / time;
}

var speeds = trips.map(function (trip) {
    return speedCal(trip.distance, trip.time);
});

// Example 4
// var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
// pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
function pluck(array, property) {
    var newArray = array.map(function(option) {
        return option[property];
    });

    return newArray;
}