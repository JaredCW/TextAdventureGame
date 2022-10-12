const enter = "Please enter the number of your answer";

const gameOver = "Sorry GAME OVER!";

const start = `Welcome to the Ghostbusters Text Adventure Game. Click 'OK' to start the game.`;

const q1 = `You are trying to catch a ghost called "Slimer" at the Sedgwick Hotel but have not seen him yet. Should you...
1. Take the elevator to look on the 12th floor
OR
2. Wait in the lobby to see if he shows up there
${enter}`;

const gameOver1 = `You never see Slimer so you give up on catching ghosts and become a talk show host instead. ${gameOver}`;

const q2 = `When you get off the elevator something startles you! Should you...
1. Look to see what it is
OR
2. Shoot at it immediately with your proton pack
${enter}`;

const gameOver2 = `It was the hotel maid and you nearly killed her! You are forced to leave the hotel. ${gameOver}`;

const q3 = `It was just the hotel maid. So you walk around to look for Slimer and You Spot Him! Should you...
1. Call to let the other Ghostbusters know you found him
OR
2. Hide and wait to see where he goes
${enter}`;

const gameOver3 = `Slimer hears you, immediately flies at you, and YOU GET SLIMED! ${gameOver}`;

const q4 = `You see that Slimer goes into the ballroom so you quickly tell the other Ghostbusters and you all head in. You see him flying around when you walk in. Should you...
1. Shoot at him with your proton pack
OR
2. Put two proton packs together to try and create a more powerful shot (A.K.A. Cross The Streams)
${enter}`;

const gameOver4 = `All life as you know it stops instantaneously and every molecule in your body explodes at the speed of light. ${gameOver}`;

const q5 = `You wrangled Slimer with your shot and the ghost trap is set underneath him. You noticed there is a bright light coming from the trap and are tempted to look at it. Should you...
1. Look at the trap
OR
2. Keep your focus on Slimer
OR
3. Decide that you're not a god
${enter}`;

const gameOver5 = `You looked at the trap and the light BLINDED YOU! ${gameOver}`;

const gameOver5A = `Laughing at your decision, Slimer calls the Gatekeeper and Keymaster to open the door and smite you. You should never say you're not a god! ${gameOver}`;

const win = `The ghost trap sucked Slimer in and closed. CONGRATULATIONS! YOU CAUGHT SLIMER!!!`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// Invalid Selection Loop
// This is my code!
// !For now, this loop is repeated at each conditional question. There is probably a more efficient way to call this loop, I need to remember for later on.
while (userInput != 1 && userInput != 2){
    alert(`Invalid selection, try again!`)
    userInput = prompt(q1)
    }

// NESTED CONDITIONAL STATEMENTS
// 1st Conditional Statement
// NOTE: Prompts returns the value entered as a string.

if (userInput == 1) {
    userInput = prompt(q2);
    
    //2nd Invalid Selection Loop
    while (userInput != 1 && userInput != 2){
        alert(`Invalid selection, try again!`)
        userInput = prompt(q2)
        }

    //2ND Conditional Statement
    if (userInput == 1) {
        userInput = prompt(q3);

        //3rd Invalid Selection Loop
        while (userInput != 1 && userInput != 2){
            alert(`Invalid selection, try again!`)
            userInput = prompt(q3)
            }
        
        //3rd Conditional Statement
        if (userInput == 2) {
            userInput = prompt(q4);

            //4th Invalid Selection Loop
            while (userInput != 1 && userInput != 2){
                alert(`Invalid selection, try again!`)
                userInput = prompt(q4)
                }

            //4th Conditional Statement
            if (userInput == 1) {
                userInput = prompt(q5);

                //5th Invalid Seleciton Loop
                // TODO: I'm sure I can use ranges here instead of putting in the individual numbers. Look into that!
                while (userInput != 1 && userInput != 2 && userInput != 3){
                    alert(`Invalid selection, try again!`)
                    userInput = prompt(q5)
                    }
                
                //5th Conditional Statement
                if (userInput == 2) {
                    alert(win);
                } else if (userInput == 3) {
                    alert(gameOver5A);
                } else {
                    alert(gameOver5);
                }
            } else {
              alert(gameOver4);  
            }
        } else {
            alert(gameover3);
        }
    } else {
        alert(gameOver2);
    }
} else {
    alert(gameOver1);
} 