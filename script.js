let questions = [
    {
        "question": "Wie viele Bücher hat der Kanon der Bibel?",
        "answer_1": "66",
        "answer_2": "27",
        "answer_3": "39",
        "answer_4": "77",
        "right_answer": 1
    },
    {
        "question": "Wer ist die Wahrheit?",
        "answer_1": "Mohammed",
        "answer_2": "Buddha",
        "answer_3": "Jesus Christus",
        "answer_4": "ich",
        "right_answer": 3
    },
    {
        "question": "Welche Person wurde von seinen Brüdern in einen Brunnen geworfen?",
        "answer_1": "Hesekiel",
        "answer_2": "Simeon",
        "answer_3": "Daniel",
        "answer_4": "Joseph",
        "right_answer": 4
    },
    {
        "question": "Was schuf Gott am ersten Tag der Schöpfung?",
        "answer_1": "Tiere",
        "answer_2": "Licht",
        "answer_3": "Pflanzen",
        "answer_4": "Sterne",
        "right_answer": 2
    }    
];

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion(0);
}

function showQuestion(){

    if (currentQuestion >= question.length){

    }

    else{
        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
    
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQUestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`

    if(selectedQUestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }

    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();    
}

function resetAnswerButtons(){
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-uccess');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}