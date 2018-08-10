var questionBank = [
  {
    question: 'Is this a test question?',
    answers: ['No', 'Yes', 'Maybe', 'What'],
    correctAnswer: 1
  }, 
  {
    question: 'Is the sky blue?',
    answers: ['Yes', 'No', 'Maybe', 'What'],
    correctAnswer: 0
  }, 
  {
    question: 'Why is the chicken angry?',
    answers: ['Yes', 'No', 'Maybe', 'What'],
    correctAnswer: 0
  }
];

function displayQuestions() {
  console.log('this function ran');
  for (var i = 0; i < questionBank.length; i++) {
    var questionDiv = $('<h2>');
    questionDiv.html(questionBank[i].question);
    $('#questionForm').append(questionDiv);
    for ( var j = 0; j < questionBank[i].answers.length; j++) {
      $('#questionForm').append(`<input type="radio" name="question-${i}" value="${questionBank[i].answers[j]}" data-index="${j}"> ${questionBank[i].answers[j]}`);
    }
  }
  var submitButton = $('<button>');
  submitButton.text('Submit');
  submitButton.attr('class', 'submit');
  submitButton.attr('type', 'submit');
  $('#test').append('<br>');
  $('#test').append(submitButton);
}


$(document).on('click', '.submit',  function(){
  gradeQuiz();
});

displayQuestions();

function gradeQuiz() {
  $.each($('input[name="question-0"]:checked'), function() {
    console.log($(this));
  })
}

var count = 10;

function countDown() {
  $('#timer').html(count);
  function timer() {
    if (count > 0) {
      count--;
      $('#timer').html(count);
    } else if (count === 0) {
      $(submitButton).submit();
    }
  }
  setInterval(timer, 1000);
}


countDown();