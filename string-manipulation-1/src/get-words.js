/* exported getWords */
function getWords(string) {
  if (string.length > 0) {
    return string.split(' ');
  }
  return [];
}

// Define a new function getWords with one parameter (string)
// within the code block define a new if statement with the condition
// if the string length is greater than 0
// within the if statement if the statement is true then return the
// split method of the string object at ' '
// if the statement is false then return an empty array
