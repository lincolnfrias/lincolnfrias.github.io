const quizContainer = $('#quiz');
const submitButton = $('#submit');
const resultsContainer = $('#results');

const myQuestions = [
    {
        question: "Garanto ___ você que compete ___ ela, pelo menos ___ meu ver, tomar providências para resolver o caso.",
        answers: {
            a: "a - a - a",
            b: "à - à - a",
            c: "a - à - à",
            d: "a - à - a",
            e: "à - a - a"
        },
        correctAnswer: "a",
    },
    {
        question: "Dirigi-me ___ essa professora a fim de colocar-me ___ disposição para o trabalho planejado ___ tanto tempo.",
        answers: {
            a: "à - à - há",
            b: "a - a - a",
            c: "a - à - há",
            d: "à - a - a",
            e: "a - a - há"
    },
        correctAnswer: "c",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        },
        correctAnswer: "",
    }
];



function buildQuiz() {

    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(`<label class='alternativas'><input class='radios' type="radio" name="question${questionNumber}" value="${letter}">${letter}. &emsp; ${currentQuestion.answers[letter]}</label>
                                <br>`
                );
            }
            output.push(
                `<div class="question">${questionNumber + 1}. ${currentQuestion.question}</div>
                                <br>  
                                <div class="answers"> ${answers.join('')} </div>
                                <br>`
            );
        }
    );
    quizContainer.html(output.join(''));
}

function showResults() {

    const answerContainers = quizContainer.find('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];   
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value; // para lidar com quem não respondeu: seleção ou vazio
                        // $(answerContainer).find(selector)
        const alternativasLocais = $(answerContainer).find('.alternativas'); // novo                
        const radios = $(answerContainer).find('.radios'); // novo                

        
        alternativasLocais.each((alternativaNumero, alternativaAtual) => {
            if ($(radios[alternativaNumero]).is(':checked')){
                if (userAnswer === currentQuestion.correctAnswer){
                    numCorrect++;
                    $(alternativasLocais[alternativaNumero]).append('     <span style="color:white; background-color:lightblue">&ensp; correta &ensp;</span>'); 
                }
                else {
                    $(alternativasLocais[alternativaNumero]).append('     <span style="color:white; background-color:darkred">&ensp; errada &ensp;</span>');

                };
            };
            
        });
    });       
    
    resultsContainer.html(`Você acertou ${numCorrect} de ${myQuestions.length} questões.`);
};

buildQuiz();

submitButton.on('click', showResults);
