// Set-up question using Array

const questionText = document.querySelector(".question-text");
const questionIndex = document.querySelector(".question-index");

myApp = [{
    question:"What was the first Disney film that was produced in color?",
    option:["Cinderella","Snow White and the Seven Dwafs","Sleeping Beauty","Pocahontas"],
    answer:1,
},

{
    question:"What is celebrated on December 26th?",
    option:["the day after Christmas","Harvest Day","Boxing Day","National Dog Day"],
    answer:2,
},

{
    question:"How many rings are there in the Olympic symbol?",
    option:["5","7","4","9"],
    answer:1,
},

{
    question:"How many time zones are there in the world?",
    option:["7","24","23","9"],
    answer:1,
},

{
    question:"Han Solo is a character from which movie series?",
    option:["Harry Porter","Star Wars","Lord of the Rings","Indiana Jones"],
    answer:1,
},

{
    question:"What is the longest river in the world?",
    option:["Amazon","Congo","Nile","Hudson"],
    answer:2,
}];

// Select Elements

const questionBox = document.querySelector(".question-box");

const optionBox = document.querySelector(".option-box");

let questionCounter = 0;
let curreQuestion;
let availableQuestion = [];

function setAvailableQuestion(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestion.push(quiz[i])
    }
}

function getNewQuestion(){

}

window.onload = function(){
    setAvailableQuestion();
    getNewQuestion();
}




// Quiz Render

function renderQuestions(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.style.display = "none";
renderQuestions();
quiz.style.display = "block";

// Progress Render

function renderProgress(){;
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



// Ternary operator

// if(Y == "one"){
//     X = 1;
// }else{
//     X = 0;
// }

// if(Y == "one"){
//     X = 1;
// }else if(Y == "zero"){
//     X = 0;
// }else{
//     X = 2;
// }

// Score render

function scoreRender(){
    scoreDiv.style.display = "block";
    let scorePerCent = Math.round(100 * score / question.length);

    let img = (scorePerCent >= 100) ? "img...." :
              (scorePerCent >= 80) ? "img...." :
              (scorePerCent >= 60) ? "img...." :

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}