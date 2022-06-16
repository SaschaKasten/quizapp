let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was ist das größte Bundesland?",
        "answer_1": "Nordrhein-Westfalen",
        "answer_2": "Bremen",
        "answer_3": "Baden-Würtemberg",
        "answer_4": "Bayern",
        "right_answer": 4
    },
    {
        "question": "Wo spricht man kein Spanisch?",
        "answer_1": "Paraguay",
        "answer_2": "Brasilien",
        "answer_3": "Argentinien",
        "answer_4": "Mexico",
        "right_answer": 2
    },
    {
        "question": "Welche Marken gehören nicht zum Coca-Cola Konzern?",
        "answer_1": "Vio",
        "answer_2": "Powerade",
        "answer_3": "Schwip Schwap",
        "answer_4": "Fuze tea",
        "right_answer": 3
    },
    {
        "question": "Wer hat Penicillin entdeckt?",
        "answer_1": "Bruno Mars",
        "answer_2": "Alexander Fleming",
        "answer_3": "Nicholas Flamel",
        "answer_4": "Hans-Werner Sinn",
        "right_answer": 2
    },
    {
        "question": "Wann wurde Deutschland das letzte Mal Fußball Weltmeister?",
        "answer_1": "2018",
        "answer_2": "1992",
        "answer_3": "2014",
        "answer_4": "1974",
        "right_answer": 3
    },
    {
        "question": "Was ist das höchste Gebäude der Welt (2022)?",
        "answer_1": "Shanghai Tower",
        "answer_2": "Eiffelturm",
        "answer_3": "Empire State Building",
        "answer_4": "Burj Khalifa",
        "right_answer": 4
    }
];

let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        // TODO: Show End Screen
    } else { 

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();

}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}