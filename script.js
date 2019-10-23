console.log('HELLO TRE');

// const easy = document.querySelector('.easy');
// easy.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('working ;)')
// })
const quizboard = document.getElementByClassName('quizboard');
const question = document.getElementByClassName('question');
const answers = document.getElementsByClassName('answers');
const submit = document.getElementByClassName('submit');


document.getElementByClassName('question').innerHTML=questions;



function buildQuiz(){}

function showResults(){}

//builds quiz
buildQuiz();
//stores html output
const output = [];

// questions.forEach(
//     currentQuestion, questionNumber); {
//         //stores answers
//         const answers = []

//         //for each available answer
//         for(letter in currentQuestion.answers){
//             answers.push
            
//         }
//     }

const questions = [
{
    question: "Who's the main character in Metal Gear Solid?",
    answers: {
        a: 'Solid Snake',
        b: 'Psycho Mantis',
        c: 'Revolver Ocelot'
    },
    correctAnswer: 'a'
},
{
    question: 'Who created Metal Gear?',
    answers: {
        a: 'Genndy Tartakovsky',
        b: 'Hideo Kojima',
        c: 'Stephen Hillenberg'
    },
    correctAnswer: 'b'
},
{
    question: "What's the best disguise?",
    answers: {
        a: 'A cardboard Box',
        b: 'An Enemy Uniform',
        c: 'A fake mustache'
    },
    correctAnswer: 'a'
}
];

// const questions = [ 
//     {prompt: 'Who is the main character of Metal Gear Solid\n(a) Solid Snake\n\(b) Psycho Mantis\n\(c) Revolver Ocelot',
// answer: "a"},
// {prompt: 'Who created Metal Gear?\n(a)Gendy Tartokovsky\n\(b)Hideo Kojima\n\(c)Steven Hillenberg',
// answer: "b"}
// ]

//  score = 0;

// for(let i = 0; i < questions.length; i++){
//     const response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//         score++;
//         alert("CORRECT!");
//     } else{
//         alert("INCORRECT!");
//     }
// }