const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio, mascote da CollabCode carta"
); // isolamos a funcao de criar um cartao no src/components/memory-card.js
const $memoryCardFront = createMemoryCard(
  "img/icon-js.png",
  "Icone de um livro de Javascript",
  "-front"
); // passamos como parametro o caminho das imagens
// passamos como parametro, a descrição do alt
const $memoryCardGueio = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio, mascote da CollabCode",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardGueio);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardGueio);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
