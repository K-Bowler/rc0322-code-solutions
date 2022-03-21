var student = {
  firstname: 'Kevin',
  lastName: 'Bowler',
  age: 21
};

var fullName = student.firstname + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

console.log('value of student', student);

var vehicle = {
  make: 'Nessan',
  model: 'Skyline',
  year: 1992
};

vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;

console.log('value of color', vehicle['color']);
console.log('value of isConvertible', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Sebastian',
  type: 'Lobster'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
