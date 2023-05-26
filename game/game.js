const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice'));
console.log(choices)

let currentQuestion = {};
let acceptingAnswers = false;
let time = 120;
let counter = 0;
let allQuestions = [];

//All questions and answers are set in this array to be called on later
let questions = [
    {
    question: "What Javascript element has a value of either true or false?",
    choice1: "Event",
    choice2: "Int",
    choice3: "Boolean",
    choice4: "Var",
    answer: 3
    },
{
    question: "Arrays are enclosed in....?",
    choice1: "Square brackets",
    choice2: "Curly brackets",
    choice3: "single quotes",
    choice4: "Double Quotes",
    answer: 1
},
{
    question: "Constants....",
    choice1: "...are never useful",
    choice2: "...can only be redeclared once",
    choice3: "...are always in brackets",
    choice4: "...cannot be redeclared",
    answer: 4
},
{
    question: "Int stands for what?",
    choice1: "Intelligence",
    choice2: "Interger",
    choice3: "Interaction",
    choice4: "Interface",
    answer: 2
}
]

const totalQuestions = 4;

//starting data, with time selected but not yet called
start = () => {
counter = 0
time = 120
allQuestions = [...questions];
getNewQuestion();
};

//Grabs the questions randomly. Bug noticed involving the 
getNewQuestion = () => {

    if (allQuestions.length === 0){
        return window.location.assign('highScore/highScore.html')
    }

    counter++;
    const questionIndex = Math.floor(Math.random() * allQuestions.length);
    currentQuestion = allQuestions[questionIndex];
    question.innerText = currentQuestion;
   
choices.forEach( choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
})

    allQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};
//The following code checks for user input and checks to see if answer was correct or false.
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        var classToApply = 'wrong';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'right';
        }
        console.log(classToApply);

        selectedChoice.parentElement.classList.add(classToApply);

        getNewQuestion();
    });
});

start();