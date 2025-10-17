// TODO: button to end game MAX 5 

const images = document.querySelectorAll('div img');
let humanScore = 0;
let computerScore = 0;
let rounds = 0

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
    
    console.log("Computer chooses " + item);

    // update image 
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

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === "rock" & computerChoice === "scissors") {
        humanScore++;
    }
    else if (humanChoice === "paper" & computerChoice === "rock") {
        humanScore++;
    }
    else if (humanChoice === "scissors" & computerChoice === "paper") {
        humanScore++;
    }

    else if (computerChoice === "rock" & humanChoice === "scissors") {
        computerScore++;
    }
    else if (computerChoice === "paper" & humanChoice === "rock") {
        computerScore++;
    }
    else if (computerChoice === "scissors" & humanChoice === "paper") {
        computerScore++;
    }

    rounds++;

    document.getElementById("round").innerHTML = `ROUND: ${rounds}`;
    document.getElementById("user-score").innerHTML = `YOU: ${humanScore}`;
    document.getElementById("computer-score").innerHTML = `COMPUTER: ${computerScore}`;
}

playGame();