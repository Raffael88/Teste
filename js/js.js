let questoes = [
    // Iniciamos criando a variáevl "quaestoes", colocando uma propriedade chamada "pergunta" dentro sendo objeto,
    // que irá falar o nome da questão em um "id"(identidade) dela para as respostas,
    // nesta  colocamos todas as alternativas, como posições a serem lidas e comparadas por um for ...
    {

        pergunta: 'Você se interessa por tecnologia?',
        alternativas: ['Quase nada', 'Sim', 'Não me interresso'],
        alternativaCerta: 1
    },
    {

        pergunta: 'Você possui algum curso em Desenvolvimento Web ou de Sistemas?',
        alternativas: ['Sim', 'Nunhum', 'cursando'],
        alternativaCerta: 0

    },
    {

        pergunta: 'Você tem disponibilidade de horário?',
        alternativas: ['Não', 'Seria jornada dupla', 'Sim'],
        alternativaCerta: 2

    },
    {

        pergunta: 'Você possui ferramentas para trabalhar Home Office?',
        alternativas: ['Sim', 'Não', 'Apenas para uso doméstico'],
        alternativaCerta: 0

    },
    {

        pergunta: 'Aceitaria trabalhar não CLT',
        alternativas: ['Sim', 'Não', 'Apenas por contrato'],
        alternativaCerta: 0

    }
];

let numeroQ = 0;
//Variavel declarada "let" para ter escopo de bloco, ou seja, onde a variavel existe. Para introdução ou expressão. libera espaço 
//esta variável deve existir apenas dentro do if, você deve usar let para declará-la neste caso. Utilizandi esta, estará liberando espaço de memória sempre
//que o escopo de variavel terminar.
let alternativaC = 0;
let acertiva = 0;
let totalQ = questoes.length;

function iniciar() {
    $('.section_apresentacao, #btnsair').hide();
    $('.section_questoes').show();
    $('input[name=alternativas]').prop('checked', false);
    let q = $('<p></p>');
    $('#perguntas').append(q);
    q.text(numeroQ + 1 + ' ) ' + questoes[numeroQ].pergunta);

    for (let a in questoes[numeroQ].alternativas) {
        let alt = $('<input id="' + a + '" type="radio" name="alternativas" value="' + a + '"/>');
        let label = $('<label for="' + a + '"> ' + questoes[numeroQ].alternativas[a] + ' </label> ')
        $('#alternativas').append(alt);
        $('#alternativas').append(label);
        alt.text(a);
        alternativaC = (questoes[numeroQ].alternativaCerta);
    }
    $('#btniniciar, #alunos').hide();
    $('#btnconfirmar').show();
}

function confirmar() {
    let alternativaS = $('input[name="alternativas"]:checked').val();
    let resposta = $('<label id="resposta"></label>');
    if (alternativaS) {
        if (alternativaS == alternativaC) {
            $('#alternativas').append(resposta);
            $('#resposta').text('Requisito satisfatório!');
            $('#resposta').css('color', 'blue');
            acertiva++;
        } else {
            $('#alternativas').append(resposta);
            resposta.text('Requisito insatisfatório!');
            $('#resposta').css('color', 'red');
        }
        $('#btnconfirmar').hide();
        $('#btnavancar, #btnreiniciar, #resposta').show();
        $('input').prop("disabled", true);
    } else {
        alert('Por favor, Selecionar uma alternativa!')
    }
}

function avancar() {
    let desconforme = 0;
    let aproveitamento = 0;
    $('#btnavancar, p, label, input').hide();
    //hide não define visibilidade, ele define a exibição.
    numeroQ++;
    if (numeroQ < totalQ) {
        iniciar();
    } else {
        alert('Todas as questões foram respondidas!');
        $('#btnreiniciar').hide();
        $('#btnnovo, #btnsair').show();
        desconforme = totalQ - acertiva;
        aproveitamento = (acertiva / totalQ) * 100;
        let resultado = $('<p></p>');
        $('#perguntas').append(resultado);
        resultado.html('Requisitos Satisfatórios: ' + acertiva + '<br>' + ' Requisitos não atentidos: ' + desconforme + '<br>' + ' Enquadramento de possível vaga: ' + aproveitamento + '<label>%</label>');
    }
    $('#resposta').remove();
}

function reiniciar() {
    $('#btnreiniciar, #btnavancar, #btnnovo').hide();
    $('p, input, label').remove();
    numeroQ = 0;
    selecionada = 0;
    desconforme = 0;
    aproveitamento = 0;
    acertiva = 0;
    iniciar();
}

$(document).ready(function () {
    $('#btniniciar').show();
    $('.section_questoes').hide();

    $('#btnsair').click(function () {
        location.reload();
    });
});