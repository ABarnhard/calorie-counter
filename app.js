var prompt = require('sync-prompt').prompt

var weight = parseFloat(prompt('How much do you weigh (lbs)? '));
var gender = prompt('What is your gender (m/f)? ');

var foods = [], cals = [];
var totalCals = 0, weightGained;

var option = prompt('(e)at or (q)uit: ');
while(option !== 'q'){
  foods.push(prompt('What did you eat? '));
  cals.push(parseFloat(prompt('How many calories? ')));
  option = prompt('(e)at or (q)uit: ');
}

for(var i = 0; i < cals.length; i++){
  totalCals += cals[i];
}

switch(gender){
  case 'm':
    weightGained = totalCals / 4000;
    break;
  case 'f':
    weightGained = totalCals / 3000;
    break;
}

weight += weightGained;

console.log('You gained ' + weightGained.toFixed(2) + 'lbs today and weigh ' + weight.toFixed(2) + 'lbs');
console.log('You ate: ' + foods.join(', '));
console.log('Your total cals:', totalCals.toFixed(2));


