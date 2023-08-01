let questions = [
    {
        "question": "Wie viele Bücher hat der Kanon der Bibel?",
        "answer_1": "66",
        "answer_2": "27",
        "answer_3": "39",
        "answer_4": "77",
        "right_answer": 1,
    },
    {
        "question": "Wer ist die Wahrheit?",
        "answer_1": "Mohammed",
        "answer_2": "Buddha",
        "answer_3": "Jesus Christus",
        "answer_4": "ich",
        "right_answer": 3,
    },
    {
        "question": "Welcher junge Mann wurde von seinen Brüdern in einen Brunnen geworfen?",
        "answer_1": "Hesekiel",
        "answer_2": "Simeon",
        "answer_3": "Daniel",
        "answer_4": "Joseph",
        "right_answer": 4,
    },
    {
        "question": "Was schuf Gott am ersten Tag der Schöpfung?",
        "answer_1": "Tiere",
        "answer_2": "Licht",
        "answer_3": "Pflanzen",
        "answer_4": "Sterne",
        "right_answer": 2,
    }    
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){

    if(gameIsOver()){
        showEndscreen();   
    }
    else{
        updateProgressBar();
        updateToNextQuestion();
        enablePreviousArrow(currentQuestion);
    }
    
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function showEndscreen(){
    document.getElementById('endScreen').style = '';
    document.getElementById('startGame').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
}

function updateProgressBar(){
    let percent = Math.round((currentQuestion + 1) * 100 / questions.length);

    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    question.selection = selectedQuestionNumber;
    let idOfRightAnswer = `answer_${question['right_answer']}`

    if(rightAnswerSelected(selectedQuestionNumber, question)){
        document.getElementById(selection).parentNode.classList.add('succes-modified');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    }

    else{
        document.getElementById(selection).parentNode.classList.add('danger-modified');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('succes-modified');
        AUDIO_FAIL.play();
    }

    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question){
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();    
}

function previousQuestion(){
    currentQuestion--;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();    
}

function resetAnswerButtons(){
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('danger-modified');
    document.getElementById('answer_1').parentNode.classList.remove('succes-modified');
    document.getElementById('answer_2').parentNode.classList.remove('danger-modified');
    document.getElementById('answer_2').parentNode.classList.remove('succes-modified');
    document.getElementById('answer_3').parentNode.classList.remove('danger-modified');
    document.getElementById('answer_3').parentNode.classList.remove('succes-modified');
    document.getElementById('answer_4').parentNode.classList.remove('danger-modified');
    document.getElementById('answer_4').parentNode.classList.remove('succes-modified');
}

function removeDisplayNone(element){
    document.getElementById(element).style = '';
}



function addDisplayNone(element){
    document.getElementById(element).classList.add('d-none');
}

function enablePreviousArrow(i){
    if(i<1){
        document.getElementById('previousArrrow').classList.add('d-none');
    }

    else{
        document.getElementById('previousArrrow').classList.remove('d-none');
    }
    
}