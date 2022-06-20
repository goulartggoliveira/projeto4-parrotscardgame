/* VARIÁVEIS GLOBAIS */
let numCartas;
let cartasEscolhidas = [];
i = 0;
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
}
addCards();
