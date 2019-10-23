console.log('HELLO TRE');

const start = document.getElementById('start');

const quiz = document.getElementById('quiz');

const question = document.getElementById('question');

const choices = document.getElementById('choices');

const choiceA = document.getElementById('A');

const choiceB = document.getElementById('B');

const choiceC = document.getElementById('C');

const scoreDiv = document.getElementById('scoreContainer');

let questions = [
    {
        question: "Who's the main character in Metal Gear Solid?",
        answers: {
            a: 'Solid Snake',
            b: 'Psycho Mantis',
            c: 'Revolver Ocelot'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Who created Metal Gear?',
        answers: {
            a: 'Genndy Tartakovsky',
            b: 'Hideo Kojima',
            c: 'Stephen Hillenberg'
        },
        correctAnswer: 'b'
    },
    {
        question: "What's the best disguise?",
        answers: {
            a: 'A cardboard Box',
            b: 'An Enemy Uniform',
            c: 'A fake mustache'
        },
        correctAnswer: 'a'
    }
    ];
    
    

     

const lastQuestion = questions.length - 1;

let runningQuestion = 0;
function checkAnswer(answer){
    if(questions[runningQuestionIndex.correct == answer]){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
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

function checkAnswer(answer) {
    if(answer == questions[runningQuestion].correct) {

    }
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }else{
        
    }
}








