var questionBank = [
  {
    question: 'Who is the greatest guiatar player of all time?',
    answers: ['Johnny Mayonaise', 'Big Red', 'Jerry Garcia', 'That other guy'],
    correctAnswer: 2
  }, 
  {
    question: 'What is/was the best era of The Grateful Dead?',
    answers: ['The Brent Years, (more specifically 87-89)', 'I love Donna G.', 'Classic Pig-Pen', 'I don\'t list to real music'],
    correctAnswer: 0
  }, 
  {
    question: 'What is John Mayer\'s actual last name?',
    answers: ['Salami', 'Mayonaise', 'Maybe', 'Who?'],
    correctAnswer: 1
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

var count = 60;

function countDown() {
  $('#timer').html(count);
  function timer() {
    if (count > 0) {
      count--;
      $('#timer').html(count);
    }
  }
  setInterval(timer, 1000);
}


countDown();