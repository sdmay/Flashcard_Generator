'use strict';
var inquirer = require('inquirer');
function runCloze(){

var randomQuestion = [
    '_ _ _ _ _ _ _ is the capital of Arizona.',
    '_ _ _ _ _ _ _ _ _ _ _ wrote Misery.',
    '_ _ _ _ _ _ _ _ starred in Fight Club.',
    '_ _ _ _ _ _ _ _ _ holds the 100 meter dash record.',
    '_ _ _ _ _ _ _ _ _ _ is the creator of Seinfeld.',
    '_ _ _ _ _ _ _ is the capital of Georgia.',
    '_ _ _ _ _ _ _ _ _ _ _ _ _ _ is the largest river in the US.'

]

var answer = [
    'Phoenix',
    'Stephen King',
    'Brad Pitt',
    'Usain Bolt',
    'Larry David',
    'Atlanta',
    'The Mississippi'

]

var clozeQuestion = [Math.floor(Math.random()*randomQuestion.length)]
var n = randomQuestion[clozeQuestion];
var work = answer[clozeQuestion];

var questions = [
  {
    type: 'input',
    name: 'first_name',
    message: n,
    validate: function (value) {
      var pass = value.match(work);
      if (pass) {
          console.log(" Correct!")
        return true;
      }

      else{return work;}
    }
  }
];

inquirer.prompt(questions).then(function (answers) {
//   console.log(JSON.stringify(answers, null, '  '));

  runCloze();
});
}
runCloze();