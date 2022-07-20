const total = sessionStorage.getItem("numberOfQuestions");
const correct = sessionStorage.getItem("score");
const wrong = total - correct;
let newScoresArray = JSON.parse(localStorage.getItem("data")); //to read
console.log(newScoresArray);

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
