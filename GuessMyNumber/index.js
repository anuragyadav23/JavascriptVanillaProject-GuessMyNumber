let randomNumber;
let myNumber = 10;
let score = 0;
let highscore = 0;
let element = document.querySelectorAll(".section-right-container p");

function ShowNumber() {
  if (myNumber == randomNumber) {
    document.querySelector(".main-container p").innerText = randomNumber;
    element[0].innerText = "Hurray! You got it.";
    element[0].style.color = "#395a00";
    document.querySelector("body").style.backgroundColor = "#01a475";
  } else {
    document.querySelector("body").style.backgroundColor = "#a90000";
    if (myNumber > randomNumber) {
      element[0].innerText = "Too High Buddy!";
    }
    if (myNumber < randomNumber) {
      element[0].innerText = "Too Low Buddy!";
    }
  }
}

function GenerateRandomNumber() {
  document.querySelector(".main-container p").innerText = "?";
  document.querySelector("#text-input").value = null;
  element[0].innerText = "";
  element[0].style.color = "#000000";
  document.querySelector("body").style.backgroundColor = "#a3b18a";
  randomNumber = Math.floor(Math.random() * 100) % 21;
  score = 0;
  element[1].innerText = `Score : ${score}`;
  console.log(randomNumber);
}

function getValue() {
  score = score + 1;
  myNumber = document.querySelector("#text-input").value;
  ShowNumber();
  element[1].innerText = `Score : ${score}`;

  console.log(myNumber);
  console.log(randomNumber);

  if (score > highscore) {
    highscore = score;
    element[2].innerText = `Highest Score : ${highscore}`;
  }
}

GenerateRandomNumber();
document.querySelector(".check-btn").addEventListener("click", getValue);
document.querySelector(".btn").addEventListener("click", GenerateRandomNumber);
