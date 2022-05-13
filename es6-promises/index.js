const takeAChance = require('./take-a-chance');

const chanceName = takeAChance('Kevin');

chanceName.then(value => {
  console.log(value);
});

chanceName.catch(value => {
  console.log(value.message);
});
