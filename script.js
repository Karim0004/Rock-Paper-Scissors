function computerPlay () {
    let n = Math.floor(Math.random() * 3);
    if (n === 0) {
        return "Rock";
    }
    else if (n === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound (user, pc) {
    
    user = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
    
    switch (user) {
        
        case "Rock": case "Scissors": case "Paper":
            if (user === pc) {
                return `${user} against ${pc}, It\'s a Draw! `;
            }
            else if (user === "Rock" && pc === "Scissors" 
            || user === "Scissors" && pc === "Paper"
            || user === "Paper" && pc === "Rock") {
                return `You Win! ${user} beats ${pc}`;
            }
            else {
                return `You Lose! ${pc} beats ${user}`;
            }
            break;

        default:
            return "Incorrect input, please enter rock, paper, or scissors";
    }
}

function game () {
    let user;
    let result;
    let pcScore = 0;
    let userScore = 0;
    
    for (let n = 0; n < 5; n++) {
        user = prompt("Type Rock, Paper, or Scissors");
        result = playRound(user, computerPlay());
        
        if (result.charAt(4) === "W") {
            userScore++;
        }
        else if (result.charAt(4) === "L") {
            pcScore++;
        }

        console.log(result);
    }
    let resultText;
    if (userScore > pcScore) {
        resultText = "WIN";
    }
    else if (pcScore > userScore) {
        resultText = "LOSE";
    }
    else {
        resultText = "DRAW";
    }

        console.log(`${userScore} rounds won and ${pcScore} rounds lost, YOU ${resultText}!`);
}

game();