const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const Ans = [];
rl.question(
  "What's your name? Nicknames are also acceptable :)\n ",
  (answer) => {
    Ans.push(answer);
    rl.question("What's an activity you like doing?\n ", (answer) => {
      Ans.push(answer);
      rl.question("What do you listen to while doing that?\n ", (answer) => {
        Ans.push(answer);
        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.)\n ",
          (answer) => {
            Ans.push(answer);
            rl.question(
              "What's your favourite thing to eat for that meal?\n ",
              (answer) => {
                Ans.push(answer);
                rl.question(
                  "Which sport is your absolute favourite?\n ",
                  (answer) => {
                    Ans.push(answer);
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at!\n ",
                      (answer) => {
                        Ans.push(answer);
                        console.log(
                          `${Ans[0]} loves listening to ${Ans[2]} while ${Ans[1]}, devouring ${Ans[4]} for ${Ans[3]}, prefers ${Ans[5]} over any other sport, and is amazing at ${Ans[6]}.`
                        );
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
