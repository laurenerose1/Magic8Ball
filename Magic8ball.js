// Set up the variables for the users name, a question to ask, a random number, and an empty variable for the eight ball
let userName = 'Lauren';
const userQuestion = 'Will I get to travel the world soon?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// Check to see if someone input a name
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Show the question asked
console.log(`${userName} asked: ${userQuestion}`);

// Determine a response from the Magic 8 Ball based on a random bimber using switch statements
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
  default:
    console.log(`There appears to be a problem ${userName}! Please contact nine bal services.`);
}

// Reveal the answer
console.log(`Magic Eightball says: ${eightBall}`);