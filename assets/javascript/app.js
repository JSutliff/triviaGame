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
    question: 'Is the sky blue?',
    answers: ['Yes', 'No', 'Maybe', 'What'],
    correctAnswer: 0
  }
];

function displayQuestions() {
  console.log('this function ran');
  for (var i = 0; i < questionBank.length; i++) {
    var questionDiv = $('<h2>');
    questionDiv.text(questionBank[i].question);
    $('#test').append(questionDiv);
    for ( var j = 0; j < questionBank[i].answers.length; j++) {
      $('#test').append(`<input type="radio" name="question-${i}" value="${questionBank[i].answers[j]}" data-index="${j}"> ${questionBank[i].answers[j]}`);
    }
  }

  
  var submitButton = $('<button>');
  submitButton.text('Submit');
  submitButton.attr('class', 'submit');
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
