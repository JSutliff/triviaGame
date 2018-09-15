<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# Trivia Game

<!-- Put a description of what the project is -->
Combining HTML, jQuery and UI-Kit/CSS to build a timed trivia game. Upon clicking 
start button a timer is started and questions are displayed. When the time runs out
or the submit button is clicked the quiz is graded and number of correct answers 
displayed. 

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->
[Grateful Dead Trivia](https://jsutliff.github.io/triviaGame/)

# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
[screen shot of completed assignment](assets/images/screenShot.png)


<img src="assets/images/gifGenScreenShot.jpeg">
# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->
- HTML5
- jQuery
- CSS3


<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->


# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

```javascript
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
```
# Explanation of code
This snipet shows the gradeQuiz function that compares two arrays through looping. 

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
This was a challenging assignment that really helped learn DOM manipulation. Learning
to use interval timers was a useful challenge. 

# Author 
<!-- make a link to the deployed site and have your name as the link -->
[Jason P. Sutliff](https://jsutliff.github.io/Basic-Portfolio/)