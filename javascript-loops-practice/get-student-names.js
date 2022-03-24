/* exported getStudentNames */
function getStudentNames(students) {
  var studentsArray = [];
  for (var x in students) {
    studentsArray.push(students[x].name);
  }
  return studentsArray;
}
