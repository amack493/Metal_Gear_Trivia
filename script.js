console.log('HELLO TRE');

const start = document.getElementById('start');

const quiz = document.getElementById('quiz');

const questionNum = document.getElementById('questionNum');

const question = document.getElementById('question');

const choices = document.getElementById('choices');

const choiceA = document.getElementById('A');

const choiceB = document.getElementById('B');

const choiceC = document.getElementById('C');

const progress = document.getElementById('lifebar');

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

let runningQuestion = 0;
function checkAnswer(answer){
    if(questions[runningQuestion[i].correct == answer]){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(runningQuestion[i] < lastQuestion[i]){
        count = 0;
        runningQuestion[i]++;
        renderQuestion();
    }else{
        scoreRender;
    }
}


function renderQuestion (){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question + "<p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;
}


start.addEventListener("click", startQuiz);
    function startQuiz(){
        start.style.display = 'none';
        renderQuestion();
        quiz.style.display = 'block';
    }

function scoreRender(){
    scoreContainer.style.display = 'block';
    letScorePercent = Math.round(100 * score / questions.length);
}



score=0;
function checkAnswer(answer) {
    if(answer == questions[runningQuestion].correct) {
        score++;
    }
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }else{
        
    }
}








