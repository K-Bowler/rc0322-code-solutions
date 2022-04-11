/* exported student */

var student = {
  firstName: 'Kevin',
  lastName: 'Bowler',
  subject: 'CSS',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
