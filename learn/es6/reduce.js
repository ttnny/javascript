/**
 * Array Helper Method: Reduce
 */

// Example 1 wit Arrow Function Expression
var numbers = [10, 20, 30];
var sum = numbers.reduce((sum, number) => sum + number);

console.log(sum);

// Example 2
var primaryColors = [
    {color: 'red'},
    {color: 'yello'},
    {color: 'blue'}
];

primaryColors.reduce(function (previous, primaryColor) {
    previous.push[primaryColor.color];

    return previous;
}, []);

// Example 3: check if having balance "(" and ")"
function balancedParens(string) {
    return string.split("").reduce(function (previous, char) {
        if (previous < 0) return previous;
        if (char === "(") return ++previous;
        if (char === ")") return --previous;
        return previous;
    }, 0);
}

console.log(balancedParens("(()")); // expected 1: unbalanced
console.log(balancedParens(")(")); // expected -1: unbalanced