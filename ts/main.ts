const player1Btn: HTMLElement | null = document.getElementById("playerOne");
const player2Btn: HTMLElement | null = document.getElementById("playerTwo");
const result: HTMLElement | null = document.getElementById("counter-value");
const ResetBtn: HTMLElement  = document.getElementById("reset-btn") as HTMLButtonElement;
const playerOneScoreDisplay: HTMLElement | null = document.getElementById("playerOneScoreDisplay");
const playerTwoScoreDisplay: HTMLElement | null = document.getElementById("playerTwoScoreDisplay");

let player1Score = 0;
let player2Score = 0;
const maxScore = 50;

function generateRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

function updateScores() {
  if (playerOneScoreDisplay && playerTwoScoreDisplay) {
    playerOneScoreDisplay.textContent = player1Score.toString();
    playerTwoScoreDisplay.textContent = player2Score.toString();
  }
}

ResetBtn?.addEventListener("click", resetGame);

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    updateScores();
  
    if (result) result.textContent = " ";
  
    ResetBtn.style.display = "none"; 
    ResetBtn.classList.remove('show'); 
  
    // Enable player buttons
    player1Btn?.removeAttribute('disabled'); 
    player2Btn?.setAttribute('disabled', 'true'); 
  }
  

function checkWinner() {
    if (player1Score >= maxScore) {
      if (result) result.textContent = "Player 1 wins!";
      alert("Player 1 wins!");
      ResetBtn.style.display = "block"; 
      ResetBtn.classList.add('show'); // Add the show class for animation
    } else if (player2Score >= maxScore) {
      if (result) result.textContent = "Player 2 wins!";
      alert("Player 2 wins!");
      ResetBtn.style.display = "block"; 
      ResetBtn.classList.add('show'); // Add the show class for animation
    }
  }
  

player1Btn?.addEventListener("click", () => {
  const diceNumber = generateRandomNumber();
  player1Score += diceNumber;

  if (result) result.textContent = `${diceNumber}`;

  if (player1Score >= maxScore) {
    checkWinner();
    return;
  }

  updateScores();
  player1Btn?.setAttribute('disabled', 'true');
  player2Btn?.removeAttribute('disabled');
});

player2Btn?.addEventListener("click", () => {
  const diceNumber = generateRandomNumber();
  player2Score += diceNumber;

  if (result) result.textContent = ` ${diceNumber}`;

  if (player2Score >= maxScore) {
    checkWinner();
    return;
  }

  updateScores();
  player2Btn?.setAttribute('disabled', 'true');
  player1Btn?.removeAttribute('disabled');
});

player2Btn?.setAttribute('disabled', 'true');
