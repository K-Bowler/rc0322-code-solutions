var books = [
  {
    title: 'Supermega saves the troops',
    author: 'Matt Watson & Ryan Magee',
    isbn: '978-3-16-148415-0'
  },
  {
    title: 'This Book Loves You',
    author: 'Pewdiepie',
    isbn: '978-3-16-148410-6'
  },
  {
    title: 'Ghost Hunters Adventure Club and the Secret of the Grande Chateau',
    author: 'Cecil H.H. Mills',
    isbn: '978-3-25-148410-0'
  }
];
console.log('typeof books', typeof books);
var stringyBooks = JSON.stringify(books);
console.log('stringyBooks:', stringyBooks);
console.log('type of stringyBoooks:', typeof stringyBooks);

var student = '{"number id": "001","string name":"Kevin Bowler"}';
console.log('typeof student:', typeof student);
var studentObject = JSON.parse(student);
console.log('studentObject:', studentObject);
console.log('typeof studentObject', typeof studentObject);
