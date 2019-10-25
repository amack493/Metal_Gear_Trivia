console.log('HELLO TRE');



const start = document.getElementById('start');

const quiz = document.getElementById('quiz');

const questionNum = document.getElementById('questionNum');

const question = document.getElementById('question');

const choices = document.getElementById('choices');

const choiceA = document.getElementById('A');

const choiceB = document.getElementById('B');

const choiceC = document.getElementById('C');

const lives = document.getElementById('lifebar');

const scoreDiv = document.getElementById('scoreContainer');

const end = document.getElementById('end');

const restart = document.getElementById('restart');

//questions for quiz
let questions = [
    {
        question: "Who's the main character in Metal Gear Solid?",
        
        choiceA: 'Solid Snake',
        choiceB: 'Psycho Mantis',
        choiceC: 'Revolver Ocelot',
        
        correct: 'A'
    },{
        question: 'Who was the developer for the  Metal Gear series?',
            choiceA: 'Genndy Tartakovsky',
            choiceB: 'Hideo Kojima',
            choiceC: 'Stephen Hillenberg',
        
        correct: 'B'
    },{
        question: "What's the best disguise?",
        
        choiceA: 'A cardboard Box',
        choiceB: 'An Enemy Uniform',
        choiceC: 'A fake mustache',
        
        correct: 'A'
    },{
        question: "Who was the main antagonist of Metal Gear Solid?",

        choiceA: 'Colonel Campbell',
        choiceB: 'Vulcan Raven',
        choiceC: 'Liquid Snake',

        correct: 'C'
    },{
        question: 'What tank was being developed by Dr. Sokolov?',

        choiceA: 'Peacewalker',
        choiceB: 'The Shagohad',
        choiceC: 'Metal Gear Rex',

        correct: 'B'
    },{
        question: 'In which game did Hideo Kojima make a cameo appearance?',

        choiceA: 'MG Portable Ops',
        choiceB: 'Metal Gear Rising: Revengeance',
        choiceC: 'MG Ground Zeroes',

        correct: 'C'
    },{
        question: 'Which character made the most recurring appearance?',

        choiceA: 'Revolver Ocelot',
        choiceB: 'Big Boss',
        choiceC: 'Raiden',

        correct: 'A'
    },{
        question: 'What console was the first Metal Gear released for?',

        choiceA: 'MSX2 computer',
        choiceB: 'Playstation',
        choiceC: 'Playstation 2',

        correct: 'A'
    },{
        question: 'What was the name of the mercenary group led by Big Boss in MGS The Phantom Pain?',

        choiceA: 'Foxhound',
        choiceB: 'Diamond Dogs',
        choiceC: 'Militaires Sans Frontières',

        correct: 'B'
     }//,{
    //     question: '',

    //     choiceA: '',
    //     choiceB: '',
    //     choiceC: '',

    //     correct: '',
    // }
]
//starts quiz and plays background music upon start
start.addEventListener("click", startQuiz);
    function startQuiz(){
        let audio = new Audio('gameaudio/Metal_gear_solid_Alert_Theme.mp3');
    audio.play();
        start.style.display = 'none';
        showQuestion();
        quiz.style.display = 'block';
       
       
    }
    
//cycles through questions until end of quiz
const lastQuestion = questions.length - 1;

let currentQuestion = 0;

function checkAnswer(answer){
    if(questions[currentQuestionIndex.correct == answer]){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(currentQuestionIndex < lastQuestionIndex){
        count = 0;
        currentQuestionIndex++;
        showQuestion();
    }else{
        
        showScore();

    }
}
     
    

//shows questions
function showQuestion (){
    let q = questions[currentQuestion];

    question.innerHTML = "<p>"+ q.question + "<p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
}
//starts quiz


    
//shows percentage at end of quiz
function showScore(){
    scoreDiv.style.display = 'block';
    let ScorePercent = Math.round(100 * score / questions.length);
    scoreDiv.innerHTML = "<p>" + ScorePercent +"%</p>";
}
score=0;
//shows questions until end of quiz then shows percent
function checkAnswer(answer) {
    if(answer == questions[currentQuestion].correct) {
        score++;
    }
    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        showQuestion();
    }else{
    
    showScore(); 
    }
}
    // function restartQuiz(){
    //     if(currentQuestionIndex == lastQuestionIndex){
    //         restart.addEventListener("click", restartQuiz);
    //         function restartQuiz(){
    //             restart.style.display = 'none';
    //             end.style.display = 'block';
    //        }
         
    //         restartQuiz();
    //     }
    // }
    






