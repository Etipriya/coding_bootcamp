# Help for the Homework

## A mixture of hints, and guidance:

### General Guidance

There's a few steps to completing this homework:

1. This will require questions, we should come up with some code questions based on what we've learnt.
   - Come up with 5 questions.
2. Forumlate a plan for:
   - Your website, how it looks, focus on layout, not design
   - Your JavaScript, how will it work functionally... **keep it simple**
3. Break this into blocks for developement what should we do:
   - Build the html
   - Edit the CSS so it's laid out correctly
   - Start on the logic for the quiz
   - Only when you've finished make it look as you would like.

**Our homework session will cover the game logic for the JavaScript this is super important to define early, as it underpins our entire quiz**

This homework is super important to manually test (not code tests, not yet anyway :wink: ) before you submit, if you can use this as a user, and get the full experience for both: getting all questions correct, or time running out after some bad answers - it's all important to do as a user before submitting.

**Don't submit multiple HTML files your submission should look like:**

```
code_quiz/ <-- Your repository NOT another folder.
	assets/
		screenshots/
			screenshot_1.png
      images/
         any_image.png // just an idea
      sound_effects/
         right_answer.mp3 // again not needed
         wrong_answer.mp3
      js/
         script.js
         high-scores.js
      css/
         style.css
         high-scores.css
	index.html
	high-scores.html
```

### Specific things for Homework 3:

1. Your application MUST be deployed.
2. The first thing a user sees SHOULD be a button to start the quiz.
3. Clicking 'Start Quiz' dynamically updates the html, removing the start button and presenting a series of questions.
4. When you have clicked 'Start Quiz' a timer MUST start counting down from at LEAST 60 seconds (Maybe give it more).
5. If a question is answered incorrectly, it MUST subtract time from the timer.
6. The game MUST end if:
   - All questions have been answered
     - OR
   - The timer has reached 0.
7. When the game ends, the user can SAVE their intials and score to a 'Highscores' view
   - This MUST use localStorage.
     > A good test for this is, if I refresh my page, and complete the quiz, do I see my previous high score?
