const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let obj = {
  questions: {
    name:'What\'s your name? Nicknames are also acceptable 😍 ',
    activity: 'What\'s an activity you like doing? 🎹 🏄🏽‍ 🎻 ',
    music:'What do you listen to while doing that? 🎧 ',
    meal:'Which meal is your favourite (eg: dinner, brunch, etc.) ',
    food:'What\'s your favourite thing to eat for that meal? 🥐 🥓 🥚 ',
    sport:'Which sport is your absolute favourite? ⚽️ 🏈 🎾 🏒 ',
    superpower:'What is your superpower? In a few words, tell us what you are amazing at! 🏆 '
  },
  answers: {
  }
};

let questions = obj.questions;
let answers = obj.answers;
let questionsArray = Object.keys(obj.questions);

console.log('🔥 🎭 🔥', 'Welcome to profile Generator🔥 🎭 🔥')
let x =0;
const execute = function(num, g){
  if(num < g){
    rl.question(questions[questionsArray[num]], (answer) => {
      answers[questionsArray[num]] = answer;
      num = num+1;
      execute(num, g);
    }); 
  } else {
    console.log('🌟 🌟 🌟 ', answers.name, 'loves listening to', answers.music, 'while', answers.activity +',', 'devouring', answers.food, 'for', answers.meal + ',', 'prefers', answers.sport, 'over any other sport and is amazing at', answers.superpower +'.', '🌟 🌟 🌟');
    rl.close();
  }
};

execute(0, questionsArray.length);
