console.log('HELLO TRE');

const start = document.getElementById('start');

const quiz = document.getElementById('quiz');

const questionNum = document.getElementById('questionNum');

const question = document.getElementById('question');

const choices = document.getElementById('choices');

const choiceA = document.getElementById('A');

const choiceB = document.getElementById('B');

const choiceC = document.getElementById('C');

const lives = document.getElementById('lifebar')

const scoreDiv = document.getElementById('scoreContainer');

let questions = [
    {
        question: "Who's the main character in Metal Gear Solid?",
        
        choiceA: 'Solid Snake',
        choiceB: 'Psycho Mantis',
        choiceC: 'Revolver Ocelot',
        
        correct: 'A'
    },{
        question: 'Who created Metal Gear?',
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
    },
]
    
    

     

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


function showQuestion (){
    let q = questions[currentQuestion];

    question.innerHTML = "<p>"+ q.question + "<p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
}


start.addEventListener("click", startQuiz);
    function startQuiz(){
        start.style.display = 'none';
        showQuestion();
        quiz.style.display = 'block';
    }

function showScore(){
    scoreDiv.style.display = 'block';
    let ScorePercent = Math.round(100 * score / questions.length);
    scoreDiv.innerHTML = "<p>" + ScorePercent +"%</p>";
}
score=0;
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








