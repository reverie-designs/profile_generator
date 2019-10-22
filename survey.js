const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answers=[];

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  answers.push(answer);
  // console.log(answers);
  //console.log(`Thank you: ${answer}`);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    //console.log(`Thank you: ${answer}`);
    answers.push(answer);
    // console.log(answers);
    rl.question('What do you listen to while you are doing that? ', (answer) => {
      //console.log(`Thank you: ${answer}`);
      answers.push(answer);
      // console.log(answers);
      rl.question('Which meal is your favourite? (breakfast, dinner, brunch) ', (answer) => {
        //console.log(`Thank you: ${answer}`);
        answers.push(answer);
        // console.log(answers);     
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
        //console.log(`Thank you: ${answer}`);
        answers.push(answer);
        // console.log(answers);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            //console.log(`Thank you: ${answer}`);
            answers.push(answer);
            // console.log(answers);
            rl.question('What is your super power? ', (answer) => {
              //console.log(`Thank you: ${answer}`);
              answers.push(answer);
              console.log(answers[0], 'loves listening to', answers[2], 'while', answers[0] +',', 'devouring', answers[4], 'for', answers[3] + ',', 'prefers', answers[5], 'over any other sport and is amazing at', answers[6]+'.');
              rl.close();
              // console.log(answers);
            });
          });
        });
      });
    });
  });
});