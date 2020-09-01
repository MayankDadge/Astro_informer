const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
}

function showResults(){

}

buildQuiz();
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: "Which is the hottest planet in the solar system?",
      answers: {
        a: "Mercury",
        b: "Venus",
        c: "Jupiter"
      },
      correctAnswer: "b"
    },
    {
      question: "Which is the larest planet in our solar system",
      answers: {
        a: "Saturn",
        b: "Earth",
        c: "Jupiter"
      },
      correctAnswer: "c"
    },
    {
      question: "Which planet is the farthest from the Sun?",
      answers: {
        a: "Neptune",
        b: "Uranus",
        c: "Pluto",
        d: "Plaet X"
      },
      correctAnswer: "a"
    }
  ];

