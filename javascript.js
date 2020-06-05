// Set-up question using Array

let question = [{
    question1: "What was the first Disney film that was produced in color?",
    choiceA: "Cinderella",
    choiceB: "Snow White and the Seven Dwafs",
    choiceC: "Sleeping Beauty",
    choiceD: "Pocahontas",
    correct: "B"
},

{
    question2: "What is celebrated on December 26th?",
    choiceA: "the day after Christmas",
    choiceB: "Harvest Day",
    choiceC: "Boxing Day",
    choiceD: "National Dog Day",
    correct: "C"
},

{
    question3: "How many rings are there in the Olympic symbol?",
    choiceA: "5",
    choiceB: "7",
    choiceC: "4",
    choiceD: "9",
    correct: "7"
},

{
    question4: "How many time zones are there in the world?",
    choiceA: "7",
    choiceB: "24",
    choiceC: "23",
    choiceD: "9",
    correct: "B"
},

{
    question5: "Han Solo is a character from which movie series?",
    choiceA: "Harry Porter",
    choiceB: "Star Wars",
    choiceC: "Lord of the Rings",
    choiceD: "Indiana Jones",
    correct: "B"
},

{
    question6: "What is the longest river in the world?",
    choiceA: "Amazon",
    choiceB: "Congo",
    choiceC: "Nile",
    choiceD: "Hudson",
    correct: "C"
}];

// Quiz Render

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestions(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// Progress Render

function progressRender(){;
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.background = "green"
}

function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.background = "red"
}

// Counter render

const questionTime = 10; 
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;
let timer = setInterval(counterRender,1000);

function counterRender(){
    if( count <= questionTime){
        counterRender.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px";
        count++;
    }else{
        count = 0;
        answerIsWrong();
        if( runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++;
            questionRender();
        }else{
            clearInterval(timer);
            scoreRender();
        }
    }
}

// checkAnswer();

let score = 0;

function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        questionRender;
    }else{
        clearInterval(timer);
        scoreRender();
    }
}

// Start Quiz

const start = document.getElementById("start");
start.addEventListener("click", startQuiz);

let timer;

function startQuiz(){
    start.style.display = "none";
    counterRender();
    timer = setInterval(counterRender,1000);
    progressRender();
    questionRender();
    startQuiz.style.display = "block";
}

// Ternary operator

if(Y == "one"){
    X = 1;
}else{
    X = 0;
}

if(Y == "one"){
    X = 1;
}else if(Y == "zero"){
    X = 0;
}else{
    X = 2;
}

// Score render

function scoreRender(){
    scoreContainer.style.display = "block";
    let scorePerCent = Math.round(100 * score / question.length);
    
}