const playerOne = {
    score: 0,
    button: document.querySelector("#increase-player-one"),
    display: document.querySelector("#player-one-score")
};

const playerTwo = {
    score: 0,
    button: document.querySelector("#increase-player-two"),
    display: document.querySelector("#player-two-score")
};

const ddlWinningScore = document.querySelector("#winning-score");
const btnReset = document.querySelector("#reset");
let winningScore = parseInt(ddlWinningScore.value);
let isGameOver = false;

playerOne.button.addEventListener("click", () => {
    updateScore(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", () => {
    updateScore(playerTwo, playerOne);
});

btnReset.addEventListener("click", newGame);

ddlWinningScore.addEventListener("change", () => {
    winningScore = parseInt(ddlWinningScore.value);
});

function updateScore(player, opponent) {
    if (isGameOver) return;

    player.score++;
    player.display.textContent = player.score;

    if (player.score === winningScore) {
        gameOver(player, opponent);
    }
}

function gameOver(winner, loser) {
    isGameOver = true;

    winner.display.classList.add("has-text-success");
    loser.display.classList.add("has-text-danger");

    winner.button.disabled = true;
    loser.button.disabled = true;
}

function newGame() {
    isGameOver = false;

    for (let player of [playerOne, playerTwo]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove("has-text-success", "has-text-danger");
        player.button.disabled = false;
    }
}