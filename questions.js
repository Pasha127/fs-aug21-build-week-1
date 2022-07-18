const easyComputerQuestions = [
    {"category":"Science: Computers",
    "type":"multiple",
    "time":20,    
    "difficulty":"easy",
    "question":"What does the Prt Sc button do?",
    "correct_answer":"Captures what is on the screen and copies it to your clipboard",
    "incorrect_answers":["Nothing","Saves a .png file of what's on the screen in your screenshots folder in photos",
    "Closes all windows"]},
    {"category":"Science: Computers",
    "type":"boolean",
    "time":15,
    "difficulty":"easy",
    "question":"Pointers were not used in the original C programming language; they were added later on in C++.",
    "correct_answer":"False",
    "incorrect_answers":["True"]},
    {"category":"Science: Computers",
    "type":"multiple",
    "time":20,
    "difficulty":"easy",
    "question":"The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    "correct_answer":"HD Graphics 500",
    "incorrect_answers":["HD Graphics 700 ","HD Graphics 600","HD Graphics 7000"]},
    {"category":"Science: Computers",
    "type":"multiple",
    "time":20,
    "difficulty":"easy",
    "question":"In web design, what does CSS stand for?",
    "correct_answer":"Cascading Style Sheet",
    "incorrect_answers":["Counter Strike: Source","Corrective Style Sheet","Computer Style Sheet"]},
    {"category":"Science: Computers",
    "type":"multiple",
    "time":20,
    "difficulty":"easy",
    "question":"What is the domain name for the country Tuvalu?",
    "correct_answer":".tv",
    "incorrect_answers":[".tu",".tt",".tl"]},
    {"category":"Science: Computers",
    "type":"multiple",
    "time":20,
    "difficulty":"easy",
    "question":"How many kilobytes in one gigabyte (in decimal)?",
    "correct_answer":"1000000",
    "incorrect_answers":["1024","1000","1048576"]},
    {"category":"Science: Computers",
    "type":"multiple",
    "time":20,
    "difficulty":"easy",
    "question":"In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
    "correct_answer":"Green",
    "incorrect_answers":["Red","Blue","Yellow"]},
    {"category":"Science: Computers",
    "type":"boolean",
    "time":15,
    "difficulty":"easy",
    "question":"The Windows 7 operating system has six main editions.",
    "correct_answer":"True",
    "incorrect_answers":["False"]},
    {"category":"Science: Computers",
    "type":"boolean",
    "time":15,
    "difficulty":"easy",
    "question":"Linux was first created as an alternative to Windows XP.",
    "correct_answer":"False","incorrect_answers":["True"]},
    {"category":"Science: Computers",
    "type":"boolean",
    "time":15,
    "difficulty":"easy",
    "question":"The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
    "correct_answer":"True",
    "incorrect_answers":["False"]},
    //--------------
    {
        category: "Science: Computers",
        type: "multiple",
        "time":20,
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        "time":20,
        difficulty: "easy",
        question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        "time":15,
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        "time":15,
        difficulty: "easy",
        question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        "time":20,
        difficulty: "easy",
        question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        "time":20,        
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        "time":20,
        difficulty: "easy",
        question:
        "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        "time":20,
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        "time":15,
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        "time":20,
        difficulty: "easy",
        question:
        "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

const loadTime = function () {
    let interval = null;
    //console.log("loaded");
    sessionStorage.clear();    
    let pointCount = 0;
    let countdownTimer ="START";
    const timer = document.getElementById("countdownTimerText");
    timer.innerText = countdownTimer;

    //chart
    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    
    type: 'doughnut',
    data: {
        labels: [ ],
        datasets: [{
            label: '# of Votes',
            data: [ 0,1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            //y: {
            //    beginAtZero: false
            //}
        }
    }
});

    
    let questionNumber = -1;
    const questionText = document.querySelector("#questionText");
    let question = easyComputerQuestions[questionNumber];
    const replayButton = document.createElement("div");
    replayButton.setAttribute("class","restart");
    let countUp =1;

    const countdown = function (){ 
        countdownTimer--;
        countUp ++;        
        console.log(countdownTimer)
        if(countdownTimer > -1){
            timer.innerText = countdownTimer+1;
            myChart.data.datasets[0].data[0] =  countUp;
            myChart.data.datasets[0].data[1] = countdownTimer;
            myChart.update();
        }else{
            timer.innerText = "Time's Up!";
            clearInterval(interval);
            countUp = 0;
            setTimeout(nextQuestion, 1000)
        }
        //console.log(timer.innerText);
        
        
        
    }
    const countdownWrapper = function (){
        interval = setInterval(countdown, 1000);             
    }
    
    const scoreScreen = function (){
        sessionStorage.setItem("numberOfQuestions", easyComputerQuestions.length);        
        sessionStorage.setItem("score", pointCount);
        window.open("./results.html","_self");
    } 
    
    const answerContainer = document.querySelector(".answerContainer");
    
    const nextQuestion = function (){        
        while (answerContainer.firstChild) {
            answerContainer.removeChild(answerContainer.firstChild);
        }        
        questionNumber++;
        if(questionNumber < easyComputerQuestions.length){
            countdownTimer = easyComputerQuestions[questionNumber].time;

        }
        countdownWrapper();
        
        if(questionNumber< easyComputerQuestions.length){
            questionText.innerText = easyComputerQuestions[questionNumber].question;
            question = easyComputerQuestions[questionNumber]
            let allAnswers = []
            allAnswers.push(question.correct_answer)
            allAnswers.push(...question.incorrect_answers)
            
        let answersIndex = []
        for (let i = 0; i < allAnswers.length; i++) {
            answersIndex.push(i)
        }
        for (let i = 0; i < allAnswers.length; i++) {
            let randomIndex = Math.floor(Math.random() * answersIndex.length)
            let randomAnwserIndex = answersIndex.splice(randomIndex, 1)[0]
            let randomAnwser = allAnswers[randomAnwserIndex]
            
            const newOption = document.createElement("div");
            const newText = document.createElement("p");
            newText.innerText = randomAnwser;
            newOption.setAttribute("class","option border");
            answerContainer.append(newOption);
            newOption.append(newText);
        }           
    }else{
        scoreScreen();
    }
    const options = document.querySelectorAll(".option");
    for(let option of options){
        if(option.innerText === question.correct_answer){                
            option.onclick = function(){
                questionRight();
            }
        }else{            
            option.onclick = function(){
                questionWrong();
            }            
        }
        document.getElementById("progressIndicatorText").innerText = `QUESTION ${questionNumber+1}/${easyComputerQuestions.length}`;
    }


}

nextQuestion();

const questionRight = function (){
    //console.log(pointCount,`correct`);
    pointCount++;    
    nextQuestion(); 
}
const questionWrong = function (){
    nextQuestion();
}
};










