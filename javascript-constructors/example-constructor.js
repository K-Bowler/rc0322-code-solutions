function ExampleConstructor() {
}

console.log('example constructor:', ExampleConstructor.prototype);
console.log('example constructor:', typeof ExampleConstructor.prototype);

var example = new ExampleConstructor();
console.log('new constructor', example);
var instance = example instanceof ExampleConstructor;
console.log('instanceof:', instance);
