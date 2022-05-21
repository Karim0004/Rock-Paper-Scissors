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

const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.result');
const scoreContainer = document.querySelector('.score');

let userScore = 0;
let pcScore = 0;

buttons.forEach(btn => btn.addEventListener('click', play))

function play (e) {
    const result = playRound(e.target.classList.value, computerPlay());

    if (result.charAt(4) === "W") {
        userScore++;
    }
    else if (result.charAt(4) === "L") {
        pcScore++;
    }

    if (userScore === 5) {
        resultContainer.textContent = 'Game Over! YOU WON';
        userScore = 0;
        pcScore = 0;
    }  
    else if (pcScore === 5) {
        resultContainer.textContent = 'Game Over! YOU LOSE';
        userScore = 0;
        pcScore = 0;
    } else resultContainer.textContent = result;


    scoreContainer.textContent = `Your score ${userScore}, Computer score ${pcScore}`;
}