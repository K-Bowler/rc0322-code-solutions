function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hello, ' + name;
  return greeting;
}
var greetResult = greet('Kevin');
console.log('GreetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaResult = getArea(17, 42);
console.log('Area result:', areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First Name:', getFirstNameResult);

function getLastElement(array) {
  var lastElementNumber = array.length - 1;
  var lastElement = array[lastElementNumber];
  return lastElement;
}
var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last element:', lastElementResult);
