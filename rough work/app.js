const questionText = document.getElementById("question-text")
const currentQuestionSpan = document.getElementById("current-question") 
const answerContainer = document.getElementById("ans-container") ;
const startBtn = document.getElementById("start-btn") ;
const startScreen = document.getElementById("start-screen") ; 
const quizScreen = document.getElementById("quiz-screen")
const quizQuestions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Paris", correct: true },
        { text: "Madrid", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      question: "Which of these is NOT a programming language?",
      answers: [
        { text: "Java", correct: false },
        { text: "Python", correct: false },
        { text: "Banana", correct: true },
        { text: "JavaScript", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Go", correct: false },
        { text: "Gd", correct: false },
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
      ],
    },
  ];



let currentQuestionIndex = 0 ; 
let score = 0 ; 


const currentQuestion = quizQuestions[currentQuestionIndex] 

// quiz screen 

startBtn.addEventListener("click", ShowQuizScreen)

function ShowQuizScreen()
{
  // changing the screen 
  startScreen.classList.remove("active") ;
  quizScreen.classList.add("active") ; 
}



questionText.textContent = currentQuestion.question ;
currentQuestionIndex++ ; 
currentQuestionSpan.textContent = currentQuestionIndex ;

// for options 

currentQuestion.answers.forEach(option => {

  const button = document.createElement("button") ;
  button.classList.add("answer-btn") ;
  button.textContent = option.text ;
  button.dataset.correct = option.correct ; 
  answerContainer.appendChild(button) ;
  button.addEventListener("click" , selectAnswer)
 
  
});

function selectAnswer(event)
{
  const selectedButton = event.target
  const iscorrect = selectedButton.dataset.correct === "true" ; 

  Array.from(answerContainer.children).forEach((button) => {

    if(button.dataset.correct === "true") 
    {
      button.classList.add("correct") ; 
    }
    else button.classList.add("incorrect") ; 
  })

  
}



questionText.textContent = currentQuestion.question ;
currentQuestionIndex++ ; 
currentQuestionSpan.textContent = currentQuestionIndex ;

// for options 

currentQuestion.answers.forEach(option => {

  const button = document.createElement("button") ;
  button.classList.add("answer-btn") ;
  button.textContent = option.text ;
  button.dataset.correct = option.correct ; 
  answerContainer.appendChild(button) ;
  button.addEventListener("click" , selectAnswer)
 
  
});

function selectAnswer(event)
{
  const selectedButton = event.target
  const iscorrect = selectedButton.dataset.correct === "true" ; 

  Array.from(answerContainer.children).forEach((button) => {

    if(button.dataset.correct === "true") 
    {
      button.classList.add("correct") ; 
    }
    else button.classList.add("incorrect") ; 
  })

  
}