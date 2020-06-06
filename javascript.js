const questionText = document.querySelector(".question-text");
const currentQuestionNum = document.querySelector(".current-question-number");
const optionBox = document.querySelector(".option-box");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const correctAnswer = document.querySelector(".correct-answer");
const resultBtn = document.querySelector(".result-btn");
const scoreText = document.querySelector(".score-text");
const remainingTime = document.querySelector(".remaining-time");
const questionBox = document.querySelector(".question-box");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const quizOverBox = document.querySelector(".quiz-over-box");
const tryAgainBtn = document.querySelector(".try-again-btn");
const startBtn = document.querySelector(".start-btn");
let questionIndex = 0;
let score = 0;
let number = 0;

myApp=[{
    question:"What was the first Disney film that was produced in color?",
    options:["Cinderella","Snow White and the Seven Dwafs","Sleeping Beauty","Pocahontas"],
    answer:1,
},

{
    question:"What is celebrated on December 26th?",
    options:["the day after Christmas","Harvest Day","Boxing Day","National Dog Day"],
    answer:2,
},

{
    question:"How many rings are there in the Olympic symbol?",
    options:["5","7","4","9"],
    answer:1,
},

{
    question:"How many time zones are there in the world?",
    options:["7","24","23","9"],
    answer:1,
},

{
    question:"Han Solo is a character from which movie series?",
    options:["Harry Porter","Star Wars","Lord of the Rings","Indiana Jones"],
    answer:1,
},

{
    question:"What is the longest river in the world?",
    options:["Amazon","Congo","Nile","Hudson"],
    answer:2,
}];

function load(){
    number++;
    questionText.innerHTML=myApp[questionIndex].question;
    createOptions();
    scoreText;
    currentQuestionNum.innerHTML=number;
}

function createOptions(){
    optionBox.innerHTML="";
    for(let i=0; i<myApp[questionIndex].options.length; i++){
        const option = document.createElement("div");
              option.innerHTML=myApp[questionIndex].options[i];
              option.classList.add("option");
              option.id=i;
              option.setAttribute("onclick","check(this)");
              optionBox.appendChild(option);
    }
}

function check(ele){
    const id=ele.id;
    if(id==myApp[questionIndex].answer){
        ele.classList.add("correct");
        score++;
        scoreBoard();
    }
    else{
        ele.classList.add("incorrect");
        for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            };
        }
    }
    // disableOptions()
    showNextQuestionBtn();
    startTimer();
    stopTimer();

    if(number == myApp.length){
        quizOver();
    }
}

function startTimer(){
    let timeLimit=10;
    remainingTime.innerHTML=timeLimit;
    interval=setInterval(()=>{
        timeLimit--;
        if(timeLimit < 3){
            timeLimit="0"+timeLimit;
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
            clearInterval(interval);
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval);
}


// function disableOptions(){
//     for(let i=0; i<optionBox.children.length; i++){
//         optionBox.children[i].classList.add("you-have answered");
//     }
// }

function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}

// function hideNextQuestion(){
//     nextQuestionBtn.classList.remove("show");
// }

function scoreBoard(){
    correctAnswer.innerHTML=score;
}

nextQuestionBtn.addEventListener("click", nextQuestion);

function nextQuestion(){
    questionIndex++;
    load();
    // hideNextQuestionBtn();
    startTimer();
    stopTimer();
}

// resultBtn.addEventListener("click", quizResult)
//     quizBox.style.display="none";
//     quizOverBox.classList.add("show");
// })

function quizResult(){
    document.querySelector(".total-questions").innerHTML=myApp.length;
    document.querySelector(".correct").innerHTML=score;
    document.querySelector(".wrong").innerHTML=score;
    const percentage=(score/myApp.length)*100;
    document.querySelector(".percentage").innerHTML=percentage.toFixed(2) + "%";
}

function resetQuiz(){
    questionIndex = 0;
    score = 0;
    number = 0;
}

function quizOver(){
    nextQuestionBtn.classList.remove("show");
    resultBtn.classList.add("show");
}

resultBtn.addEventListener("click",()=>{
    quizBox.style.display="none";
    quizBox.classList.remove("show");
    resultBtn.classList.remove("show");
    quizOverBox.classList.add("show");
    quizResult();
})

tryAgainBtn.addEventListener("click", ()=>{
    quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
})

startBtn.addEventListener("click", ()=>{
    quizBox.classList.add("show");
    startTimer();
})

window.onload=()=>{
    load();
}