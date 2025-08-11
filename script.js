const caixaPrincipal = document.querySelector('caixa-principal');

const caixaPerguntasl = document.querySelector('caixa-pergunta');

const caixaAlternativas = document.querySelector('caixa-alternativa');

const caixaResultados = document.querySelector('caixa-resultado');

const caixaResultados = document.querySelector('caixa-Resultado');

const lista = [ ];

const pergunta = [ 
    {
    enunciado: "pergunta 1"
    alternativas: [
        "Alternativa 1", 
        "Alternativas 2",
    ]
}

 {
    enunciado: "pergunta 2"
    alternativas: [
        "Alternativa 1", 
        "Alternativas 2",
    ]
}
 {
    enunciado: "pergunta 3"
    alternativas: [
        "Alternativa 1", 
        "Alternativas 2",
    ]
}
 {
    enunciado: "pergunta 4"
    alternativas: [
        "Alternativa 1", 
        "Alternativas 2",
    ]
}
 {
    enunciado: "pergunta 5"
    alternativas: [
        "Alternativa 1", 
        "Alternativas 2",
    ]
}
];
le atual = 0;
let perguntaAtual;
function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;

}
mostraPergunta