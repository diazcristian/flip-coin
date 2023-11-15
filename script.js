let player1Choice = null;
let player2Choice = null;

function choose(choice) {
    const currentPlayer = getCurrentPlayer();
    
    if (currentPlayer === "player1") {
        player1Choice = choice;
        document.getElementById("player1").style.display = "none";
        document.getElementById("player2").style.display = "block";
    } else if (currentPlayer === "player2") {
        player2Choice = choice;
        document.getElementById("player2").style.display = "none";
        document.getElementById("coin").style.display = "block";
    }
}

function flipCoin() {
    const resultElement = document.getElementById("result");
    const result = Math.random() < 0.5 ? "cara" : "cruz";

    if (result === player1Choice) {
        resultElement.textContent = "¡Jugador 1 gana!";
    } else if (result === player2Choice) {
        resultElement.textContent = "¡Jugador 2 gana!";
    } else {
        resultElement.textContent = "¡Empate!";
    }

    document.getElementById("coin").style.display = "none";
    resultElement.style.display = "block";
}

function getCurrentPlayer() {
    if (!player1Choice) {
        return "player1";
    } else if (!player2Choice) {
        return "player2";
    } else {
        return null; // Ambos jugadores han hecho su elección
    }
}
