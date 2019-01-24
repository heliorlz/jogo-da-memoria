const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const cards = {
    gueioCard : [
        "img/icon-collabcode.png",
        "Gueio, mascote da CollabCode carta",
        // ""
    ],

    jsCard : [
        "img/icon-js.png",
        "Icone de um livro de Javascript",
        "-front"
    ],

    bugCard : [
        "img/icon-bug.png",
        "Icone de um inseto representando um bug no sistema",
        "-front"
    ],

    responsiveCard : [
        "img/icon-responsivo.png",
        "Icone de um monitor e um celular, representando responsividade",
        "-front"
    ]
}

const $memoryCard = createMemoryCard(
  ...cards.gueioCard
); // isolamos a funcao de criar um cartao no src/components/memory-card.js
const $memoryCardJS = createMemoryCard(
  ...cards.jsCard
); // passamos como parametro o caminho das imagens
// passamos como parametro, a descrição do alt
const $memoryCardBug = createMemoryCard(
  ...cards.bugCard
);
const $memoryCardResponsive = createMemoryCard(
    ...cards.responsiveCard
  );


$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
