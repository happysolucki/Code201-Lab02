const quiz = function aboutMeQuiz() {
  let name = prompt("Welcome to the quiz about me! First, what is your name?");
  while(name == null || name === '') {
    name = prompt("Invalid input. Please enter your name correctly.");
  }
  console.log(name);

  alert("Please answer the following questions with a simple 'yes' or 'no'. Entering 'y' or 'n' suffices as well.");

  // counter for how many questions the user answered correctly
  let correctGuesses = 0;

  // stored questions inside of an array to keep code DRY
  let questions = ['Was I born in Memphis?', 'Am I 22 years old?', 'Did I graduate from Central High School?', 'Is my favorite video game SSX3?', 'Is my favorite sport soccer?'];

  // simple for loop
  for (let i = 0; i < questions.length; i++) {
    // normalize answers to easily verify input
    let guess = prompt(questions[i]).toLowerCase();
    // for questions 3 & 5, the correct answer is no. compare to user input. if correct, increment correctGuesses by 1.
    if (i === 2 || i === 4) {
      if (guess === 'n' || guess === 'no') correctGuesses++;
    } else {
      // for all other questions, the proper response is yes. compare to user input. if correct, increment correctGuesses by 1.
      if (guess === 'y' || guess === 'yes') correctGuesses++;
    }
  }

  // Thank user for participation & tell user how many questions they answered correctly
  alert(`Thank you for taking this quiz ${name[0].toUpperCase() + name.substring(1).toLowerCase()}! You guessed ${correctGuesses} out of 5 questions correctly.`);

}

// call quiz function when button is clicked
let button = document.querySelector('button');
button.addEventListener('click', quiz);
