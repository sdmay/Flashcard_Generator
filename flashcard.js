var inquirer = require('inquirer');

var questions = ['Who killed JFK?', 'Who shot 2pac', 'What is the difference between a baby and a bag of cocaine?',
'Where is Jimmy Hoffa?', 'Where is DB Cooper?', 'Can jet fuel melt steel beams?', 'Who won Super Bowl 50?',
'What country is Rome in?', 'Where is your mother?'];
var answers = ['The Government', 'Suge Knight', 'Eric Clapton would not let a bag of cocaine fall out of a window!',
'Old Giants Stadium', 'Dead', 'Of course it can, we saw it on 9/11', "Broncos", 'Italy','At my house'];

var nextStep  = function() {
            
            var item = [Math.floor(Math.random()*questions.length)];
            var n = questions[item];
            var work = answers[item];
            console.log(n)
                    
            inquirer.prompt([
                {
                    name: "flip",
                    message: "Flip card?",
                    type: "confirm"
                }
                            
            ]).then(function(answers){
                console.log(work)
                                   
            inquirer.prompt([
                {
                    name: "next",
                    message: "Next card?",
                    type: "confirm"
                }
                                            
            ]).then(function(){
                    nextStep()
                     
            })     
            });
}
    
nextStep();