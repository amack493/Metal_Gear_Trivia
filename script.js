console.log('HELLO TRE');

const easy = document.querySelector('.easy');
easy.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('working ;)')
})

const questions = [ 
    {prompt: 'Who is the main character of Metal Gear Solid\n(a) Solid Snake\n\(b) Psycho Mantis\n\(c) Revolver Ocelot',
answer: "a"}
]

let score = 0;

for(let i = 0; i < questions.length; i++){
    const response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("CORRECT!");
    } else{
        alert("INCORRECT!");
    }
}