
const startScreen = document.getElementById("start-screen") ;
const quizScreen = document.getElementById("quiz-screen") ;
const resultScreen = document.getElementById("result-screen"); 

const startBtn = document.getElementById("start-btn") ; 
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text")
const answersContainer = document.getElementById("answers-container");

const scoreSpan = document.getElementById("score") ; 
const progressBar = document.getElementById("progress") ;
const currentQuestionSpan = document.getElementById("current-question") ;
const totalQuestionsSpan = document.getElementById("total-questions") ;

const finalScoreSpan = document.getElementById("final-score") ; 
const resultMessage = document.getElementById("result-message") ;




// Quiz Question 
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

  const Message = 
  [ "Perfect! You're a genius!",
    "Great job! You know your stuff!",
    "Good effort! Keep learning!",
    "Not bad! Try again to improve!",
    "Keep studying! You'll get better!" ]
  

function resetState()
{
  currentQuestionIndex = 0 ; 
  score = 0 ;
  scoreSpan.textContent = score ;
  totalQuestionsSpan.textContent = quizQuestions.length ;
}




// for showing the Quiz Screen 
startBtn.addEventListener("click" ,startQuiz) ; 

function startQuiz()
{
    resetState() ;
    startScreen.classList.remove("active") ; 
    quizScreen.classList.add("active");
    showQuestion()
}

//  for showing the question 
function showQuestion()
{

  // progress bar 

  const progressPersentage = (currentQuestionIndex / quizQuestions.length) * 100 ; 
  progressBar.style.width = progressPersentage + "%" ;
  
  const currentQuestion = quizQuestions[currentQuestionIndex++] ; 
  currentQuestionSpan.textContent = currentQuestionIndex ; 
  questionText.textContent = currentQuestion.question;

  

  // for clearing the previouse answer
  answersContainer.innerHTML = "";

  // for showing the options 
  currentQuestion.answers.forEach((Option) => {
  const optionBtn = document.createElement("button") ; 
  optionBtn.classList.add("answer-btn") ; 
  optionBtn.textContent = Option.text ; 
  optionBtn.dataset.isCorrect = Option.correct ;
  answersContainer.appendChild(optionBtn) ;


  //when user will click on any option 
  optionBtn.addEventListener("click", selectAnswer)
  
  });
}


function selectAnswer(event) 
{
   const selectedBtn = event.target ;
   const isCorrectOption = selectedBtn.dataset.isCorrect === "true" ; 
   if(isCorrectOption)
   {
      
      selectedBtn.classList.add("correct") ; 
      score++ ; 
      scoreSpan.textContent = score ;
   }
   else selectedBtn.classList.add("incorrect") ;

   setTimeout(() => {
    
    if( currentQuestionIndex < quizQuestions.length) 
    {
        showQuestion() ;
    }
    else showResults() ; 
   }, 1000);
   
}

function showResults()
{
   quizScreen.classList.remove("active") ; 
   resultScreen.classList.add("active") ;

   finalScoreSpan.textContent = score ;

   const percentage = (score / quizQuestions.length) * 100 ; 

        if ( percentage === 100) resultMessage.textContent = Message[0] ; 
   else if ( percentage >= 80) resultMessage.textContent = Message[1] ;
   else if ( percentage >= 60) resultMessage.textContent = Message[2] ;
   else if ( percentage >= 40) resultMessage.textContent = Message[3] ;
   else resultMessage.textContent = Message[4] ;

}

restartBtn.addEventListener("click" ,restartQuiz) ; 

function restartQuiz()
{
  resultScreen.classList.remove("active") ; 
  showQuizScreen() ;
}


