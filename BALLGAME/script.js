let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 6;

const slider = document.getElementById("slider");
const numbersDiv = document.getElementById("numbers");
const attemptText = document.getElementById("attempt");
const resultText = document.getElementById("result");

// Create circles (1 to 10)
for (let i = 1; i <= 10; i++) {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.innerText = i;
  numbersDiv.appendChild(circle);
}

// Function when slider moves
slider.addEventListener("input", () => {
  let guess = parseInt(slider.value);
  attempts++;

  let circles = document.querySelectorAll(".circle");
  circles.forEach(c => c.style.background = "cyan"); // reset all colors

  let selectedCircle = circles[guess - 1];

  if (guess < randomNumber) {
    selectedCircle.style.background = "yellow";
  } else if (guess > randomNumber) {
    selectedCircle.style.background = "red";
  } else {
    selectedCircle.style.background = "green";
    resultText.innerText = `You Win! Correct number guessed in ${attempts} attempts! `;
    slider.disabled = true;
    return;
  }

  attemptText.innerText = `Attempt No. ${attempts}`;

  if (attempts >= maxAttempts && guess !== randomNumber) {
    resultText.innerText = `Game Over! The correct number was ${randomNumber}.`;
    slider.disabled = true;
  }
});
