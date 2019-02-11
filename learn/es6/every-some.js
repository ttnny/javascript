/**
 * Array Helper Method: Every & Some
 */

var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

// What we want to know
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

computers.every(function(computer) {
   return computer.ram > 16; // return false
});

computers.some(function(computer) {
   return computer.ram < 16; // return false
});

// Every & Some syntax
var names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

names.every(function(name) {
    return name.length > 4;
});

names.some(function(name) {
    return name.length > 4;
});

// More example
function Field(value) { // a class
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

var fields = [username, password, birthdate];

fields.every(function(field) {
    return field.validate();
});