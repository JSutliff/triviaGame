var questions = [
  {question: 'Question 1: Jerry Garcia is the greatest guitar player of all time?',
  answers: [true, false],
  correct: true},
  {question: 'Question 2: The Grateful Dead has played less than 1,500 live shows.',
  answers: [true, false],
  correct: false},
  {question: 'Question 3: Bill Walton is a founding member of the Grateful Dead',
  answers: [true, false],
  correct: false},
  {question: 'Question 4: The Grateful Dead was formed in the days of the Acid Test.',
  answers: [true, false],
  correct: true},
  {question: 'Question 5: The Grateful Dead rarely played a live show.',
  answers: [true, false],
  correct: false},
  {question: 'Question 6: No one in the Grateful Dead has ever tried psychedelics.',
  answers: [true, false],
  correct: false},
  {question: 'Question 7: The Grateful Dead has a cult-like following.',
  answers: [true, false],
  correct: true},
  {question: 'Question 8: If you are not a head you are behind',
  answers: [true, false],
  correct: true},
  {question: 'Question 9: Sometimes you get shown the light in the strangest of places if you look at it right.',
  answers: [true, false],
  correct: true},
  {question: 'Question 10: The Brent years are the greatest years',
  answers: [true, false],
  correct: true}
];

var answers = [];

var questionsAnswered = 0;
var correctAnswers = 0;
var questionsRemaining = 10;

var timeRemaining = 60;



function countDown() {
  $('#timer').html(`<p>Time Remaining: ${timeRemaining}</p>`).css('font-size', 32);
  function timer() {
    if (timeRemaining > 0) {
      timeRemaining--;
      $('#timer').html(`<p>Time Remaining: ${timeRemaining}</p>`);
    } else if (timeRemaining === 0) {
      clearInterval(intervalId);
      gradeQuiz();
    }
  }
  var intervalId = setInterval(timer, 1000);
}

function renderPageLoad() {
  $('#startButton').show();
  $('#timer').hide();
  $('#test').hide();
  $('#questionForm').hide();
};

function newQuiz() {
  $('#startButton').hide();
  $('#timer').show();
  $('#test').show();
  $('#questionForm').show();
};

function displayQuestions() {
  questions.forEach(function(elem, i) {
    var questionDiv = $('<h2>');
    questionDiv.html(elem.question);
    $('#questionForm').append(questionDiv);
    $('#questionForm').append(`<button class="uk-button uk-button-secondary trueButton" value="true" id="true${i}">True</button>`)
    $('#questionForm').append(` <button class="uk-button uk-button-danger falseButton" value="false" id="false${i}">False</button>`)
    $(`#true${i}`).on('click', function(e) {
      e.preventDefault();
      $(`#false${i}`).hide();
      answers.push(true);
    });
    $(`#false${i}`).on('click', function(e) {
      e.preventDefault();
      $(`#true${i}`).hide();
      answers.push(false);
    });
  })
  $('#questionForm').append(`<button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom submit">Submit</button>`)
  $(`.submit`).on('click', function(e) {
    e.preventDefault();
    gradeQuiz();
  });
}

$(document).on('ready', function() {
  renderPageLoad();
  answers = [];
  questionsAnswered = 0;
  correctAnswers = 0;
  questionsRemaining = 10;
});

  
$('#startButton').on('click', function() {
  newQuiz();
  displayQuestions();
  countDown();
});

function gradeQuiz() {
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].correct === answers[i]) {
      correctAnswers++;
    }
  }
  $('#startButton').hide();
  $('#timer').hide();
  $('#test').hide();
  $('#questionForm').hide();
  $('#correct').append(`<h3>You got answers ${correctAnswers} correct!</h3>`);
}



