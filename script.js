const Rock = 'rock';
const Paper = 'paper';
const Scissors = 'scissors';
choices = [Rock, Paper, Scissors]

getComputerChoice = () => {
    compChoice = choices[Math.floor(Math.random() * choices.length)]
   // console.log(compChoice);
}  

getPlayerChoice = () =>{
    if (playerChoice = document.getElementById(Rock)){
        playerChoice.addEventListener('click', () =>{
        playerChoice.value = Rock
        console.log(playerChoice.value);    
        })} 
    if (playerChoice = document.getElementById(Paper)){
        playerChoice.addEventListener('click', () =>{
        playerChoice.value = Paper
        console.log(playerChoice.value);    
        })} 
    if (playerChoice = document.getElementById(Scissors)){
        playerChoice.addEventListener('click', () =>{
        playerChoice.value = Scissors
        console.log(playerChoice.value);    
        })} 
}



function playRound() {
    // your code here!
    getComputerChoice()
     
    
}


  


const computerChoice = getComputerChoice();
const playerSelection = getPlayerChoice();
 // console.log(playRound(playerSelection, computerSelection));
