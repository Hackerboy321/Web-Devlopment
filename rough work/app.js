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



// quiz screen 

startBtn.addEventListener("click", ShowQuizScreen)

function ShowQuizScreen()
{
  // changing the screen 
  startScreen.classList.remove("active") ;
  quizScreen.classList.add("active") ; 
  showQuestion() ;
}

function showQuestion()
{
  const currentQuestion = quizQuestions[currentQuestionIndex] ;
  questionText.textContent = currentQuestion.question ;
  currentQuestionSpan.textContent = currentQuestionIndex + 1 ;

  currentQuestion.answers.forEach(option => {

  const btn = document.createElement("button") ; 
  btn.classList.add("answer-btn") ;
  btn.textContent = option.text ; 
  btn.dataset.correntAns = option.correct ; 
  answerContainer.appendChild(btn) ; 
  btn.addEventListener("click" , selecteOption)  
  });
}

function selecteOption(event)
{

  const selectedBtn = event.target ; 
  const isCorrect =  selectedBtn.dataset.correctAns === "true" ; 

  if(isCorrect) 
  {
    selectedBtn.classList.add()
  }


}

