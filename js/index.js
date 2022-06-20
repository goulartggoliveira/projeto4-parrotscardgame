/* VARIÁVEIS GLOBAIS */

let numCartas;
let chosenCard = [];
i = 0;
let cardTurned = true;
/* CONTAINER COM AS CARTAS */

let cards = document.querySelector(".site-container");

/* NUMERO DE JOGADAS */

let numJogadas = 0;

/* FUNÇÃO PARA CHAMAR OS CARDS */

function addCards() {
  while (numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
    numCartas = parseInt(
      prompt(
        `Com quantas cartas você quer jogar?(escolha um número entre 4 e 14 que não seja ímpar)`
      )
    );
  }

  //OBJETOS IMAGES

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

  /* MÉTODO sort() */

  evenCards.sort(twistCards);

  /* CRIAÇÃO DA DIV DOS CARDS */

  for (let i = 0; i < numCartas; i++) {
    cards.innerHTML += `
    <div class="card" onclick="turnCards(this)
    " >
    <div class="front-card body-card" > 
    <img src="${evenCards[i]}" /> 
    </div>
    <div class="back-card body-card" ><img src="./front.png">
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

/* FUNÇÃO PARA VIRAR AS CARTAS */

function turnCards(element) {
  if (cardTurned) {
    if (chosenCard.length <= 2) {
      numJogadas++;
      i++;
      element.classList.add("chosen");
      chosenCard.push(element);

      if (i === 2) {
        if (chosenCard[i - 2].innerHTML === chosenCard[i - 1].innerHTML) {
          chosenCard[i - 2].removeAttribute("onclick");
          chosenCard[i - 1].removeAttribute("onclick");
          i = 0;
          chosenCard = [];
          setTimeout(endGame, 1000);
        } else {
          cardTurned = false;
          setTimeout(unturnCard, 1000);
        }
      }
    }
  }
}

/* FUNÇÃO DE DESVIRAR AS CARTAS */

function unturnCard() {
  chosenCard[i - 2].classList.remove("chosen");
  chosenCard[i - 1].classList.remove("chosen");
  chosenCard = [];
  i = 0;
  cardTurned = true;
}

/* FIM DO JOGO */

function endGame() {
  turned = document.querySelectorAll(".chosen");

  if (turned.length === numCartas) {
    alert("Parabéns, você ganhou em " + numJogadas + " jogadas");
    let restart = prompt(
      "Gostaria de jogar novamente?(Digite 'sim' para jogar novamente)"
    );
    if (restart === "sim") {
      window.location.reload(true);
    }
  }
}
