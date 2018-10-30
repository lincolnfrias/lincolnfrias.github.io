const quizContainer = $('#quiz');
const submitButton = $('#submit');
const resultsContainer = $('#results');

const myQuestions = [
    {
        question: "Marque a única opção correta no que se refere ao emprego das vírgulas:",
        answers: {
            a: "Além disso a Rússia, tem poder de veto no Conselho de Segurança da ONU, o que na prática, torna inviável uma condenação formal, à ação russa no órgão.",
            b: "Além disso, a Rússia tem poder de veto no Conselho de Segurança da ONU, o que, na prática, torna inviável uma condenação formal à ação russa no órgão.",
            c: "Além disso, a Rússia, tem poder, de veto no Conselho de Segurança da ONU o que, na prática torna inviável, uma condenação formal à ação russa, no órgão.",
            d: "Além disso, a Rússia, tem poder de veto, no Conselho de Segurança da ONU, o que, na prática torna inviável uma condenação formal à ação russa no órgão.",
            e: "Além disso a Rússia tem poder de veto, no Conselho de Segurança da ONU o que na prática, torna inviável uma condenação formal à ação russa, no órgão."
        },
        correctAnswer: "b",
    },
    {
        question: "As aspas marcam o uso de uma palavra ou expressão de variedade linguística diversa da que foi usada no restante da frase em:",
        answers: {
            a: "Essa visão desemboca na busca ilimitada do lucro, da apologia do empresário privado como o “grande herói” contemporâneo.",
            b: "Pude ver a obra de Machado de Assis de vários ângulos, sem participar de nenhuma visão “oficialesca”.",
            c: "Nas recentes discussões sobre os “fundamentos” da economia brasileira, o governo deu ênfase ao equilíbrio fiscal.",
            d: "O prêmio Darwin, que “homenageia” mortes estúpidas, foi instituído em 1993.",
            e: "Em fazendas de Minas e Santa Catarina, quem aprecia o campo pode curtir o frio, ouvindo “causos” à beira da fogueira."
        },
        correctAnswer: "e",
    },
    {
        question: "Considere os períodos I, II e III, pontuados de duas maneiras diferentes. <br><br> I. Pedro, o gerente do banco ligou e deixou um recado. <br> &ensp; Pedro, o gerente do banco, ligou e deixou um recado. <br> II. De repente, perceberam que estavam brigando à toa. <br> &ensp; De repente perceberam que estavam brigando à toa. <br> III. Os doces visivelmente deteriorados foram postos na lixeira. <br> &ensp; Os doces, visivelmente deteriorados, foram postos na lixeira. <br> Com a alteração da pontuação, houve mudança de sentido somente em:",
        answers: {
            a: "I.",
            b: "II.",
            c: "I e II.",
            d: "I e III.",
            e: "II e III."
        },
        correctAnswer: "c",
    },
    {
        question: "Assinale a alternativa em que a frase entre colchetes, necessariamente deve estar entre vírgulas.",
        answers: {
            a: "O presidente da República [que parte para mais uma viagem ao exterior na próxima semana] reuniu os ministros para definir estratégias a fim de combater a fome no Brasil.",
            b: "Os integrantes da comissão [que se mostrarem contrários ao que foi decidido] devem ser substituídos.",
            c: "O candidato [que não concordar com a divulgação das pesquisas de opinião] poderá entrar com processo na justiça.",
            d: "O funcionário público [que for contratado depois da alteração da lei da aposentadoria] não terá mais salário integral quando se aposentar.",
            e: "O eleitor [que se sentir ultrajado pelas campanhas eleitorais] poderá dar uma resposta a esses abusos nas urnas."
        },
        correctAnswer: "a",
    },
    {
        question: "Assinale a alternativa correta.",
        answers: {
            a: "A menina chorando de emoção, recebeu, o presente das mãos do padrinho.",
            b: "A menina, chorando de emoção recebeu o presente, das mãos do padrinho.",
            c: "A menina, chorando de emoção recebeu o presente das mãos, do padrinho.",
            d: "A menina chorando, de emoção recebeu o presente, das mãos do padrinho.",
            e: "A menina, chorando de emoção, recebeu o presente das mãos do padrinho."
        },
        correctAnswer: "e",
    },
    {
        question: "Assinale a alternativa correta.",
        answers: {
            a: "Não nego, que ao avistar a cidade natal tive uma sensação nova.",
            b: "Não nego que ao avistar, a cidade natal, tive uma sensação nova.",
            c: "Não nego que, ao avistar, a cidade natal, tive uma sensação nova.",
            d: "Não nego que ao avistar a cidade natal, tive uma sensação nova.",
            e: "Não nego que, ao avistar a cidade natal, tive uma sensação nova."
        },
        correctAnswer: "e",
    },
    {
        question: "Assinale a alternativa correta.",
        answers: {
            a: "A ideia do ministro extraordinário dos esportes, Édson Arantes do Nascimento, o Pelé de colocar na cadeia “os meninos” que participam de brigas entre torcidas organizadas é pra ficar no jargão esportivo, uma “bola fora”.",
            b: "Parece que, o Pelé do milésimo gol, que pedia escola para “esses meninos”, também era bem mais sábio do que o que hoje lhes propõe “cadeia”.",
            c: "Os otimistas dizem que está meio cheio, mas os pessimistas, vêem o mesmo copo, a mesma quantidade de água e acham que está meio vazio.",
            d: "A pesquisa, descrita na revista Superinteressante, é mais um dado na busca pelos cientistas de compreender os mecanismos moleculares da embriogênese, ou seja, a formação e o desenvolvimento dos seres vivos.",
            e: "Como os bens públicos não podem ser penhorados os precatórios entram em ordem cronológica no orçamento do governo."
        },
        correctAnswer: "d",
    },
    {
        question: "Assinale a alternativa correta.",
        answers: {
            a: "Depois que há algumas gerações, o arsênico deixou de ser vendido, em farmácias, não diminuíram os casos de suicídio, ou envenenamento criminoso, mas aumentou  o número de ratos.",
            b: "Depois que há algumas gerações o arsênico, deixou de ser vendido em farmácias, não diminuíram os casos de suicídio ou envenenamento criminoso, mas aumentou o número de ratos.",
            c: "Depois que, há algumas gerações, o arsênico deixou de ser vendido em farmácias, não diminuíram os casos de suicídio ou envenenamento criminoso, mas aumentou o número de ratos.",
            d: "Depois que há algumas gerações o arsênico deixou de ser vendido em farmácias - não diminuíram os casos de suicídio, ou envenenamento criminoso, mas aumentou o número de ratos.",
            e: "Depois que, há algumas gerações o arsênico deixou de ser vendido em farmácias, não diminuíram os casos de suicídio ou envenenamento criminoso, mas aumentou o número de ratos."
        },
        correctAnswer: "c",
    },
    {
        question: "Assinale a alternativa correta.",
        answers: {
            a: "Embora esteja ameaçada pela poluição, aquela praia recebe durante o veraneio, muitos turistas.",
            b: "Por muitos séculos, o homem usou, imprudentemente seu ambiente natural, ocasionando desequilíbrio ecológico.",
            c: "A guerra flagelo terrível, tem sido uma constante, em todos os tempos da humanidade.",
            d: "As recentes conquistas nucleares, alteram de modo profundo, as relações internacionais.",
            e: "O homem, que havia chegado atrasado, foi para o final da fila."
        },
        correctAnswer: "e",
    },
    {
        question: "Os sinais de pontuação que preenchem de maneira correta as lacunas da sentença abaixo são: <br> Em relação ao mercado de trabalho brasileiro _ podemos encará-lo sob dois aspectos _ é muito informal, pois há uma grande proporção de pessoas sem emprego fixo _ é marcado por desigualdades regionais, pois o tipo de emprego disponível varia muito de uma região para outra",
        answers: {
            a: "Ponto e vírgula, vírgula, ponto e vírgula.",
            b: "Ponto e vírgula, dois pontos, vírgula.",
            c: "Vírgula, ponto e vírgula, dois pontos.",
            d: "Vírgula, dois pontos, ponto e vírgula.",
            e: "Vírgula, vírgula, vírgula."
        },
        correctAnswer: "d",
    },
    {
        question: "Atenção, a partir de agora, assinale a alternativa <strong>incorreta</strong>.",
        answers: {
            a: "A medida aplicada, no entanto, não resolveu o problema.",
            b: "Durante o jantar o assunto foi só esse.",
            c: "Havia, contudo, inconvenientes sérios.",
            d: "Para mim, estes argumentos são falsos.",
            e: "Visitaram Recife, Fortaleza, Salvador e Maceió."
        },
        correctAnswer: "b",
    },
    {
        question: "Assinale a alternativa incorreta.",
        answers: {
            a: "No outro dia, sábado, matei os carneiros para os eleitores.",
            b: "A casa tinha três quartos, duas salas, banheiro, copa, cozinha, quarto de empregada, porão, varanda e quintal.",
            c: "Debruçado à janela ele olha a rua.",
            d: "Meu querido, estou doente de desespero.",
            e: "Depois do enterro de Luísa, Jorge despediu as criadas."
        },
        correctAnswer: "c",
    },
    {
        question: "Assinale a alternativa incorreta.",
        answers: {
            a: "Desde as primeiras chuvas, Dona Inácia iniciou seus preparativos de viagem.",
            b: "Às onze horas, o alto-falante anuncionou o início das aulas.",
            c: "Na área econômica, o novo presidente receberá um país ainda envolvido na crise.",
            d: "Todos sabemos que as inovações em qualquer das atividades humanas, especialmente nas artes, área das intimidades profundas e delicadas do sentimento, custam a vencer as resistências oriundas da tradição e da inércia.",
            e: "Meu antigo patrão, Salustino Padilha que tinha levado uma vida de economias indecentes, para fazer o filho doutor, acabara morrendo do estômago e de fome, sem ver na família o título que ambicionava."
        },
        correctAnswer: "e",
    },
    {
        question: "Assinale a alternativa incorreta.",
        answers: {
            a: "Conforme declarei, Madalena possuía um excelente coração.",
            b: "A premiação foi como devia ser, exuberante.",
            c: "O pêndulo iria de um lado para outro, mas nenhum sinal externo mostraria a marcha do tempo.",
            d: "Já sabes, que a minha alma por mais lacerada que tenha sido, não ficou abandonada.",
            e: "Para psiquiatras, psicólogos e sociólogos, o conflito familiar é inevitável e inerente à própria família."
        },
        correctAnswer: "d",
    },
    {
        question: "Assinale a alternativa incorreta.",
        answers: {
            a: "– D. Sara, a senhora é nossa benfeitora.",
            b: "Mulheres pobres, lavando roupa no riacho, representavam o outro lado do mundo.",
            c: "Peixadas, galinha de cabidela, tudo me recordava D. Sara.",
            d: "Adriano, sozinho, enfrentava a orfandade.",
            e: "Couto meu melhor amigo antecedeu-me na Academia."
        },
        correctAnswer: "e",
    },
    {
        question: "Assinale a alternativa incorreta.",
        answers: {
            a: "Os meninos, inquietos, esperavam o resultado do pedido.",
            b: "Inquietos, os meninos esperavam o resultado do pedido.",
            c: "Os meninos esperavam, inquietos, o resultado do pedido.",
            d: "Os meninos inquietos esperavam o resultado do pedido.",
            e: "Os meninos, esperavam inquietos, o resultado do pedido."
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
