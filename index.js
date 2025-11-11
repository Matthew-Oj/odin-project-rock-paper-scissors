const images = document.querySelectorAll('div img');
let humanScore = 0;
let computerScore = 0;
let rounds = 0
const delayInMilliseconds = 1000;

function getComputerChoice() {
    let item;
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0){
        item = "rock";
    }
    else if (choice === 1){
        item = "paper";
    }
    else if (choice === 2) {
        item = "scissors";
    }

    const imageList = ["images/rock.png","images/paper.png","images/scissors.png"]
    computerImage = document.getElementById("computer-selection");
    computerImage.src = imageList[choice];

    computerImage.classList.add("flash-border");
    setTimeout(() => {
    computerImage.classList.remove("flash-border");
    }, 300);

    return item;
}

function playGame() {
    images.forEach(img => {
        img.onclick = () => {
        const imagePath = img.getAttribute('src');
        const humanChoice = imagePath.split("/").pop().split(".")[0];
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    };
    });
}

function updateElementId(){
    document.getElementById("round").innerHTML = `ROUND: ${rounds}`;
    document.getElementById("user-score").innerHTML = `YOU: ${humanScore}`;
    document.getElementById("computer-score").innerHTML = `COMPUTER: ${computerScore}`;
}

function checkRound() {
    if (rounds === 5) {
        const winner = humanScore > computerScore ? "YOU WIN" : "COMPUTER WINS";

        const gameOver = document.getElementById("game-over");
        const winnerMessage = document.getElementById("winner-message");
        const playAgainButton = document.getElementById("play-again");

        winnerMessage.textContent = `GAME OVER: ${winner}`;
        gameOver.classList.remove("hidden");

        // Disable further clicks
        images.forEach(img => img.onclick = null);

        playAgainButton.onclick = () => {
            humanScore = 0;
            computerScore = 0;
            rounds = 0;
            updateElementId();
            document.getElementById("round-result").innerHTML = "";
            gameOver.classList.add("hidden");
            playGame();
        };
    }
}


function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === "rock" & computerChoice === "scissors") {
        document.getElementById("round-result").innerHTML = `YOU WIN`;
        humanScore++;
    }
    else if (humanChoice === "paper" & computerChoice === "rock") {
        document.getElementById("round-result").innerHTML = `YOU WIN`;
        humanScore++;
    }
    else if (humanChoice === "scissors" & computerChoice === "paper") {
        document.getElementById("round-result").innerHTML = `YOU WIN`;
        humanScore++;
    }

    else if (computerChoice === "rock" & humanChoice === "scissors") {
        document.getElementById("round-result").innerHTML = `COMPUTER WINS`;
        computerScore++;
    }
    else if (computerChoice === "paper" & humanChoice === "rock") {
        document.getElementById("round-result").innerHTML = `COMPUTER WINS`;
        computerScore++;
    }
    else if (computerChoice === "scissors" & humanChoice === "paper") {
        document.getElementById("round-result").innerHTML = `COMPUTER WINS`;
        computerScore++;
    }
    else {
        document.getElementById("round-result").innerHTML = `DRAW`;
    }

    rounds++;

    updateElementId();
    //setTimeout(checkRound(), delayInMilliseconds);
    checkRound();
}


playGame();