let wins = 0;
let loss = 0;


function getPC(){
    let ran = Math.floor(Math.random() * 3);
    let res;

    switch (ran) {
        case 0: res = "rock";
            
            break;
    
        case 1: res = "paper";
        
            break;

        case 2: res = "scissors";
        
            break;
    }

    return res;
}

function getPlayer(){
    let choice = prompt("Enter Rock, Paper or Scissors");
    choice = choice.toLowerCase();

    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("Enter Rock, Paper or Scissors");
        choice = choice.toLowerCase();
    }

    return choice;
}

function playRound(pc, player){

    let round;

    if(pc == "rock" && player == "scissors"){
        round = `You lose ${pc} beats ${player}`
        loss ++;
    }

    else if(pc == "paper" && player == "rock"){
        round = `You lose ${pc} beats ${player}`
        loss ++;
    }

    else if(pc == "scissors" && player == "paper"){
        round = `You lose ${pc} beats ${player}`
        loss ++;
    }

    else{
        round = `You win! ${player} beats ${pc}`;
        wins ++;
    }

    return round;
}

function game(){
    wins = 0;
    loss = 0;

    for(let i = 0; i < 5; i++){
        console.log(playRound(getPC(), getPlayer()));
    }

    if(wins > loss){
        console.log("You win the game");
    }

    else if(wins < loss){
        console.log("You lose the game");
    }

    else{
        console.log("Its a Draw");
    }
}

