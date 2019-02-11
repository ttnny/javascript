/**
 * Array Helper Method: Find
 */

// Old way
var users = [
    {name: 'Jill', id: 4},
    {name: 'Alex', id: 5},
    {name: 'Bill', id: 6}
];

var user;

for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break;
    }
}

console.log(user);

// ES6 use Finder
users.find(function (user) {
    return user.name === 'Alex'; // only Alex with id 5 is returned, then iteration stops
});

// Example 2
var ladders = [
    {id: 1, height: 20},
    {id: 3, height: 25}
];

function findWhere(array, criteria) {
    return ladders.find(ladder => {
        return ladder.height === criteria.height
    })
}

findWhere(ladders, { height: 25 });