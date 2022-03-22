/* computer-generated option */
function computerPlay()
{
    let computer = Math.random();
    
    if(computer <= 0.333)
    {
        return "Rock";
    }
    else if(computer <= 0.666  && computer > 0.333)
    {
        return "Paper";
    }
    else 
    {
        return "Scissors";
    }
}

/* user-generated option */
function userPlay()
{
    let playerSelection = prompt("Press 0 for Rock, 1 for Paper, or 2 for Scissors");
    parseInt(playerSelection);

    if(playerSelection == 0)
        {
          return "Rock";
        }
        else if(playerSelection == 1)
        {
          return "Paper";
        }
        else if(playerSelection == 2)
        {
            return "Scissors";
        }

    while(playerSelection < 0 || playerSelection > 2)
    {
        let playerSelection = prompt("Invalid Input. Press 0 for Rock, 1 for Paper, or 2 for Scissors");
        parseInt(playerSelection);
    
        if(playerSelection == 0)
        {
          return "Rock";
        }
        else if(playerSelection == 1)
        {
          return "Paper";
        }
        else if(playerSelection == 2)
        {
            return "Scissors";
        }
    }
}

/* win/loss/tie data */
let playerWins = 0;
let playerLoses = 0;
let tieGame = 0;

/* Determines who wins the round and increments win/loss/tie data */
function playRound(computerSelection, playerSelection)
{
    if(computerSelection == "Rock" && playerSelection == "Paper")
    {
        console.log("You Win! Paper beats Rock")
        ++playerWins;
    }
    else if(computerSelection == "Rock" && playerSelection == "Scissors")
    {
        console.log("You Lose! Rock beats Scissors")
        ++playerLoses;
    }
    else if(computerSelection == "Rock" && playerSelection == "Rock")
    {
        console.log("Tie Game! Rock ties Rock")
        ++tieGame;
    }
    else if(computerSelection == "Paper" && playerSelection == "Rock")
    {
        console.log("You Lose! Paper beats Rock")
        ++playerLoses;
    }
    else if(computerSelection == "Paper" && playerSelection == "Scissors")
    {
        console.log("You Win! Scissors beats Paper")
        ++playerWins;
    }
    else if(computerSelection == "Paper" && playerSelection == "Paper")
    {
        console.log("Tie Game! Paper ties Paper")
        ++tieGame;
    }
    else if(computerSelection == "Scissors" && playerSelection == "Paper")
    {
        console.log("You Lose! Scissors beats Paper")
        ++playerLoses;
    }
    else if(computerSelection == "Scissors" && playerSelection == "Rock")
    {
        console.log("You Win! Rock beats Scissors")
        ++playerWins;
    }
    else if(computerSelection == "Scissors" && playerSelection == "Scissors")
    {
        console.log("Tie Game! Scissors ties Scissors");
        ++tieGame;
    }
}

/* Goes through a 5-round game and determines the outcome*/
function game()
{
    for(let i = 0; i < 5; ++i)
    {
        let computerSelection = computerPlay();
        let playerSelection = userPlay();
        console.log(playRound(computerSelection, playerSelection));
    }

    if(playerWins > playerLoses)
        {
            console.log("You Win the Game!")
        }
        else if(playerLoses > playerWins)
        {
            console.log("You Lose the Game!")
        }
        else 
        {
            console.log("The Game was Tied!")
        }

    /* Resets win/loss/tie data */
    playerWins = 0;
    playerLoses = 0;
    tieGame = 0;
}

/* Starts the game */
function startGame()
{
    let startGame = prompt("Would you like to play a game? [y/n]");

    if(startGame.toUpperCase() == "Y")
    {
        game();
    }
    else return;
}

startGame();