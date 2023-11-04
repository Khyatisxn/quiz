const questions = [
    {
        question: "The International Literacy Day is observed on?",
        answers:[
            {text: "Sep 8", correct: true},
            {text: "Nov 28", correct: false},
            {text: "May 2", correct: false},
            {text: "Sep 22", correct: false},
        ]
    },
    {
        question: "The language of Lakshadweep. a Union Territory of India, is",
        answers:[
            {text: "Tamil", correct: false},
            {text: "Hindi", correct: false},
            {text: "Malayalam", correct: true},
            {text: "Telugu", correct: false},
        ]
    },
    {
        question: "In which group of places the Kumbha Mela is held every twelve years?",
        answers:[
            {text: "Ujjain. Purl; Prayag. Haridwar", correct: false},
            {text: "Prayag. Haridwar, Ujjain,. Nasik", correct: true},
            {text: "Rameshwaram. Purl, Badrinath. Dwarika", correct: false},
            {text: "Chittakoot, Ujjain, Prayag,'Haridwar", correct: false},
        ]
    },
    {
        question: "Bahubali festival is related to",
        answers:[
            {text: "Islam", correct: false},
            {text: "Hinduism", correct: false},
            {text: "Buddhism", correct: false},
            {text: "Jainism", correct: true},
        ]
    },
    {
        question: "Which day is observed as the World Standards  Day?",
        answers:[
            {text: "June 26", correct: false},
            {text: "October 14", correct: true},
            {text: "November 15", correct: false},
            {text: "December 2", correct: false},
        ]
    },
    {
        question: "Which of the following was the theme of the World Red Cross and Red Crescent Day?",
        answers:[
            {text: "'Dignity for all - focus on women'", correct: false},
            {text: "Dignity for all - focus on Children'", correct: true},
            {text: "Focus on health for all", correct: false},
            {text: "Nourishment for all-focus on children", correct: false},
        ]
    },
    {
        question: "September 27 is celebrated every year as",
        answers:[
            {text: "Teachers' Day", correct: false},
            {text: "National Integration Day", correct: false},
            {text: "World Tourism Day", correct: true},
            {text: "International Literacy Day", correct: false},
        ]
    },
    {
        question: "Who is the author of 'Manas Ka-Hans' ?",
        answers:[
            {text: "Khushwant Singh", correct: false},
            {text: "Prem Chand", correct: false},
            {text: "Jayashankar Prasad", correct: false},
            {text: "Amrit Lal Nagar", correct: true},
        ]
    },
    {
        question: "The death anniversary of which of the following leaders is observed as Martyrs' Day?",
        answers:[
            {text: "Smt. Indira Gandhi", correct: false},
            {text: "Jawaharlal Nehru", correct: false},
            {text: "Mahatma Gandhi", correct: true},
            {text: "Lal Bahadur Shastri", correct: false},
        ]
    },
    {
        question:"Who is the author of the epic 'Meghdoot'?",
        answers:[
            {text: "Vishakadatta", correct: false},
            {text: "Valmiki", correct: false},
            {text: "Banabhatta", correct: false},
            {text: "Kalidas", correct: true},
        ]
    },
    {
        question: "'Good Friday' is observed to commemorate the event of",
        answers:[
            {text: "birth of Jesus Christ", correct: false},
            {text: "birth of' St. Peter", correct: false},
            {text: "crucification 'of Jesus Christ", correct: true},
            {text: "rebirth of Jesus Christ", correct: false},
        ]
    },
    {
        question: "Who is the author of the book 'Amrit Ki Ore'?",
        answers:[
            {text: "Mukesh Kumar", correct: false},
            {text: "Narendra Mohan", correct: true},
            {text: "Upendra Nath", correct: false},
            {text: "Nirad C. Choudhary", correct: false},
        ]
    },
    {
        question: "Which of the following is observed as Sports Day every year?",
        answers:[
            {text: "22nd April", correct: false},
            {text: "26th  july", correct: false},
            {text: "29th August", correct: true},
            {text: "2nd October", correct: false},
        ]
    },
    {
        question: "World Health Day is observed on",
        answers:[
            {text: "April 7", correct: true},
            {text: "March 6", correct: false},
            {text: "May 15", correct: false},
            {text: "April 28", correct: false},
        ]
    },
    {
        question: "Pongal is a popular festival of which state?",
        answers:[
            {text: "Karnataka", correct: false},
            {text: "Kerala", correct: false},
            {text: "Tamil Nadu", correct: true},
            {text: "Andhra Pradesh", correct: false},
        ]
    },
    {
        question: "Ghototkach in Mahabharat was the son of",
        answers:[
            {text: "Duryodhana", correct: false},
            {text: "Arjuna", correct: false},
            {text: "Yudhishthir", correct: false},
            {text: "Bhima", correct: true},
        ]
    },
    {
        question: "Which of the following Muslim festivals is based on the 'Holy Quran' ?",
        answers:[
            {text: "Id -ul-Zuha", correct: true},
            {text: "Id -ul-Fitr", correct: false},
            {text: "Bakri-id", correct: false},
            {text: "Moharram", correct: false},
        ]
    },
    {
        question: "Van Mahotsav was started by",
        answers:[
            {text: "Maharshi Karve", correct: false},
            {text: "Bal Gangadhar Tiiak", correct: false},
            {text: "K.M, Munshi", correct: true},
            {text: "Sanjay Gandhi", correct: false},
        ]
    },
    {
        question: "The first month of the Indian national calendar is",
        answers:[
            {text: "Magha", correct: false},
            {text: "Chaitra", correct: true},
            {text: "Ashadha", correct: false},
            {text: "Vaishakha", correct: false},
        ]
    },
    {
        question: "Which of the following is not a dance from Kerala?",
        answers:[
            {text: "Kathakali", correct: false},
            {text: "Mohiniattam", correct: false},
            {text: "Ottan Thullal", correct: false},
            {text: "Yaksha Gana", correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn2");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
        
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again.";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

