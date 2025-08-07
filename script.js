const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma reunião, um colega recebe crédito por uma ideia sua. O que você faz?",
        alternativas: [
            {
                texto:  "Fico tranquila, sei que meu trabalho será reconhecido mais tarde.",
                afirmacao: "Você confia que sua competência será reconhecida com o tempo."
            },
            {
                texto: "Pego a oportunidade para destacar que a ideia foi minha." , 
                afirmacao: "Você defende sua autoria de forma firme e educada."
            }
        ]
    },
    {
        enunciado: "Você é convidada para um cargo de liderança, mas alguns duvidam das suas habilidades. Como reage?",
        alternativas: [
            {
                texto:  "Aceito com confiança, sei que sou capaz.",
                afirmacao:"Você acredita no seu valor e na sua capacidade de liderar."
            },
            {
                texto: "Sinto pressão, mas aceito o desafio.",
                afirmacao:"Você decide aceitar o cargo, embora sinta que precisa provar seu valor."
            }
        ]
    },
    {
        enunciado: "Uma amiga é desrespeitada em público. O que você faz?",
        alternativas: [
            {
                texto:  "Defendo ela na hora, não posso deixar passar.",
                afirmacao:  "Você não hesita em se posicionar contra o desrespeito."
            },
            {
                texto: "Fico quieta, pois pode ser desconfortável intervir.",
                afirmacao: "Você hesita, mas se sente desconfortável com a situação."
            }
        ]
    },
    {
        enunciado: "Você vê uma amiga com dificuldades financeiras. O que faz?",
        alternativas: [
            {
                texto: "Ajudo no que posso e a oriento sobre soluções.",
                afirmacao: "Você oferece apoio prático e emocional."
            },
            {
                texto:  "Apoio emocionalmente, mas não tenho como ajudar financeiramente.",
                afirmacao: "Você a apoia de outras formas, mesmo sem ajuda financeira."
              
             }
        ]
    },
    {
        enunciado: "Você ouve que mulheres não devem se expressar em público. O que faz?",
        alternativas: [
            {
                texto: "Continuo falando, pois minha voz tem valor.",
                afirmacao: "Você se recusa a silenciar e defende o direito de se expressar."
            },
            {
                texto: "Fico em silêncio, pois sei que pode ser desconfortável.",
                afirmacao: "Você hesita, sentindo que mulheres enfrentam resistência ao se expressarem."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
