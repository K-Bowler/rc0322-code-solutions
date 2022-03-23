var firstNumber = 2;
var secondNumber = 5;
var thirdNumber = 8;
var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('Maximum Value:', maximumValue);

var heroes = ['Dr.Strange', 'Iron-Man', 'Batman', 'Spider-man'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'Supermega Saves the Troops',
    author: 'Ryan Magee, Matt Watson'
  },
  {
    title: 'Ghost Hunters Adventure Club and the Secret of the Grande Chateau',
    author: 'Cecil H.H. Mills'
  },
  {
    title: 'This Book Loves You',
    author: 'PewDiePie'
  }
];
console.log(library);
var lastBook = library.pop();
console.log('Last book:', lastBook);
var firstBook = library.shift();
console.log('First book:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Libary:', library);

var fullName = 'Kevin Bowler';
var firstAndLastName = fullName.split(' ');
console.log('First and last name:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name:', sayMyName);
