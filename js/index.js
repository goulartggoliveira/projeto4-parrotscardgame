/* VARIÁVEIS GLOBAIS */

let numCartas;
let cartasEscolhidas = [];
i = 0;
/* CONTAINER COM AS CARTAS */

let cards = document.querySelector(".site-container");

/* NUMERO DE JOGADAS E CARTA VIRADA */

let turnCards = true;
let numJogadas = 0;

/* FUNÇÃO PARA CHAMAR OS CARDS */

function addCards() {
  while (numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
    numCartas = prompt(
      `Com quantas cartas você quer jogar?(escolha um número entre 4 e 14 que não seja ímpar)`
    );
  }

  let images = [
    "imgs/bobrossparrot.gif",
    "imgs/explodyparrot.gif",
    "imgs/fiestaparrot.gif",
    "imgs/metalparrot.gif",
    "imgs/revertitparrot.gif",
    "imgs/tripletsparrot.gif",
    "imgs/unicornparrot.gif",
  ];

  let evenCards = [];

  for (let i = 0; i < numCartas / 2; i++) {
    evenCards.push(images[i], images[i]);
  }

  evenCards.sort(twistCards);

  /* CRIAÇÃO DA DIV DOS CARDS */

  for (let i = 0; i < numCartas; i++) {
    cards.innerHTML += `
    <div class="card" onclick="virarCarta(this)" >
    <div class="front-face body-card" > 
    <img src="${evenCards[i]}" /> 
    </div>
    <div class="back-face body-card" ><img src="/imgs/front.png">
    </div>
    </div>
    `;
  }
}

/* EMBARALHADOR */

function twistCards() {
  return Math.random() - 0.5;
}

addCards();
