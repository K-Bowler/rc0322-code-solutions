const express = require('express');
const app = express();
let nextIndex = 1;
const grades = {};

const jsonMiddleware = express.json();

app.get('/api/grades', (req, res) => {
  const gradesArray = [];

  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.use(jsonMiddleware);

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextIndex;
  grades[nextIndex] = grade;
  nextIndex++;
  res.status(201).json(grade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
