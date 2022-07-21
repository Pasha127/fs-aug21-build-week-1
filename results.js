const total = sessionStorage.getItem("numberOfQuestions");
const correct = sessionStorage.getItem("score");
const wrong = total - correct;

//importing data
let newScoresArray = JSON.parse(localStorage.getItem("data")); //to read
console.log(newScoresArray);

for (let i = 0; i < newScoresArray.length; i++) {
  if (newScoresArray[i][0] < 10) {
    newScoresArray[i] = "0" + newScoresArray[i].toString();
    newScoresArray[i] = newScoresArray[i].replaceAll(",", " ");
  } else {
    newScoresArray[i] = newScoresArray[i].toString().replaceAll(",", " ");
  }
}
let arrayOfScoreDivs = newScoresArray.sort().reverse();
//console.log(arrayOfScoreDivs);

const leaderBoard = document.querySelector("#leaderBoardDiv");
const correctPercentage = (correct / total) * 100;
const wrongPercentage = 100 - correctPercentage;

const data = {
  datasets: [
    {
      data: [wrongPercentage, correctPercentage],
      backgroundColor: ["#D20094", "#00FFFF"],
    },
  ],
};
const promisedDeliveryChart = new Chart(document.getElementById("myChart"), {
  type: "doughnut",
  data: data,
  options: {
    cutoutPercentage: 70,
    minRotation: 90,
    maxRotation: 90,
  },
});

const addCorrectPercentage = document.getElementById("correct-percentage");
addCorrectPercentage.innerText = `${correctPercentage}%`;

const addWrongPercentage = document.getElementById("wrong-percentage");
addWrongPercentage.innerText = `${wrongPercentage}%`;

const addCorrectAnswers = document.getElementById("correct-answers");
addCorrectAnswers.innerText = `${correct}/${total} questions`;

const addWrongAnswers = document.getElementById("wrong-answers");
addWrongAnswers.innerText = `${wrong}/${total} questions`;

const btnRateUs = document.querySelector("#rateUs");

function innerText() {
  const addResultText = document.getElementById("innerChartTextResult");
  if (correctPercentage < 60) {
    document.getElementById("innerChartPassed").style.visibility = "hidden";
    addResultText.innerText = `You failed the exam.
    `;
  }
}

console.log(innerText());

btnRateUs.addEventListener(
  "click",
  () => (btnRateUs.style.backgroundColor = "#00FFFF")
);

let arrayGenerator = function () {
  for (let i = 0; i < arrayOfScoreDivs.length; i++) {
    const newScoreDiv = document.createElement("div");
    newScoreDiv.classList.add("scoreDiv");
    const newScoreDivText = document.createElement("p");
    newScoreDivText.innerText = arrayOfScoreDivs[i];
    leaderBoard.append(newScoreDiv);
    newScoreDiv.append(newScoreDivText);
    //console.log(arrayOfScoreDivs)
  }
};
arrayGenerator();

const clearBoard = function () {
  localStorage.clear();
  location.reload();
};
