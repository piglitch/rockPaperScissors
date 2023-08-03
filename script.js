// script.js
const Rock = 'rock';
const Paper = 'paper';
const Scissors = 'scissors';
const choices = [Rock, Paper, Scissors];
score = []


function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log('Player chose:', playerChoice);
    console.log('Computer chose:', computerChoice);

    // Logic to determine the winner goes here.
    if (playerChoice === computerChoice) {
        //console.log("It's a tie!");
        score.push('T')
    } else if (
        (playerChoice === Rock && computerChoice === Scissors) ||
        (playerChoice === Paper && computerChoice === Rock) ||
        (playerChoice === Scissors && computerChoice === Paper)
    ) {
        score.push('P')
    } else {
        score.push('C')
    }
    if (score.length == 5) {
        countP = score.filter(ele => ele === 'P').length
        countC = score.filter(ele => ele === 'C').length
        if (countP > countC) {
            console.log('Player wins!');
        }
        if (countC > countP) {
            console.log('Comp wins');
        } 
        if(countC == countP) {
            console.log('Tie', countC, countP);
        }        
    }    
}

function getPlayerChoice() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((e) => {
        e.addEventListener('click', () => {
            const playerChoice = e.id;
            playRound(playerChoice); // Pass the player's choice to playRound.
        });
    });
}
getPlayerChoice();
