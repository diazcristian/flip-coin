let player1Choice = null;
let player2Choice = null;

function choose(choice) {
    const currentPlayer = getCurrentPlayer();
    
    if (currentPlayer === "Iago") {
        player1Choice = choice;
        document.getElementById("Iago").style.display = "none";
        document.getElementById("Cristian").style.display = "block";
    } else if (currentPlayer === "Cristian") {
        player2Choice = choice;
        document.getElementById("Cristian").style.display = "none";
        document.getElementById("coin").style.display = "block";
    }
}

function flipCoin() {
    const resultElement = document.getElementById("result");
    const result = Math.random() < 0.5 ? "cara" : "cruz";

    if (result === player1Choice) {
        resultElement.textContent = "¡Iago gana!";
    } else if (result === player2Choice) {
        resultElement.textContent = "¡Cristian gana!";
    } else {
        resultElement.textContent = "¡Empate!";
    }

    document.getElementById("coin").style.display = "none";
    resultElement.style.display = "block";
}

function getCurrentPlayer() {
    if (!player1Choice) {
        return "Iago";
    } else if (!player2Choice) {
        return "Cristian";
    } else {
        return null; 
    }
}
