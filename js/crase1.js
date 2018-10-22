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
        question: "Foi ___ Brasília aprender ___ artes políticas, mas retornou ___ terra natal sem grandes conhecimentos.",
        answers: {
            a: "a - as - à",
            b: "à - as - a",
            c: "a - às - à",
            d: "a - as - a",
            e: "à - às - à"
        },
        correctAnswer: "a",
    },
    {
        question: "Eu já conhecia ___ fazenda, por isso fui ___ cidade apreciar ___ praças onde fiz referências ___ V.S.ª e não ___ Sr.ª que o acompanha.",
        answers: {
            a: "a - a - às - a - a",
            b: "à - à - as - à - à",
            c: "a - à - as - a - à",
            d: "a - à - as - à - à",
            e: "à - à - as - a - a"
        },
        correctAnswer: "c",
    },
    {
        question: "Chegar cedo ___ repartição. Lá ___ de estar outra vez o Horácio conversando ___ uma das portas com Clementino.",
        answers: {
            a: "à - há - a",
            b: "à - há - à",
            c: "a - há - a",
            d: "à - a - a",
            e: "a - a - à"
        },
        correctAnswer: "a",
    },
    {
        question: "Ainda ___ pouco, o professor referia-se ___ questões interligadas ___ prática de ensino",
        answers: {
            a: "a - à - a",
            b: "há - à - à",
            c: "à - à - à",
            d: "há - a - à",
            e: "a - a - a"
        },
        correctAnswer: "d",
    },
    {
        question: "O grupo obedece ___ comando de um pernambucano, radicado ___ tempos em São Paulo, e se exibe diariamente ___ hora do almoço.",
        answers: {
            a: "o, a, à",
            b: "ao, há, à",
            c: "ao, a, a",
            d: "o, há, a",
            e: "o, a, a"
        },
        correctAnswer: "b",
    },
    {
        question: "___ seis horas da manhã, já estávamos ___ esperar o trem que nos levaria ___ cidadezinha, de onde iríamos, ___ cavalo, ___ fazenda do Sr. Juca.",
        answers: {
            a: "as - à - a - à - à",
            b: "às - a - à - à - a",
            c: "as - a - à - a - à",
            d: "às - a - à - a - à",
            e: "as - à - à - a - a"
        },
        correctAnswer: "d",
    },
    {
        question: "Quanto ___ mim, nada mais direi ___ favor ou contra uma decisão sobre a qual já opinei ___ muito tempo.",
        answers: {
            a: "a - a - há",
            b: "à - à - à",
            c: "a - à - há",
            d: "à - a - à",
            e: "à - à - há"
        },
        correctAnswer: "a",
    },
    {
        question: "Falando ___ equipe que ___ aguardava desde cedo, a socióloga apresentou ___ proposta inicial de seu trabalho.",
        answers: {
            a: "à - à - à",
            b: "à - a - a",
            c: "a - à - à",
            d: "a - a - a",
            e: "a - à - a"
        },
        correctAnswer: "b",
    },
    {
        question: "Assinale a alternativa em que o acento indicativo de crase está corretamente empregado em todos os casos.",
        answers: {
            a: "Foram feitas referências elogiosas à família e à pessoa do desembargador na reunião.",
            b: "À todas as pessoas de bem, é garantido o direito à regalias no clube.",
            c: "Daqui à uma semana, irei à Campinas atender à algumas pessoas.",
            d: "Quando menos se esperam apelos à favor de mudanças, eles acontecem a beça.",
            e: "Às duas horas, sairemos à procura de alguém que possa ficar frente à frente com o preso."
        },
        correctAnswer: "a",
    },
    {
        question: "Ainda ___ pouco, eu ___ vi atravessando aquela rua, ali ___ direita.",
        answers: {
            a: "há - a - à",
            b: "há - a - a",
            c: "a - a - a",
            d: "a - à - à",
            e: "à - a - a"
        },
        correctAnswer: "a",
    },
    {
        question: "O aluno fará ___ tempo as correções relativas ___ respostas dadas ao examinador.",
        answers: {
            a: "há - as",
            b: "à - às",
            c: "a - às",
            d: "há - às",
            e: "a - as"
        },
        correctAnswer: "c",
    },
    {
        question: "Aguardava ___ carta ___ muito tempo e, como não chegasse, ele referia-se ___ todo instante ___ consequências desastrosas que ___ demora tenderia ___ provocar.",
        answers: {
            a: "a - a - a - às - a - a",
            b: "a - há - a - às - a - a",
            c: "a - há - a - as - a - a",
            d: "a  - à - a - as - a - a",
            e: "à - há - a - as - a - à"
        },
        correctAnswer: "b",
    },
    {
        question: "Nas compras ___ vista ou ___ prazo, o desconto oferecido ___ clientela é praticamente o mesmo",
        answers: {
            a: "à - à - a",
            b: "à - a - à",
            c: "a - a - à",
            d: "à - à - à",
            e: "a - a - a"
        },
        correctAnswer: "b",
    },
    {
        question: "Senti, ___ partir daquele instante, que ___ empresa pouco importara minha dedicação ___ campanha de vendas.",
        answers: {
            a: "à - a - a",
            b: "a - à - à",
            c: "a - à - a",
            d: "à - à - a",
            e: "a - a - à"
        },
        correctAnswer: "b",
    },
    {
        question: "Nesta oportunidade, volto ___ referir-me ___ problemas já expostos ___ V. S.ª ___ alguns dias.",
        answers: {
            a: "à, àqueles, a, há",
            b: "a, àqueles, a, há",
            c: "a, aqueles, à, a",
            d: "à, àqueles, a, a",
            e: "a, aqueles, à, há"
        },
        correctAnswer: "b",
    },
    {
        question: "___ muito tempo, devido ___ condições político-econômicas do país, não é dado ___ população o direito de viver ___ salvo de sobressaltos financeiros",
        answers: {
            a: "a - as - à - à",
            b: "à - às - à - a",
            c: "há - às - à - a",
            d: "há - às - à - à",
            e: "à - as - à - a"
        },
        correctAnswer: "c",
    },
    {
        question: "Saiu de casa ___ oito horas da manhã, ___ escondidas, só retornando ___ noite, dirigindo-se __________ aposento suspeito.",
        answers: {
            a: "às - as - a - aquele",
            b: "as - às - à - àquele",
            c: "às - às - à - aquele",
            d: "às - às - a - aquele",
            e: "às - às - à - àquele"
        },
        correctAnswer: "e"
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
