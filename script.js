const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realista. Qual o primeiro pensamento?",
        alternativas: [
            "Isso é assustador!",
            "Isso é maravilhoso!"
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre está tecnologia. No fim de uma aula ela pode que você escreva uma trabalho sobreo uso de IA em sala de aula. Qual atitude você toma?",
        alternativas:[
            "",
            ""
        ]
    }
];