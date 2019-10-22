const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answers={};
const name = 'What\'s your name? Nicknames are also acceptable 😍 ';
const activity = 'What\'s an activity you like doing? 🎹 🏄🏽‍ 🎻 ';
const music = 'What do you listen to while doing that? 🎧 ';
const meal = 'Which meal is your favourite (eg: dinner, brunch, etc.) ';
const food = 'What\'s your favourite thing to eat for that meal? 🥐 🥓 🥚 ';
const sport = 'Which sport is your absolute favourite? ⚽️ 🏈 🎾 🏒 ';
const superpower = 'What is your superpower? In a few words, tell us what you are amazing at! 🏆 ';


console.log('🔥 🎭 🔥', 'Welcome to profile Generator🔥 🎭 🔥')
rl.question(name, (answer) => {
  answers.name =answer;
  // console.log(answers);
  //console.log(`Thank you: ${answer}`);
  rl.question(activity, (answer) => {
    answers.activity = answer;
    rl.question(music, (answer) => {
      answers.music = answer;
      rl.question(meal, (answer) => {
        answers.meal = answer;    
        rl.question(food, (answer) => {
          answers.food = answer;
          rl.question(sport, (answer) => {
            answers.sport = answer;
            rl.question(superpower, (answer) => {
              answers.superpower = answer;
              console.log('🌟 🌟 🌟 ', answers.name, 'loves listening to', answers.music, 'while', answers.activity +',', 'devouring', answers.food, 'for', answers.meal + ',', 'prefers', answers.sport, 'over any other sport and is amazing at', answers.superpower +'.', '🌟 🌟 🌟');
              rl.close();
            });
          });
        });
      });
    });
  });
});