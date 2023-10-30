let crow = document.createElement('audio');
crow.src = "Bird%20recordings/XC462765%20-%20American%20Crow%20-%20Corvus%20brachyrhynchos.mp3";
crow.controls = true;

let robin = document.createElement('audio');
robin.src = "Bird%20recordings/XC524254%20-%20American%20Robin%20-%20Turdus%20migratorius.mp3";
robin.controls = true;

let finch = document.createElement('audio');
finch.src = "Bird%20recordings/XC812729%20-%20House%20Finch%20-%20Haemorhous%20mexicanus%20roseipectus.wav";
finch.controls = true;

let starling = document.createElement('audio');
starling.src = "Bird%20recordings/XC816197%20-%20European%20Starling%20-%20Sturnus%20vulgaris.wav";
starling.controls = true;

let sparrow = document.createElement('audio');
sparrow.src = "Bird%20recordings/XC830449%20-%20House%20Sparrow%20-%20Passer%20domesticus.wav";
sparrow.controls = true;



const questions = [
    {
        vocalization: "<i>Caw, caw</i>",
        
        recording: crow,
        answers: [
            { text: "American Crow", correct: true },
            { text: "Common Raven", correct: false },
            { text: "American Robin", correct: false },
            { text: "Woodhouse's Scrub-Jay", correct: false }
        ]
    },
    {
        vocalization: "A series of low, whistled phrases",
        recording: robin,
        answers: [
            { text: "American Robin", correct: true },
            { text: "Townsend's Solitaire", correct: false },
            { text: "House Finch", correct: false },
            { text: "House Sparrow", correct: false }
        ]
    },
    {
        vocalization: "<i>fillp, fillp</i>",
        recording: finch,
        answers: [
            { text: "House Finch", correct: true },
            { text: "House Sparrow", correct: false },
            { text: "White-crowned Sparrow", correct: false },
            { text: "Spotted Towhee", correct: false }
        ]
    },
    {
        vocalization: "muffled, dry buzzing <i>wrrsh</i>",
        recording: starling,
        answers: [
            { text: "Red-winged Blackbird", correct: false },
            { text: "Cedar Waxwing", correct: false },
            { text: "European Starling", correct: true },
            { text: "Dark-eyed Junco", correct: false }
        ]
    },
    {
        vocalization: "A monotonous series of nearly identical chirps",
        recording: sparrow,
        answers: [
            { text: "Black-capped Chickadee", correct: false },
            { text: "House Finch", correct: false },
            { text: "European Starling", correct: false },
            { text: "House Sparrow", correct: true }
        ]
    },
];

const vocalizationElement = document.getElementById("vocalization");
const recordingElement = document.getElementById("recording");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    // let questionNumber = currentQuestionIndex + 1;
    vocalizationElement.innerHTML = currentQuestion.vocalization;
    recordingElement.appendChild(currentQuestion.recording);
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("Button");
        button.innerHTML = answer.text;
        button.classList.add("quizButton");
        answerButtonsElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    recordingElement.style.display = "block";
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    while (recordingElement.firstChild) {
        recordingElement.removeChild(recordingElement.firstChild);
    }
    
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    vocalizationElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    recordingElement.style.display = "none";
    localStorage.setItem('score', `${score} out of ${questions.length}`);
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});



startQuiz();