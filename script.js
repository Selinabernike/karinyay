const startButton = document.getElementById('start-quiz');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const birthdayMessage = document.getElementById('birthday-message');
const restartButton = document.getElementById('restart-quiz');

// Pertanyaan Sejarah
const questions = [
    {
        question: "What period is known as the Dark Ages?",
        answers: [
            { text: '500-1000 AD', correct: true },
            { text: '1000-1300 AD', correct: false },
            { text: '1300-1500 AD', correct: false },
            { text: '1500-1600 AD', correct: false }
        ]
    },
    {
        question: "Which cultural movement began in Italy during the 14th century?",
        answers: [
            { text: 'Renaissance', correct: true },
            { text: 'Reformation', correct: false },
            { text: 'Baroque', correct: false },
            { text: 'Enlightenment', correct: false }
        ]
    },
    {
        question: "What was the main idea behind the Enlightenment (Aufklärung)?",
        answers: [
            { text: 'Return to religious authority', correct: false },
            { text: 'Emphasis on reason and individualism', correct: true },
            { text: 'Feudalism and monarchy', correct: false },
            { text: 'Artistic expression', correct: false }
        ]
    },
    {
        question: "Who is known for initiating the Protestant Reformation?",
        answers: [
            { text: 'Martin Luther', correct: true },
            { text: 'John Calvin', correct: false },
            { text: 'Henry VIII', correct: false },
            { text: 'Zwingli', correct: false }
        ]
    },
    {
        question: "What invention is credited with spreading Reformation ideas?",
        answers: [
            { text: 'The printing press', correct: true },
            { text: 'The steam engine', correct: false },
            { text: 'The telescope', correct: false },
            { text: 'The compass', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = score;

    // Ucapan ulang tahun yang mendalam dan menyentuh
    birthdayMessage.innerText = `Happy Birthday, Karina! On this special day, I want you to know how much you are cherished. Your kindness, intelligence, and passion for life inspire those around you. As you step into another year, may it be filled with beautiful moments, new adventures, and dreams that come true. Remember, you are never alone; we are all here to support you every step of the way. Celebrate yourself today, because you deserve all the happiness in the world. Here's to another amazing year ahead! 🎉❤️`;
}

function restartQuiz() {
    resultContainer.classList.add('hidden');
    startButton.classList.remove('hidden');
}
