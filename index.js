let scoreEl = document.getElementById("score1")
let scoreEl2 = document.getElementById("score2")
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let scoreCount1 = 0
let scoreCount2 = 0
let countdownEl = document.getElementById("countdown")
let countdownTime = 120
let countdownInterval

// highlighting the winner, and showing the scores
function updateScore(scoreEl, scoreCount, homeEl, guestEl) {
  scoreEl.textContent = scoreCount  
  if (scoreCount1 > scoreCount2) {
    homeEl.style.color = "green";
    guestEl.style.color = "white";
  }
  else if (scoreCount2 > scoreCount1) {
    guestEl.style.color = "green";
    homeEl.style.color = "white";
  }
  else {
    guestEl.style.color = "white";
    homeEl.style.color = "white";
  }
}

// calculating the scores and showing them
function addScore1(points) {
    scoreCount1 += points;
    updateScore(scoreEl, scoreCount1, homeEl, guestEl)
}

function addScore2(points) {
    scoreCount2 += points;
    updateScore(scoreEl2, scoreCount2, homeEl, guestEl)
}

function startCountdown() {
        countdownInterval = setInterval(function() {
        let minutes = Math.floor(countdownTime / 60)
        let seconds = countdownTime % 60
        
        countdownEl.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // adding a leading zero if the seconds are less than 10
        
        countdownTime--;
        
        if (countdownTime < 0) {
            clearInterval(countdownInterval)
            endGame()
        }
    }, 1000)
}

function endGame() {
    alert("Time's up! Game over")
    document.querySelectorAll("button").forEach(button => {
        if (button.id !== "restart-btn") {
            button.disabled = true; // disable all buttons except "New Game"
        }
    });
}

document.getElementById("home-add-1").addEventListener("click", function() {
    addScore1(1);
})

document.getElementById("home-add-2").addEventListener("click", function() {
    addScore1(2);
})

document.getElementById("home-add-3").addEventListener("click", function() {
    addScore1(3);
})

document.getElementById("guest-add-1").addEventListener("click", function() {
    addScore2(1);
})

document.getElementById("guest-add-2").addEventListener("click", function() {
    addScore2(2);
})

document.getElementById("guest-add-3").addEventListener("click", function() {
    addScore2(3);
})

function restartGame() {
    scoreCount1 = 0;
    scoreCount2 = 0;
    scoreEl.textContent = scoreCount1;
    scoreEl2.textContent = scoreCount2;
    homeEl.style.color = "white";
    guestEl.style.color = "white";
    countdownTime = 120
    clearInterval(countdownInterval)
    startCountdown()
}

//starting timer on page load
startCountdown()