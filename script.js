const question = [
    {
        question: "Which is largest animal in the world?",
        answer:[
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Girafee", correct: false},
        ]
    },
    {
        question: "Which is the sallest country in the world?",
        answer:[
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answer:[
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: true},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answer:[
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }

    
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = question + ". " +currentQuestion.
    question;


currentQuestion.answers.forEach(answer => {
     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButton.appendChild(button);
});
}

startQuiz();
