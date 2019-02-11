/**
 * Array Helper Method: Filter
 */

// Old way
var products = [
    { name: 'cucumber', type: 'vegetable', quantity: '0', price: '1' },
    { name: 'banana', type: 'fruit', quantity: '10', price: '15' },
    { name: 'celery', type: 'vegetable', quantity: '30', price: '9' },
    { name: 'orange', type: 'fruit', quantity: '3', price: '5' }
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

console.log(filteredProducts);

// ES6 use Filter
products.filter(function(product) {
    return product.type === 'fruit';
});

// Example 2
products.filter(function(product) {
    return product.type === 'vegetable'
        && product.quantity > 0
        && product.price < 10;
})

// Example 3
var post = { id: 4, title: 'New Post' };
var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
};

console.log(commentsForPost(post, comments));

// Example 4
var numbers = [10, 20, 30];

function lessThanFifteen(number){
    return number > 15;
}

function reject(array, iteratorFunction){
    return array.filter((value) =>{
        return !iteratorFunction(value);
    });
}

let doesThisWork = reject(numbers, lessThanFifteen);

console.log(doesThisWork);