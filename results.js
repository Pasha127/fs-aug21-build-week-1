let total = 20;
let correct = 13;
let wrong = 7;

let correctPercentage = (correct / total) * 100;
let wrongPercentage = 100 - correctPercentage;

let data = {
  datasets: [
    {
      data: [correctPercentage, wrongPercentage],
      backgroundColor: ["#00FFFF", "#D20094"],
    },
  ],
};
let promisedDeliveryChart = new Chart(document.getElementById("myChart"), {
  type: "doughnut",
  data: data,
  options: {
    cutoutPercentage: 70,
    rotation: 120,
  },
});

const btnRateUs = document.querySelector("#rateUs");

btnRateUs.addEventListener(
  "click",
  () => (btnRateUs.style.backgroundColor = "#00FFFF")
);
